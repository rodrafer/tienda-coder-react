import './itemListContainer.scss';
import { ItemCount } from '../itemCount/itemCount';
import { WORDINGS } from '../../wordings';

export const ItemListContainer = (props) => {
    const { greeting } = props;
    
    const withStockPops = {
        itemName: 'Nintendo Switch',
        itemStock: 3
    }

    const withoutStockPops = {
        itemName: 'Play Station 5',
        itemStock: 0
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
