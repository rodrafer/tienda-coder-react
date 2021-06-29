import './itemDetail.scss';

export const ItemDetail = (props) => {
    const { item } = props;

    return item && (
        <div className="item-detail">
            <div className="item-detail__image">
                <img alt={item.id} src={item.pictureUrl}></img>
            </div>
            <div className="item-detail__specs">
                <h4 className="item-detail__specs-title">{item.title}</h4>
                <p className="item-detail__specs-price">{item.price}</p>
                <p className="item-detail__specs-description">{item.description}</p>
            </div>
        </div>
    )
}
