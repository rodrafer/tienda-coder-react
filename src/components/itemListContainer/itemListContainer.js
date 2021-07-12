import './itemListContainer.scss';
import { Fragment, useEffect, useState } from 'react';
import { snakeCase } from 'snake-case';
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

    return (
        <Fragment>
            {greeting && <h1 className="landing-title">{greeting}</h1>}
            <ItemList items={items} hasLoaded={hasLoaded} categoryId={categoryId} />
        </Fragment>
    )
}
