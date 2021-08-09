import './checkoutForm.scss';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../input/input';
import { CartContext } from '../../context/cartContext';
import { WORDINGS } from '../../wordings';
import CHECKOUT_INPUTS from '../../assets/CHECKOUT_INPUTS.json';

export const CheckoutForm = () => {
    const { getFinalOrder } = useContext(CartContext);

    const [data, setData] = useState(CHECKOUT_INPUTS);

    const onInput = ({ target }) => {
        const indexToChange = data.findIndex(input => input.name === target.name);
        const newInput = { ...data[indexToChange], value: target.value };
        const newData = Object.values({...data, [indexToChange]: newInput});
        setData(newData);
    };

    const onBuy = (event) => {
        event.preventDefault();
        const userData = {
            phone: data[0].value,
            postalCode: data[1].value,
            address: data[2].value,
        };
        getFinalOrder(userData);
    }

    return (
        <form className="checkout-form">
            {data.map(input => {
                const keyId = uuidv4().slice(0, 4);
                const inputProps = {
                    name: input.name,
                    label: input.label,
                    value: input.value,
                    required: input.required,
                    onInput: onInput,
                }
                return <Input key={keyId} {...inputProps} />
            })}
            <input type="submit" className="checkout-form__submit main-button" onClick={onBuy} value={WORDINGS.BUY} />
        </form>
    )
}
