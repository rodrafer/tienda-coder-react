import './item.scss';
import { Link } from 'react-router-dom';

export const Item = (props) => {
    const { item } = props;

    return (
        <Link to={`/item/${item.id}`}>
            <div className="item">
                <div className="item__image">
                    <img alt={item.id} src={item.pictureUrl}></img>
                </div>
                <h4 className="item__title">{item.title}</h4>
                <p className="item__price">${item.price}</p>
            </div>
        </Link>
    )
}
