import './cartWidget.scss';
import shoppingCart from '../../assets/shopping-trolley.png';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="shopping-cart">
            <p className="shopping-cart__quantity">{totalQuantity}</p>
            <img src={shoppingCart} alt="cart" className="shopping-cart__icon"></img>
        </div>
    )
}
