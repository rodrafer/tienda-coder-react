import './cart.scss';
import { v4 as uuidv4 } from 'uuid';
import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { ItemCount } from '../itemCount/itemCount';
import { WORDINGS } from '../../wordings';

export const Cart = () => {
    const { cart, totalCount, removeItem, clear } = useContext(CartContext);

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
                <h3>{WORDINGS.EMPTY_CART}</h3>
                <p>{WORDINGS.TURN_TO_HOME_PAGE}</p>
                <Link to="/" className="cart-empty__back-to-home main-button">{WORDINGS.BACK_TO_HOME}</Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <h1 className="cart-title">{WORDINGS.CART_SUMMARY}</h1>
            {cart.length
                ? <Fragment>
                    <ul className="cart-list">
                        {renderItemsInCart()}
                    </ul>
                    <div className="cart-summary">
                        <button className="cart-summary__dismiss-cart main-button" onClick={() => clear()}>
                            Cancelar compra
                        </button>
                        <div className="cart-summary__wrapper">
                            <p className="cart-summary__message">{WORDINGS.TOTAL_TO_PAY}</p>
                            <p className="cart-summary__total">{totalCount}</p>
                        </div>
                    </div>
                </Fragment>
                : renderEmptyCart()}
        </div>
    )
}
