import './navBar.scss';
import logo from '../../assets/logo-invert.png';

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <img src={logo} alt="logo" className="nav-bar__logo"></img>
            <h3 className="nav-bar__brand">Reactive Games</h3>
            <nav className="nav-bar__menu">
                <ul className="nav-bar__menu-list">
                    <li>PC de Escritorio</li>
                    <li>Notebooks</li>
                    <li>Celulares</li>
                    <li>Consolas</li>
                    <li>e-readers y tablets</li>
                    <li>Componentes de PC</li>
                    <li>Periféricos</li>
                    <li>Accesorios</li>
                    <li>Juegos</li>
                </ul>
            </nav>
        </div>
    )
}
