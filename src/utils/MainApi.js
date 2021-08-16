import { MAIN_API_URL } from './constants';

class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getCurrentUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  getUserMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'Authorization': this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  // редактирование профиля (меняем данные пользователя)
  patchUserInfo(user) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email
      })
    })
    .then(this._checkResponse)
  }

  // добавление фильма в избранное
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this._token,
      },
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.image,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
    .then(this._checkResponse)
  }

  // удаление фильма из избранного
  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new Api(MAIN_API_URL, `Bearer ${localStorage.getItem('jwt')}`);

export default mainApi;
