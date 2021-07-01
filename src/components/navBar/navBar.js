import './navBar.scss';
import { snakeCase } from "snake-case";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-with-background.svg';
import { CartWidget } from '../cartWidget/cartWidget';
import { WORDINGS } from '../../wordings';

export const NavBar = () => {
    const renderCategories = () => {
        return WORDINGS.CATEGORIES.map(category => 
            <li key={category} className="category">
                <NavLink to={`category/${snakeCase(category)}`} activeClassName="category__link">{category}</NavLink>
            </li>
        )
    }

    return (
        <>
            <div className="wrapper-left">
                <img src={logo} alt="logo" className="logo"></img>
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
