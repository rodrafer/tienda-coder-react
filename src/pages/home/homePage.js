import './homePage.scss';
import { NavBar } from '../../components/navBar/navBar';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import { WORDINGS } from '../../wordings';

export const HomePage = () => {
    const childrenProps = {
        greeting: WORDINGS.LANDING_TITLE
    }

    return (
        <div className="home-page">
            <header className="home-page__header">
                <NavBar />
            </header>
            <main className="home-page__content">
                <ItemListContainer {...childrenProps} />
            </main>
        </div>
    )
}
