import './itemDetailContainer.scss';
import { useEffect, useState } from 'react';
import { dataBase } from '../../firebase/firebase';
import { ItemDetail } from '../itemDetail/itemDetail';

export const ItemDetailContainer = (props) => {
    const { itemId } = props;

    const [itemToShow, setItemToShow] = useState();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const itemCollection = dataBase.collection('productos');
        const item = itemCollection.doc(itemId);
        item.get().then(doc => {
            if (!doc.exists) {
                console.log('This item doesn\'t exist');
                return               
            }
            console.log('Item found');
            setItemToShow({ id: doc.id, ...doc.data() })
        }).catch(error => {
            console.log('Error while searching for items:', error)
        }).finally(() => {
            setHasLoaded(true);
        })
    }, [itemId])

    return <ItemDetail item={itemToShow} hasLoaded={hasLoaded} />
}
