import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип дипломного проекта" />
      </Link>
      <h2 className="entry__title">Добро пожаловать!</h2>
      <form className="form form_type_sign-up register-form">
        <fieldset className="register-form__container form__container_type_sign-up">
          <ul className="register-form__content list" role="none">
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="name">Имя</label>
              <input className="register-form__input" type="text" name="name" id="name" placeholder="Имя" required />
            </li>
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="email">E-mail</label>
              <input className="register-form__input" type="email" name="email" id="email" placeholder="Email" required />
            </li>
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="password">Пароль</label>
              <input className="register-form__input form__input_type_password" type="password" name="password" id="password" placeholder="Пароль" required />
              <span id="password-error" className="form__input-error"></span>
            </li>
          </ul>
        </fieldset>
      <button type="submit" className="button button_type_submit button_disabled">Зарегистрироваться</button>
    </form>
    <div className="entry__remark">
      <p className="entry__remark-text">Уже зарегистрированы?</p>
      <Link className="entry__remark-link" to="/signin">Войти</Link>
    </div>
  </section>

  );
}

export default Register;
