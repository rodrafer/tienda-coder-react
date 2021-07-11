import './cart.scss';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export const Cart = () => {
    const { cart } = useContext(CartContext);

    const renderItemsInCart = () => {
        return cart.map(order => {
            const { item, quantity } = order;
            const keyId = uuidv4().slice(0, 4);

            return (
                <li key={keyId} className="cart-list__item">
                    <img src={item.pictureUrl} alt={item.title} className="cart-list__item-image" />
                    <h4 className="cart-list__item-title">{item.title}</h4>
                    <p className="cart-list__item-price">{item.price}</p>
                    <p className="cart-list__item-quantity">{quantity}</p>
                    <button className="cart-list__item-delete">X</button>
                </li>
            )
        })
    }

    return (
        <div className="cart">
            <ul className="cart-list">
                {renderItemsInCart()}
            </ul>
        </div>
    )
}
