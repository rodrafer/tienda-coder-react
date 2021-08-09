import './cartPage.scss';
import { Cart } from '../../components/cart/cart';

export const CartPage = (loginProps) => {
    return (
        <div className="cart-page">
            <Cart {...loginProps} />
        </div>
    )
}
