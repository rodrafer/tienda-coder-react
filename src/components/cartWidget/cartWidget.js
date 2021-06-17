import './cartWidget.scss';
import shoppingCart from '../../assets/shopping-trolley.png';

export const CartWidget = () => {
    return (
        <img src={shoppingCart} alt="cart" className="shopping-cart"></img>
    )
}
