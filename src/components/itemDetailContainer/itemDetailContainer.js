import './itemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../itemDetail/itemDetail';
import { WORDINGS } from '../../wordings';
import MOCK_DATA from '../../assets/MOCK_DATA.json';

export const ItemDetailContainer = () => {

    const [itemToShow, setItemToShow] = useState();

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA[0])
            }, 2000)
        })

        getItem.then(item => setItemToShow(item))
    }, [])

    return (
        itemToShow
        ? <ItemDetail item={itemToShow} />
        : <div className="loading">
            {WORDINGS.LOADING_PRODUCT_DETAIL}
        </div>
    )
}
