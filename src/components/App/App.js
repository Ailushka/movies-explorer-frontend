import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import MoreButton from '../MoreButton/MoreButton.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path='/movies'>
          <Header />
          <SearchForm />
          <MoviesCardList />
          <MoreButton />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
