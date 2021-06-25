import './itemList.scss';
import { Item } from '../item/item';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
    const { items } = props

    const renderItemList = () => {
        return items.length ? items.map(item => <Item item={item} key={item.id} />) : <p>{WORDINGS.SEARCHING_FOR_PRODUCTS}</p>
    }

    return (
        <div className="item-list">
            {renderItemList()}
        </div>
    )
}
