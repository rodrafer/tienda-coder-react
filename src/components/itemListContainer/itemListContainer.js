import './itemListContainer.scss';
import { Fragment, useEffect, useState } from 'react';
import { snakeCase } from 'snake-case';
import { dataBase } from '../../firebase/firebase';
import { ItemList } from '../itemList/itemList';
import MOCK_DATA from '../../assets/MOCK_DATA.json';

const replaceSpecialCharacters = require('replace-special-characters');

export const ItemListContainer = (props) => {
    const { greeting, categoryId } = props;

    const [items, setItems] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(MOCK_DATA.filter(item => categoryId ? snakeCase(replaceSpecialCharacters(item.category)) === categoryId : item))
            }, 2000)
        })

        getItems.then(items => {
            setItems(items)
            setHasLoaded(true)
        })

        return setHasLoaded(false)
    }, [categoryId])

    useEffect(() => {
        const db = dataBase;
        const itemCollection = db.collection('productos');
        // Usamos where() para filtrar una collection, y lo podemos encadenar para filtrar aún más. Con limit() ponemos un tope al tamño de la collection
        const higPriceCollection = itemCollection.where('price', '>', 10000).limit(10);
        const higPriceCollectionOfConsoles = itemCollection.where('price', '>', 10000).where('category', '==', 'Consolas');
        itemCollection.get().then(querySnapshot => { // querySnapshot es una referencia a la data
            if(querySnapshot.size === 0) {
                console.log('No hay resultados!')
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
        }).catch(error => {
            console.log('Error al buscar productos:', error)
        }).finally(() => { // Sucede por más que la promise salga bien o mal (then o catch)
            setHasLoaded(true);
        })
    }, [])

    return (
        <Fragment>
            {greeting && <h1 className="landing-title">{greeting}</h1>}
            <ItemList items={items} hasLoaded={hasLoaded} categoryId={categoryId} />
        </Fragment>
    )
}
