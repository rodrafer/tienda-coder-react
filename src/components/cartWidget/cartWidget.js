import './cartWidget.scss';
import shoppingCart from '../../assets/shopping-trolley.png';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="shopping-cart">
            <p className="shopping-cart__quantity">{totalQuantity}</p>
            <img src={shoppingCart} alt="cart" className="shopping-cart__icon"></img>
        </Link>
    )
}
