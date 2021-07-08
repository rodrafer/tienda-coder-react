import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (itemIdToCheck) => cart.some(order => order.item.id === itemIdToCheck);

    const addItem = (newItem, amount) => {
        !isInCart(newItem.id) && setCart([...cart, { item: newItem, quantity: amount }]);
    }

    const removeItem = (itemId) => {
        isInCart(itemId) && setCart(cart.filter(order => order.item.id !== itemId));
    }

    const clear = () => setCart([]);

    useEffect(() => {
        // Logging cart's value every time it changes (add/remove item) just to check if it behaves as expected
        console.log(cart)
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
