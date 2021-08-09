import './homePage.scss';
import { ItemListContainer } from '../../components/itemListContainer/itemListContainer';
import { Login } from '../../components/login/login';
import { WORDINGS } from '../../wordings';

export const HomePage = (loginProps) => {
  const { user } = loginProps;

  const listContainerProps = {
    greeting: WORDINGS.LANDING_TITLE,
  };

  return (
    <div className="home-page">
      {user ? <ItemListContainer {...listContainerProps} /> : <Login {...loginProps} />}
    </div>
  )
}
