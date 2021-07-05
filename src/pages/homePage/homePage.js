import './homePage.scss';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import { WORDINGS } from '../../wordings';

export const HomePage = () => {
    const childrenProps = {
        greeting: WORDINGS.LANDING_TITLE
    }

    return (
        <div className="home-page">
            <ItemListContainer {...childrenProps} />
        </div>
    )
}
