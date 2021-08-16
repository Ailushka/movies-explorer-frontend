import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import useFormWithValidation from '../../utils/FormValidation.js';

function Profile({onUpdateUser, isLoading, errorMessage, onLogOut}) {
  const currentUser = useContext(CurrentUserContext);
  const formWithValidation = useFormWithValidation();
  const { name, email } = formWithValidation.values;

  useEffect(() => {
    if (currentUser) {
      formWithValidation.setValues({
      'name': currentUser.name,
      'email': currentUser.email,
    })}}, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      'name': name,
      'email': email
    });
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form className="form form_type_profile profile__form" onSubmit={handleSubmit}>
        <fieldset className="form__container form__container_type_profile">
          <ul className="form__content list" role="none">
            <li className="form__item">
              <label className="form__label" htmlFor="name">Имя</label>
              <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                value={name || ''}
                placeholder="Имя"
                onChange={formWithValidation.handleChange}
                required
              />
              <span id="name-error" className="form__input-error">{formWithValidation.errors.name}</span>
            </li>
            <li className="form__item">
              <label className="form__label" htmlFor="email">E-mail</label>
              <input
                className="form__input"
                type="email"
                name="email"
                id="email"
                value={email || ''}
                placeholder="E-mail"
                onChange={formWithValidation.handleChange}
                required
              />
              <span id="email-error" className="form__input-error">{formWithValidation.errors.email}</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit" className={`button button_type_edit ${currentUser && (name === currentUser.name && email === currentUser.email) || !formWithValidation.isValid ? "button_inactive" : ""}`} disabled={currentUser && (name === currentUser.name && email === currentUser.email) || !formWithValidation.isValid}>Редактировать</button>
        <Link className="profile__link" to="/" onClick={onLogOut}>Выйти из аккаунта</Link>
      </form>
    </section>

  );
}

export default Profile;
