import './itemListContainer.scss';
import { useEffect, useState } from 'react';
import { snakeCase } from 'snake-case';
import { ItemCount } from '../itemCount/itemCount';
import { ItemList } from '../itemList/itemList';
import { WORDINGS } from '../../wordings';
import MOCK_DATA from '../../assets/MOCK_DATA.json';

export const ItemListContainer = (props) => {
    const { greeting, categoryId } = props;

    const onAdd = (stock, itemName, count) => {
        const addedItemsText = count === 1 ? WORDINGS.ONE_ITEM_ADDED : WORDINGS.SEVERAL_ITEMS_ADDED;
        stock && alert(`¡Felicitaciones! ${count} ${itemName} ${addedItemsText}. (Respuesta simulada)`);
    }

    const withStockPops = {
        itemName: 'Nintendo Switch',
        stock: 6,
        initial: 3,
        onAdd: onAdd
    }

    const withoutStockPops = {
        itemName: 'Play Station 5',
        stock: 0,
        initial: 0,
        onAdd: onAdd
    }

    const [items, setItems] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA.filter(item => categoryId ? snakeCase(item.category) === categoryId : item))
            }, 2000)
        })

        getItems.then(items => {
            setItems(items)
            setHasLoaded(true)
        })
    }, [categoryId])

    return (
        <>
            <h1 className="landing-title">{greeting}</h1>
            <h3 className="landing-subtitle">{WORDINGS.ITEMS_EXAMPLE}</h3>
            <div className="item-count-example">
                <ItemCount {...withStockPops} />
                <ItemCount {...withoutStockPops} />
            </div>
            <ItemList items={items} hasLoaded={hasLoaded} />
        </>
    )
}
