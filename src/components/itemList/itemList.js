import './itemList.scss';
import { Fragment } from 'react';
import { Item } from '../item/item';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
    const { items, hasLoaded } = props

    const renderItemList = () => {
        if (hasLoaded) {
            return items.length
                ? <Fragment>
                    <h3 className="item-list__example">{WORDINGS.ITEMS_EXAMPLE}</h3>
                    {items.map(item => <Item item={item} key={item.id} />)}
                </Fragment>
                : <h1>{WORDINGS.CONTENT_NOT_FOUND}</h1>
        } else {
            return <p>{WORDINGS.SEARCHING_FOR_PRODUCTS}</p>
        }
    }

    return (
        <div className="item-list">
            {renderItemList()}
        </div>
    )
}
