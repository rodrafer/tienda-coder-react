import './itemCount.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { WORDINGS } from '../../wordings';

export const ItemCount = (props) => {
    const { itemName, stock, initial, onAdd } = props;
    
    const [count, setCount] = useState(initial);

    let addedCount;
    let subtractedCount;
    let stockDisclaimer;
    const minimumCount = 1;
    const isSubtractDisabled = count === minimumCount || !stock;
    const isAddDisabled = count === stock || !stock;

    const renderStockDisclaimer = () => {
        if (!stock) {
            stockDisclaimer = WORDINGS.NO_STOCK;
        } else if (count === stock) {
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

    const subtractButtonClassNames = classNames (
        'command-button',
        {'command-button--disabled': isSubtractDisabled || !stock},
    )

    const addButtonClassNames = classNames (
        'command-button',
        {'command-button--disabled': isAddDisabled || !stock},
    )

    const cartButtonClassNames = classNames (
        'counter__add-to-cart',
        'main-button',
        {'main-button--disabled': !stock},
    )

    const textAreaClassNames = classNames (
        'text-area',
        {'text-area--disabled': !stock},
    )
 
    return (
        <div className="counter">
            <p className="counter__item">{itemName}</p>
            {renderStockDisclaimer()}
            <div className="counter__commands">
                <button onClick={() => subtractItem()} disabled={isSubtractDisabled} className={subtractButtonClassNames}>-</button>
                <span className={textAreaClassNames}>{stock ? count : 0}</span>
                <button onClick={() => addItem()} disabled={isAddDisabled} className={addButtonClassNames}>+</button>
            </div>
            <button className={cartButtonClassNames} disabled={!stock} onClick={onAdd(stock, itemName, count)}>{WORDINGS.ADD_TO_CART}</button>
        </div>
    )
}
