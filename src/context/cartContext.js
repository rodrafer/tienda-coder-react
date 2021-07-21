import { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { dataBase } from '../firebase/firebase';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [orderId, setOrderId] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const isInCart = (itemIdToCheck) => cart.some(order => order.item.id === itemIdToCheck);

    const addItem = (newItem, amount) => {
        !isInCart(newItem.id) && setCart([...cart, { item: newItem, quantity: amount }]);
    }

    const removeItem = (itemId) => {
        isInCart(itemId) && setCart(cart.filter(order => order.item.id !== itemId));
    }

    const updateQuantity = (itemId, newQuantity) => {
        cart.find(order => order.item.id === itemId).quantity = newQuantity;
        setCart([...cart]);
    }

    const clear = () => {
        setCart([]);
        orderId && setOrderId();
    };
        
    const getFinalOrder = () => {
        const ordersCollection = dataBase.collection('ordenes');
        
        setIsLoading(true);

        const newOrder = {
            buyer: {
                name: 'Francisco Rodríguez',
                phone: '351 267-39485',
                email: 'frodriguez@gmail.com'
            },
            items: cart.map(({ item, quantity }) => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity,
                }
            }),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalCount
        }

        ordersCollection.add(newOrder).then(({ id }) => {
            setOrderId(id);
        }).catch(error => {
            console.log('Error while uploading new order: ', error);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        // Logging cart's value every time it changes (add/remove item) just to check if it behaves as expected
        console.log(cart)

        const quantitiesInCartArray = cart.map(({ quantity }) => quantity);
        const finalQuantity = quantitiesInCartArray.reduce((accumulatedQuantity, newQuantity) => accumulatedQuantity + newQuantity, 0);
        setTotalQuantity(finalQuantity);

        const countsInCartArray = cart.map(({ item, quantity }) => quantity * Number(item.price));
        const finalCount = countsInCartArray.reduce((accumulatedCount, newCount) => accumulatedCount + newCount, 0);
        setTotalCount(finalCount.toFixed(2));

    }, [cart]);

    return (
        <CartContext.Provider value={
            {
                cart,
                totalQuantity,
                totalCount,
                orderId,
                isLoading,
                isInCart,
                addItem,
                removeItem,
                updateQuantity,
                getFinalOrder,
                clear
            }
        }>
            {children}
        </CartContext.Provider>
    )
}
