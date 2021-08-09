import './loadingSpinner.scss';
import spinner from '../../assets/double-ring-loader.gif';

export const LoadingSpinner = (props) => {
  const { extraClassName } = props;

  return (
    <div className={`loading ${extraClassName}`}>
      <img className={`loading__spinner ${extraClassName}-spinner`} alt="spinner" src={spinner} />
    </div>
  )
}
