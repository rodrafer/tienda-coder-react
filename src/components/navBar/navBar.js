import './navBar.scss';
import logo from '../../assets/logo-with-background.svg';
import { CartWidget } from '../cartWidget/cartWidget';

export const NavBar = () => {
    return (
        <>
            <div className="wrapper-left">
                <img src={logo} alt="logo" className="logo"></img>
                <nav className="menu">
                    <ul className="menu__list">
                        <li>PC de escritorio</li>
                        <li>Notebooks</li>
                        <li>Celulares</li>
                        <li>Consolas</li>
                        <li>E-readers y tablets</li>
                        <li>Componentes de PC</li>
                        <li>Periféricos</li>
                        <li>Juegos</li>
                        <li>Accesorios</li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper-right">
                <CartWidget />
            </div>
        </>
    )
}
