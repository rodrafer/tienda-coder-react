import './login.scss';
import logo from '../../assets/logo-with-background.svg';
import { WORDINGS } from '../../wordings';

export const Login = (props) => {
  const { signInWithGoogle } = props;

  return (
    <div className="login">
      <p className="login__disclaimer">{WORDINGS.LOGIN_FIRST}</p>
      <button onClick={signInWithGoogle} className="login__button main-button">{WORDINGS.LOGIN_WITH_GOOGLE}</button>
      <img src={logo} alt="logo" className="login__logo"></img>
    </div>
  )
}
