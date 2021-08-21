import { MOVIES_API_URL } from './constants';

class MoviesApi {
  constructor(moviesUrl) {
    this._moviesUrl = moviesUrl;
  }

  getMovies() {
    return fetch(`${this._moviesUrl}`, {
      method: 'GET',
      headers: {
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

const moviesApi = new MoviesApi(MOVIES_API_URL);

export default moviesApi;
