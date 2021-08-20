import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import auth from '../../utils/auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { SHORT_MOVIE_DURATION } from '../../utils/constants.js';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';

function App() {
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState({image: "", text: ""});
  const [errorMessage, setErrorMessage] = useState("");
  const [disabledInputs, setDisabledInputs] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
      const token = localStorage.getItem('jwt');
      if(token) {
        auth.getContent(token)
          .then((res) => {
            if(res) {
              setCurrentUser(res);
            };
            setLoggedIn(true);
            history.push(location);
          })
          .catch(err => {
            localStorage.removeItem('jwt');
            console.log(err);
            history.push('/');}
          )}
      if (localStorage.getItem('filteredMovies')) {
        setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
      }
  }

  useEffect(() => {
    if (loggedIn) {
      getUserMovies();
    }
  }, [loggedIn]);

  function getUserMovies() {
    mainApi.getUserMovies()
      .then((movies) => {
        const savedMovies = movies.map((movie) => {
          return {
            ...movie,
            id: movie.movieId
          };
        });
        setUserMovies(savedMovies);
        setUserMovies(savedMovies.filter(i => i.owner === currentUser._id));
      })
      .catch(err => console.log(err));
  }

  function onRegister(user) {
    const { name, email, password } = user;
    setDisabledInputs(true);
    setIsLoading(true);
    auth.signup(name, email, password)
      .then((user) => {
        if(user) {
          onLogin({email, password});
          setIsInfoTooltipOpen(true);
          handleInfoTooltipContent({
            image: success,
            text: "Вы успешно зарегистрировались!"
          });
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        handleInfoTooltipContent({
          image: fail,
          text: "Что-то пошло не так! Попробуйте ещё раз."
        });
        if (err && err === 400) {
          handleError('При регистрации произошла ошибка. Токен не передан или передан не в том формате.');
        } else if (err && err === 409) {
          handleError('Пользователь с таким email уже существует.');
        }
      })
      .finally(() => {
        setDisabledInputs(false);
        setIsLoading(false);
      });
  }

  function onLogin(user) {
    const { email, password } = user;
    setDisabledInputs(true);
    setIsLoading(true);
    auth.signin(email, password)
      .then((user) => {
        if(user) {
          setLoggedIn(true);
          localStorage.setItem('jwt', user.token);
          getCurrentUser();
          history.push('/movies');
        }
      })
      .catch((err) => {
        if (err && err === 400) {
          handleError('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
        } else if (err && err === 401) {
          handleError('Вы ввели неправильный логин или пароль.');
        } else if (err && err === 403) {
          handleError('При авторизации произошла ошибка. Переданный токен некорректен.');
        }
      })
      .finally(() => {
        setDisabledInputs(false);
        setIsLoading(false);
      });
  }

  function onLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('userMovies');
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser(null);
    setMovies([]);
    setUserMovies([]);
    history.push('/');
  }

  // Данные пользователя и фильмы
  function getCurrentUser() {
    mainApi.getCurrentUser()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
      })
      .catch(err => console.log(err));
  }

  function getMovies() {
    setIsLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        const initialMovies = movies.map((movie) => {
          return {
            ...movie,
            image: movie.image ? `https://api.nomoreparties.co${movie.image.url}` : "",
            trailer: movie.trailerLink,
          };
        });
        localStorage.setItem('initialMovies', JSON.stringify(initialMovies));
        handleFilterMovies(filters);
  })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };

  console.log(movies);
  console.log(userMovies);

  console.log((getFilteredMovies(movies, filters)));
  console.log((getFilteredMovies(userMovies, filters)));
  console.log(JSON.parse(localStorage.getItem('initialMovies')));
  console.log(currentUser);
  console.log(localStorage.getItem('jwt'));

  function handleUpdateUser(user) {
    setDisabledInputs(true);
    setIsLoading(true);
    mainApi.patchUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        setIsInfoTooltipOpen(true);
        handleInfoTooltipContent({
          image: success,
          text: "Информация успешно обновлена!"
        });
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        handleInfoTooltipContent({
          image: fail,
          text: "Что-то пошло не так! Попробуйте ещё раз."
        });
        if (err && err === 400) {
          handleError('При обновлении профиля произошла ошибка. Токен не передан или передан не в том формате.');
        } else if (err && err === 409) {
          handleError('Пользователь с таким email уже существует.');
        } else {
          handleError(`Ошибка: ${err}.`);
        }
      })
      .finally(() => {
        setDisabledInputs(false);
        setIsLoading(false);
      });
  }

  const handleError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(''), 3000);
  };

  function handleChangeFilters({key, value}) {
    setFilters(prev => {
      handleFilterMovies({ ...prev, [key]: value });
      return { ...prev, [key]: value };
    });
  }

  function handleFilterMovies(filters) {
    if (localStorage.getItem('initialMovies')) {
      setIsLoading(true);
      const filteredMovies = getFilteredMovies(JSON.parse(localStorage.getItem('initialMovies')), filters) || [];
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      setMovies(filteredMovies);
      setIsLoading(false);
    } else {
      getMovies();
    }
  }

  function getFilteredMovies(movies, { search = '', filtercheckbox = false}) {
    return movies.filter(movie => {
      if (filtercheckbox && movie.duration > SHORT_MOVIE_DURATION) {
        return false;
      }
      for (let key in movie) {
        if (movie.hasOwnProperty(key) && typeof movie[key] === 'string' && movie[key].toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  function handleInfoTooltipContent({image, text}) {
    setMessage({ image: image, text: text });
  }

  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
  }

  function handleSaveMovie(movie) {
    setIsLoading(true);
    mainApi.saveMovie(movie)
      .then((res) => {
        setUserMovies([...userMovies, {...res, id: res.movieId }]);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleDeleteMovie(movie) {
    const id = userMovies.find(i => i.id === movie.id)._id;
    setIsLoading(true);
    mainApi.deleteMovie(id)
      .then(() => setUserMovies(prev => prev.filter(i => i._id !== id)))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (

      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header
              loggedIn={loggedIn}
            />
            <Main />
            <Footer />
          </Route>

          <Route path='/signup'>
            {loggedIn ? <Redirect to='/' /> :
              <Register
              onRegister={onRegister}
              isLoading={isLoading}
              errorMessage={errorMessage}
              isDisabled={disabledInputs}
            />}
          </Route>
          <Route path='/signin'>
            {loggedIn ? <Redirect to='/' /> :
              <Login
              onLogin={onLogin}
              isLoading={isLoading}
              errorMessage={errorMessage}
              isDisabled={disabledInputs}
            />}
          </Route>
          <ProtectedRoute path='/profile' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
            />
            <Profile
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
              errorMessage={errorMessage}
              onLogOut={onLogOut}
              isDisabled={disabledInputs}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
            />
            <SearchForm
              onChangeFilters={handleChangeFilters}
            />
            <MoviesCardList
              movies={movies}
              userMovies={userMovies}
              isLoading={isLoading}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
            />
            <SearchForm
              onChangeFilters={handleChangeFilters}
            />
            <MoviesCardList
              movies={getFilteredMovies(userMovies, filters)}
              userMovies={userMovies}
              isLoading={isLoading}
              onDeleteMovie={handleDeleteMovie}
             />
            <Footer />
          </ProtectedRoute>
          <Route path='*'>
            <PageNotFound />
          </Route>

        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          message={message}
        />
      </CurrentUserContext.Provider>

  );
}

export default App;
