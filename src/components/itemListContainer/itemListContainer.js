import './itemListContainer.scss';
import { useEffect, useState } from 'react';
import { ItemCount } from '../itemCount/itemCount';
import { ItemList } from '../itemList/itemList';
import { WORDINGS } from '../../wordings';
import MOCK_DATA from '../../assets/MOCK_DATA.json';

export const ItemListContainer = (props) => {
    const { greeting } = props;
    
    const withStockPops = {
        itemName: 'Nintendo Switch',
        itemStock: 3
    }

    const withoutStockPops = {
        itemName: 'Play Station 5',
        itemStock: 0
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA)
            }, 2000)
        })
    
        getItems.then(items => setItems(items))
    }, [])

    return (
        <>
            <h1 className="landing-title">{greeting}</h1>
            <h3 className="landing-subtitle">{WORDINGS.ITEMS_EXAMPLE}</h3>
            <div className="item-count-example">
                <ItemCount {...withStockPops}/>
                <ItemCount {...withoutStockPops}/>
            </div>
            <ItemList items={items} />
        </>
    )
}
