import './App.scss';
import classNames from 'classnames';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import { firebaseApp } from './firebase/firebase';
import 'firebase/auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/homePage';
import { CategoryPage } from './pages/categoryPage/categoryPage';
import { ItemDetailPage } from './pages/itemDetailPage/itemDetailPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { CartPage } from './pages/cart/cartPage';
import { NavBar } from './components/navBar/navBar';
import { CartProvider } from './context/cartContext';

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(loginProps) {
  const { user } = loginProps;

  const appContentClassNames = classNames(
    'app__content',
    { 'app__content--login': !user },
  );

  return (
    <CartProvider {...loginProps}>
      <div className="app">
        <BrowserRouter>
          <header className="app__header">
            <NavBar {...loginProps} />
          </header>
          <main className={appContentClassNames}>
            <Switch>
              <Route exact path="/" render={() => (
                <HomePage {...loginProps} />
              )} />
              <Route path="/category/:categoryId" component={CategoryPage} />
              <Route path="/item/:itemId" component={ItemDetailPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
