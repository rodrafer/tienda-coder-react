import './itemCount.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { WORDINGS } from '../../wordings';
import { CartContext } from '../../context/cartContext';

export const ItemCount = (props) => {
    const {
        stock,
        initial,
        onAdd,
        itemId,
        quantityInCart,
        componentIsDisabled,
    } = props;

    const [count, setCount] = useState(quantityInCart || initial);
    const { updateQuantity } = useContext(CartContext);

    let addedCount;
    let subtractedCount;
    let stockDisclaimer;
    const minimumCount = 1;
    const isSubtractDisabled = count === minimumCount || !stock || componentIsDisabled;
    const isAddDisabled = count === stock || !stock || componentIsDisabled;

    const renderStockDisclaimer = () => {
        if (!stock) {
            stockDisclaimer = WORDINGS.NO_STOCK;
        } else if (count === stock) {
            stockDisclaimer = WORDINGS.MAXIMUM_STOCK_REACHED;
        }
        return stockDisclaimer && (
            <p className="counter__stock-disclaimer">{stockDisclaimer}</p>
        );
    };

    const addItem = () => {
        addedCount = count + 1;
        setCount(addedCount);
        quantityInCart && updateQuantity(itemId, addedCount);
    };

    const subtractItem = () => {
        subtractedCount = count - 1;
        setCount(subtractedCount);
        quantityInCart && updateQuantity(itemId, subtractedCount);
    };

    const counterCommandsClassNames = classNames(
        'counter__commands',
        { 'counter__commands--disabled': componentIsDisabled },
    );

    const subtractButtonClassNames = classNames(
        'command-button',
        { 'command-button--disabled': isSubtractDisabled || !stock },
    );

    const addButtonClassNames = classNames(
        'command-button',
        { 'command-button--disabled': isAddDisabled || !stock },
    );

    const cartButtonClassNames = classNames(
        'counter__add-to-cart',
        'main-button',
        { 'main-button--disabled': !stock },
    );

    const textAreaClassNames = classNames(
        'text-area',
        { 'text-area--disabled': !stock },
    );

    return (
        <div className="counter">
            {renderStockDisclaimer()}
            <div className={counterCommandsClassNames}>
                <button onClick={() => subtractItem()} disabled={isSubtractDisabled} className={subtractButtonClassNames}>-</button>
                <span className={textAreaClassNames}>{stock ? count : 0}</span>
                <button onClick={() => addItem()} disabled={isAddDisabled} className={addButtonClassNames}>+</button>
            </div>
            {!quantityInCart && <button className={cartButtonClassNames} disabled={!stock} onClick={() => onAdd(count)}>
                {WORDINGS.ADD_TO_CART}
            </button>}
        </div>
    );
};
