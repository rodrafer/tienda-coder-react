import './itemListContainer.scss';
import { Fragment, useEffect, useState } from 'react';
import { snakeCase } from 'snake-case';
import { dataBase } from '../../firebase/firebase';
import { ItemList } from '../itemList/itemList';
import { WORDINGS } from '../../wordings';

const replaceSpecialCharacters = require('replace-special-characters');

export const ItemListContainer = (props) => {
    const { greeting, categoryId } = props;

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const currentCategory = categoryId && WORDINGS.CATEGORIES.find(category =>
            snakeCase(replaceSpecialCharacters(category)) === categoryId
        );
        setCategory(currentCategory);

        const itemCollection = dataBase.collection('productos');
        const collectionToShow = currentCategory ? itemCollection.where('category', '==', currentCategory) : itemCollection;

        collectionToShow.get().then(querySnapshot => {
            if (querySnapshot.size === 0) {
                console.log('No results!')
            }
            setItems(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }));
        }).catch(error => {
            console.log('Error while searching for products: ', error)
        }).finally(() => {
            setHasLoaded(true);
        })

    }, [categoryId])

    return (
        <Fragment>
            {greeting && <h1 className="landing-title">{greeting}</h1>}
            <ItemList items={items} hasLoaded={hasLoaded} titleCategory={category} categoryId={categoryId} />
        </Fragment>
    )
}
