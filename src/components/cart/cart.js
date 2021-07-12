import './cart.scss';
import { v4 as uuidv4 } from 'uuid';
import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { ItemCount } from '../itemCount/itemCount';

export const Cart = () => {
    const { cart, totalCount, removeItem } = useContext(CartContext);

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
                    <div className="cart-list__item-details">
                        <div className="cart-list__image-container">
                            <img src={item.pictureUrl} alt={item.title} className="cart-list__item-details-image" />
                        </div>
                        <h4 className="cart-list__item-details-title">{item.title}</h4>
                    </div>
                    <p className="cart-list__item-price">${item.price}</p>
                    <div className="cart-list__item-commands">
                        <ItemCount {...itemCountProps} />
                        <button className="cart-list__item-commands-remove command-button" onClick={() => removeItem(item.id)}>X</button>
                    </div>
                </li>
            )
        })
    }

    const renderEmptyCart = () => {
        return (
            <div className="cart-empty">
                <h3>¡Tu carrito está vacío!</h3>
                <p>Volvé a la página principal para agregar increíbles productos</p>
                <Link to="/" className="cart-empty__back-to-home main-button">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1 className="cart-title">Resumen de tu compra</h1>
            {cart.length
                ? <Fragment>
                    <ul className="cart-list">
                        {renderItemsInCart()}
                    </ul>
                    <div className="cart-summary">
                        <p className="cart-summary__message">Total a pagar:</p>
                        <p className="cart-summary__total">{totalCount}</p>
                    </div>
                </Fragment>
                : renderEmptyCart()}
        </div>
    )
}
