import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/homePage';
import { CategoryPage } from './pages/categoryPage/categoryPage';
import { ItemDetailPage } from './pages/itemDetailPage/itemDetailPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { NavBar } from './components/navBar/navBar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="app__header">
          <NavBar />
        </header>
        <main className="app__content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="category/:categoryId" component={CategoryPage} />
            <Route path="item/:itemId" component={ItemDetailPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
