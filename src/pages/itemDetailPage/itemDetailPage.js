import './itemDetailPage.scss';
import { useParams } from 'react-router';
import { ItemDetailContainer } from '../../components/itemDetailContainer/itemDetailContainer';

export const ItemDetailPage = () => {
    const { itemId } = useParams();

    return (
        <div className="item-detail-page">
            <ItemDetailContainer itemId={itemId} />
        </div>
    )
}
