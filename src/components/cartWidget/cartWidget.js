import './cartWidget.scss';
import shoppingCart from '../../assets/shopping-trolley.png';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export const CartWidget = () => {
    const { cart, setItem } = useContext(CartContext);

    if (!cart.includes('item0')) {
        setItem('item0')
    }
    console.log(cart)

    return (
        <>
            <img src={shoppingCart} alt="cart" className="shopping-cart"></img>
            <div style={{color: 'white'}}>{cart[0]}</div>
        </>
    )
}
