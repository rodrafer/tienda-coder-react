import './itemCount.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { WORDINGS } from '../../wordings';

export const ItemCount = (props) => {
    const { itemName, itemStock } = props;
    
    const [count, setCount] = useState(1);

    let addedCount;
    let subtractedCount;
    let stockDisclaimer;
    const minimumCount = 1;
    const isSubtractDisabled = count === minimumCount || !itemStock;
    const isAddDisabled = count === itemStock || !itemStock;
    const addedItemsText = count === 1 ? WORDINGS.ONE_ITEM_ADDED : WORDINGS.SEVERAL_ITEMS_ADDED;

    const renderStockDisclaimer = () => {
        if (!itemStock) {
            stockDisclaimer = WORDINGS.NO_STOCK;
        } else if (count === itemStock) {
            stockDisclaimer = WORDINGS.MAXIMUM_STOCK_REACHED;
        }
        return stockDisclaimer && (
            <p className="counter__stock-disclaimer">{stockDisclaimer}</p>
        )
    }

    const addItem = () => {
        addedCount = count + 1;
        setCount(addedCount);
    };

    const subtractItem = () => {
        subtractedCount = count - 1;
        setCount(subtractedCount);
    };

    const addToCart = () => {
        itemStock && alert(`¡Felicitaciones! ${count} ${itemName} ${addedItemsText}. (Respuesta simulada)`)
    }

    const subtractButtonClassNames = classNames (
        'command-button',
        {'command-button--disabled': isSubtractDisabled || !itemStock},
    )

    const addButtonClassNames = classNames (
        'command-button',
        {'command-button--disabled': isAddDisabled || !itemStock},
    )

    const cartButtonClassNames = classNames (
        'counter__add-to-cart',
        'main-button',
        {'main-button--disabled': !itemStock},
    )

    const textAreaClassNames = classNames (
        'text-area',
        {'text-area--disabled': !itemStock},
    )
 
    return (
        <div className="counter">
            <p className="counter__item">{itemName}</p>
            {renderStockDisclaimer()}
            <div className="counter__commands">
                <button onClick={() => subtractItem()} disabled={isSubtractDisabled} className={subtractButtonClassNames}>-</button>
                <span className={textAreaClassNames}>{itemStock ? count : 0}</span>
                <button onClick={() => addItem()} disabled={isAddDisabled} className={addButtonClassNames}>+</button>
            </div>
            <button className={cartButtonClassNames} disabled={!itemStock} onClick={() => addToCart()}>{WORDINGS.ADD_TO_CART}</button>
        </div>
    )
}
