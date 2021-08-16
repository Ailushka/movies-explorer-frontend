import { MAIN_API_URL } from './constants';

class Auth {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  // регистрация
  signup(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      })
    })
    .then(this._checkResponse)
  }

  // авторизация
  signin(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then(this._checkResponse)
  }

  // проверка токена
  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponse)
    .then(data => data)
  }

  _checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const auth = new Auth(MAIN_API_URL);

export default auth;
