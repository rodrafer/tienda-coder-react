import './itemDetail.scss';
import { Fragment, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ItemCount } from '../itemCount/itemCount';
import { LoadingSpinner } from '../loadingSpinner/loadingSpinner';
import { CartContext } from '../../context/cartContext';
import { WORDINGS } from '../../wordings';

export const ItemDetail = (props) => {
  const { item, hasLoaded, foundItem } = props;
  const { isInCart, addItem, removeItem } = useContext(CartContext);

  const onAdd = (count) => {
    const addedItemsText = count === 1 ? WORDINGS.ONE_ITEM_ADDED : WORDINGS.SEVERAL_ITEMS_ADDED;
    addItem(item, count);
    alert(`¡Felicitaciones! ${count} ${item.title} ${addedItemsText}.`);
  }

  const renderBuyingProcessCommands = () => {
    const itemCountPops = {
      stock: item.stock,
      initial: item.initial,
      onAdd: onAdd
    }

    return isInCart(item.id)
      ? <Fragment>
        <Link to="/cart" className="finish-buying-button main-button">
          {WORDINGS.FINISH_BUYING}
        </Link>
        <Link to="/" className="continue-buying-button main-button">
          {WORDINGS.CONTINUE_BUYING}
        </Link>
        <button className="remove-item-button main-button" onClick={() => removeItem(item.id)}>
          {WORDINGS.REMOVE_FROM_CART}
        </button>
      </Fragment>
      : <ItemCount {...itemCountPops} />
  }

  if (hasLoaded) {
    return foundItem
      ? <div className="item-detail">
        <div className="item-detail__image">
          <img alt={item.id} src={item.pictureUrl}></img>
        </div>
        <div className="item-detail__specs">
          <h4 className="item-detail__specs-title">{item.title}</h4>
          <p className="item-detail__specs-price">${item.price}</p>
          <p className="item-detail__specs-description">{item.description}</p>
        </div>
        <div className="item-detail__commands">
          {renderBuyingProcessCommands()}
        </div>
      </div>
      : <Redirect to="/item-not-found" />
  } else {
    return < LoadingSpinner extraClassName="item-detail__loading" />
  }
}
