import './itemList.scss';
import { Item } from '../item/item';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
    const { items, hasLoaded } = props

    const renderItemList = () => {
        if (hasLoaded) {
            return items.length
            ? items.map(item => <Item item={item} key={item.id} />)
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
