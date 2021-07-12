import './itemList.scss';
import { Fragment } from 'react';
import { snakeCase } from 'snake-case';
import { Item } from '../item/item';
import { WORDINGS } from '../../wordings';

const replaceSpecialCharacters = require('replace-special-characters');

export const ItemList = (props) => {
    const { items, hasLoaded, categoryId } = props

    const titleCategory = categoryId && WORDINGS.CATEGORIES.find(category =>
        snakeCase(replaceSpecialCharacters(category)) === categoryId
    );

    const renderItemList = () => {
        if (hasLoaded) {
            return items.length
                ? <Fragment>
                    <h1 className="item-list__example">{titleCategory}</h1>
                    {items.map(item => <Item item={item} key={item.id} />)}
                </Fragment>
                : <div className="item-list__not-found">
                    <h1>{WORDINGS.CONTENT_NOT_FOUND}</h1>
                </div>
        } else {
            return (
                <div className="item-list__loading">
                    <p>{WORDINGS.SEARCHING_FOR_PRODUCTS}</p>
                </div>
            )
        }
    }

    return (
        <div className="item-list">
            {renderItemList()}
        </div>
    )
}
