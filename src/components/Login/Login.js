import { Link } from 'react-router-dom';
import './Login.css';
import Preloader from '../Preloader/Preloader.js';
import useFormWithValidation from '../../utils/FormValidation.js';
import logo from '../../images/logo.svg';

function Login({ onLogin, isLoading, errorMessage }) {

  const formWithValidation = useFormWithValidation();
  const { email, password } = formWithValidation.values;
  const { values, handleChange, errors, isValid, resetForm } = formWithValidation;

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({ email, password });
    resetForm();
  }

  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип дипломного проекта" />
      </Link>
      <h2 className="entry__title">Рады видеть!</h2>
      {isLoading && <Preloader />}
      <form className="form form_type_sign-in login-form" onSubmit={handleSubmit}>
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
                value={values.email || ''}
                onChange={handleChange}
              />
              <span id="email-error" className="form__input-error">{errors.email}</span>
            </li>
            <li className="login-form__item">
              <label className="login-form__label" htmlFor="password">Пароль</label>
              <input
                className="login-form__input form__input_type_password"
                value={values.password || ''}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                required
              />
              <span id="password-error" className="form__input-error">{errors.password}</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit" className={`button button_type_submit ${!isValid ? "button_disabled" : "button_enabled"}`} disabled={!isValid}>
        {errorMessage
          ? <span id="submit-error" className="submit-error">{errorMessage}</span>
          : ''
        }
        Войти</button>
      </form>
      <div className="entry__remark">
        <p className="entry__remark-text">Ещё не зарегистрированы?</p>
        <Link className="entry__remark-link" to="/signup">Регистрация</Link>
      </div>
    </section>

  );
}

export default Login;
