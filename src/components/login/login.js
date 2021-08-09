import './login.scss';
import logo from '../../assets/logo-with-background.svg';

export const Login = (props) => {
  const { signInWithGoogle } = props;

  return (
    <div className="login">
      <p className="login__disclaimer">Por favor, ingresá con tu cuenta antes de continuar al sitio</p>
      <button onClick={signInWithGoogle} className="login__button main-button">Ingresar con Google</button>
      <img src={logo} alt="logo" className="login__logo"></img>
    </div>
  )
}
