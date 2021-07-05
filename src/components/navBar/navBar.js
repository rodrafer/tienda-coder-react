import './navBar.scss';
import { snakeCase } from 'snake-case';
import { v4 as uuidv4 } from 'uuid';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-with-background.svg';
import { CartWidget } from '../cartWidget/cartWidget';
import { WORDINGS } from '../../wordings';

export const NavBar = () => {
    const renderCategories = () => {
        return WORDINGS.CATEGORIES.map(category => {
            const keyId = uuidv4().slice(0, 4);
            return (
                <li key={keyId} className="category">
                    <NavLink to={`/category/${snakeCase(category)}`} activeClassName="category__link">{category}</NavLink>
                </li>
            )
        })
    }

    return (
        <>
            <div className="wrapper-left">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"></img>
                </Link>
                <nav className="menu">
                    <ul className="menu__list">
                        {renderCategories()}
                    </ul>
                </nav>
            </div>
            <div className="wrapper-right">
                <CartWidget />
            </div>
        </>
    )
}
