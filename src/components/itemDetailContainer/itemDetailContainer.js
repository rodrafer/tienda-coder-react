import './itemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { dataBase } from '../../firebase/firebase';
import { ItemDetail } from '../itemDetail/itemDetail';
import { WORDINGS } from '../../wordings';
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
    }, [itemId]);

    useEffect(() => {
        const db = dataBase;
        const itemCollection = db.collection('productos');
        const item = itemCollection.doc(itemId);
        item.get().then(doc => {
            if (!doc.exists) {
                console.log('No existe este ítem');
                return               
            }
            console.log('Ítem encontrado');
            setItemToShow({ id: doc.id, ...doc.data() }) // firebase devuelve doc con id, ref, metadata y data() separado del id
        }).catch(error => {
            console.log('Error al buscar ítems:', error)
        }).finally(() => { // Sucede por más que la promise salga bien o mal (then o catch)
            // setHasLoaded(true);
        })
    }, [])

    return (
        itemToShow
        ? <ItemDetail item={itemToShow} />
        : <div className="loading">
            {WORDINGS.LOADING_PRODUCT_DETAIL}
        </div>
    )
}
