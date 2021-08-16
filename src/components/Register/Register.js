import { Link } from 'react-router-dom';
import './Register.css';
import Preloader from '../Preloader/Preloader.js';
import useFormWithValidation from '../../utils/FormValidation.js';
import logo from '../../images/logo.svg';

function Register({onRegister, isLoading, errorMessage}) {
  const formWithValidation = useFormWithValidation();
  const { name, email, password } = formWithValidation.values;
  const { values, handleChange, errors, isValid, resetForm } = formWithValidation;

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister({name, email, password});
    resetForm();
  }

  return (
    <section className="entry">
      <Link to="/">
        <img className="entry__logo" src={logo} alt="Логотип дипломного проекта" />
      </Link>
      <h2 className="entry__title">Добро пожаловать!</h2>
      {isLoading && <Preloader />}
      <form className="form form_type_sign-up register-form" onSubmit={handleSubmit}>
        <fieldset className="register-form__container form__container_type_sign-up">
          <ul className="register-form__content list" role="none">
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="name">Имя</label>
              <input className="register-form__input" type="text" name="name" id="name" placeholder="Имя" required value={values.name || ''} onChange={handleChange} />
              <span id="name-error" className="form__input-error">{errors.name}</span>
            </li>
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="email">E-mail</label>
              <input className="register-form__input" type="email" name="email" id="email" placeholder="Email" required value={values.email || ''} onChange={handleChange}/>
              <span id="email-error" className="form__input-error">{errors.email}</span>
            </li>
            <li className="register-form__item">
              <label className="register-form__label" htmlFor="password">Пароль</label>
              <input className="register-form__input form__input_type_password" type="password" name="password" id="password" placeholder="Пароль" required value={values.password || ''} onChange={handleChange}/>
              <span id="password-error" className="form__input-error">{errors.password}</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit" className={`button button_type_submit ${!isValid ? "button_disabled" : "button_enabled"}`} disabled={!isValid}>
        {errorMessage
          ? <span id="submit-error" className="submit-error">{errorMessage}</span>
          : ''
        }
        Зарегистрироваться</button>
    </form>
    <div className="entry__remark">
      <p className="entry__remark-text">Уже зарегистрированы?</p>
      <Link className="entry__remark-link" to="/signin">Войти</Link>
    </div>
  </section>

  );
}

export default Register;
