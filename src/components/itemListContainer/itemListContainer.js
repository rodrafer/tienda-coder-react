import './itemListContainer.scss';
import { ItemCount } from '../itemCount/itemCount';
import { WORDINGS } from '../../wordings';

export const ItemListContainer = (props) => {
    const { greeting } = props;
    
    const onAdd = (stock, itemName, count) => {
        const addedItemsText = count === 1 ? WORDINGS.ONE_ITEM_ADDED : WORDINGS.SEVERAL_ITEMS_ADDED;
        stock && alert(`¡Felicitaciones! ${count} ${itemName} ${addedItemsText}. (Respuesta simulada)`);
    }
    
    const withStockPops = {
        itemName: 'Nintendo Switch',
        stock: 6,
        initial: 3,
        onAdd: onAdd
    }

    const withoutStockPops = {
        itemName: 'Play Station 5',
        stock: 0,
        initial: 0,
        onAdd: onAdd
    }

    return (
        <>
            <h1 className="landing-title">{greeting}</h1>
            <h3 className="landing-subtitle">{WORDINGS.ITEMS_EXAMPLE}</h3>
            <ItemCount {...withStockPops}/>
            <ItemCount {...withoutStockPops}/>
        </>
    )
}
