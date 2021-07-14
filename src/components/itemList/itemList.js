import './itemList.scss';
import spinner from '../../assets/double-ring-loader.gif'
import { Fragment } from 'react';
import { Item } from '../item/item';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
    const { items, hasLoaded, titleCategory } = props

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
                    <img className="item-list__loading-spinner" alt="spinner" src={spinner} />
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
