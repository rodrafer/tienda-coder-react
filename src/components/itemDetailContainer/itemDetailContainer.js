import './itemDetailContainer.scss';
import spinner from '../../assets/double-ring-loader.gif'
import { useEffect, useState } from 'react';
import { ItemDetail } from '../itemDetail/itemDetail';
import MOCK_DATA from '../../assets/MOCK_DATA.json';

export const ItemDetailContainer = (props) => {
    const { itemId } = props
    const [itemToShow, setItemToShow] = useState();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA.find(item => item.id.toString() === itemId))
            }, 2000)
        })

        getItem.then(item => setItemToShow(item))
    }, [itemId])

    return (
        itemToShow
        ? <ItemDetail item={itemToShow} />
        : <div className="loading">
            <img className="loading__spinner" alt="spinner" src={spinner} />
        </div>
    )
}
