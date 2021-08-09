import './input.scss';

export const Input = (props) => {
    const { name, label, value, required, onInput } = props;

    return (
        <label className="input-label">
            {label}
            <input className="input-content" type="text" name={name} defaultValue={value} required={required} onBlur={onInput}/>
        </label>
    )
}
