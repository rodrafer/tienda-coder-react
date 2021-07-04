import './itemDetail.scss';
import { ItemCount } from '../itemCount/itemCount';
import { WORDINGS } from '../../wordings';
import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const ItemDetail = (props) => {
    const { item } = props;
    const [itemsInCart, setitemsInCart] = useState(0);

    const onAdd = (stock, count) => {
        const addedItemsText = count === 1 ? WORDINGS.ONE_ITEM_ADDED : WORDINGS.SEVERAL_ITEMS_ADDED;
        setitemsInCart(count);
        stock && alert(`¡Felicitaciones! ${count} ${item.title} ${addedItemsText}. (Respuesta simulada)`);
    }

    const renderBuyingProcessCommands = () => {
        const finishBuyingButtonClassNames = classNames(
            'finish-buying-button',
            'main-button',
        )

        const itemCountPops = {
            stock: item.stock,
            initial: item.initial,
            onAdd: onAdd
        }

        return itemsInCart
            ? <Link to="/cart">
                <button className={finishBuyingButtonClassNames}>Terminar mi compra</button>
            </Link>
            : <ItemCount {...itemCountPops} />
    }

    return item && (
        <div className="item-detail">
            <div className="item-detail__image">
                <img alt={item.id} src={item.pictureUrl}></img>
            </div>
            <div className="item-detail__specs">
                <h4 className="item-detail__specs-title">{item.title}</h4>
                <p className="item-detail__specs-price">{item.price}</p>
                <p className="item-detail__specs-description">{item.description}</p>
            </div>
            <div className="item-detail__commands">
                {renderBuyingProcessCommands()}
            </div>
        </div>
    )
}
