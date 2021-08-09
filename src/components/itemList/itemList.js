import './itemList.scss';
import { Fragment } from 'react';
import { Item } from '../item/item';
import { LoadingSpinner } from '../loadingSpinner/loadingSpinner';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
  const { items, hasLoaded, titleCategory, categoryId } = props

  const renderItemList = () => {
    if (hasLoaded) {
      return items.length
        ? <Fragment>
          {titleCategory
            ? <h1 className="item-list__title">{titleCategory}</h1>
            // Mejorar este feedback por favor
            : categoryId && <h1 className="item-list__title">Aún no contamos con esta categoría, aquí tienes algunos ítems para seguir comprando:</h1>}
          {items.map(item => <Item item={item} key={item.id} />)}
        </Fragment>
        : <div className="item-list__not-found">
          <h1>{WORDINGS.CONTENT_NOT_FOUND}</h1>
        </div>
    } else {
      return <LoadingSpinner extraClassName="item-list__loading" />
    }
  }

  return (
    <div className="item-list">
      {renderItemList()}
    </div>
  )
}
