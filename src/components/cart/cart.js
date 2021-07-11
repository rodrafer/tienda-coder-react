import './cart.scss';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { ItemCount } from '../itemCount/itemCount';

export const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);

    const renderItemsInCart = () => {
        return cart.map(order => {
            const { item, quantity } = order;
            const keyId = uuidv4().slice(0, 4);

            const itemCountProps = {
                stock: item.stock,
                itemId: item.id,
                quantityInCart: quantity
            }

            return (
                <li key={keyId} className="cart-list__item">
                    <img src={item.pictureUrl} alt={item.title} className="cart-list__item-image" />
                    <h4 className="cart-list__item-title">{item.title}</h4>
                    <p className="cart-list__item-price">{item.price}</p>
                    <ItemCount {...itemCountProps} />
                    <button className="cart-list__item-remove command-button" onClick={() => removeItem(item.id)}>X</button>
                </li>
            )
        })
    }

    const renderEmptyCartAction = () => {
        return (
            <div className="cart-empty">
                <h4>¡Tu carrito está vacío!</h4>
                <p>Volvé a la página principal para agregar increíbles productos</p>
                <Link to="/" className="cart-empty__back-to-home main-button">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1>Tu carrito</h1>
            {cart.length
                ? <ul className="cart-list">
                    {renderItemsInCart()}
                </ul>
                : renderEmptyCartAction()}
        </div>
    )
}
