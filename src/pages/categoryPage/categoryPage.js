import './categoryPage.scss';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import { useParams } from 'react-router';

export const CategoryPage = () => {
    const { categoryId } = useParams();
    
    return (
        <div className="category-page">
            <ItemListContainer />
        </div>
    )
}
