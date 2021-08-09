import './itemList.scss';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Item } from '../item/item';
import { LoadingSpinner } from '../loadingSpinner/loadingSpinner';
import { WORDINGS } from '../../wordings';

export const ItemList = (props) => {
  const {
    items,
    hasLoaded,
    titleCategory,
    categoryId,
  } = props;

  const renderItemList = () => {
    if (hasLoaded) {
      return items.length
        ? <Fragment>
          {titleCategory
            ? <h1 className="item-list__title">{titleCategory}</h1>
            : categoryId && <h1 className="item-list__title">{WORDINGS.CATEGORY_NOT_FOUND}</h1>}
          {items.map(item => <Item item={item} key={item.id} />)}
        </Fragment>
        : <Redirect to="/catalog-not-found" />
    } else {
      return <LoadingSpinner extraClassName="item-list__loading" />
    }
  };

  return (
    <div className="item-list">
      {renderItemList()}
    </div>
  );
};
