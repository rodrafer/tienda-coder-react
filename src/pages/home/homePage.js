import './homePage.scss';
import { NavBar } from '../../components/navBar/navBar';

export const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-page__header">
                <NavBar></NavBar>
            </header>
            <main className="home-page__content">
                <h1>OFERTAS DE LA SEMANA</h1>
            </main>
        </div>
    )
}
