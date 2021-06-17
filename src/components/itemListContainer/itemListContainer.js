import './itemListContainer.scss';

export const ItemListContainer = (props) => {
    const { greeting } = props;

    return (
        <h1 className="landing-title">{greeting}</h1>
    )
}
