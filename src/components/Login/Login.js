import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип дипломного проекта" />
      </Link>
      <h2 className="entry__title">Рады видеть!</h2>
      <form className="form form_type_sign-in login-form">
        <fieldset className="login-form__container form__container_type_sign-in">
          <ul className="login-form__content list" role="none">
            <li className="login-form__item">
              <label className="login-form__label" htmlFor="email">E-mail</label>
              <input
                className="login-form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </li>
            <li className="login-form__item">
              <label className="login-form__label" htmlFor="password">Пароль</label>
              <input
                className="login-form__input form__input_type_password"
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                required
              />
              <span id="password-error" className="form__input-error"></span>
            </li>
          </ul>
        </fieldset>
        <button type="submit" className="button button_type_submit button_disabled">Войти</button>
      </form>
      <div className="entry__remark">
        <p className="entry__remark-text">Ещё не зарегистрированы?</p>
        <Link className="entry__remark-link" to="/signup">Регистрация</Link>
      </div>
    </section>

  );
}

export default Login;
