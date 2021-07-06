import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section class="profile">
      <h2 class="profile__title">Привет, Виталий!</h2>
      <form class="form form_type_profile profile__form">
        <fieldset class="form__container form__container_type_profile">
          <ul class="form__content list" role="none">
            <li class="form__item">
              <label class="form__label" for="name">Имя</label>
              <input
                class="form__input"
                type="text"
                name="name"
                id="name"
                value="Виталий"
                placeholder="Имя"
                required
              />
            </li>
            <li class="form__item">
              <label class="form__label" for="email">E-mail</label>
              <input
                class="form__input"
                type="email"
                name="email"
                id="email"
                value="pochta@yandex.ru"
                placeholder="E-mail"
                required
              />
            </li>
          </ul>
        </fieldset>
        <button type="submit" class="button button_type_edit button_inactive">Редактировать</button>
        <Link className="profile__link" to="/">Выйти из аккаунта</Link>
      </form>
    </section>

  );
}

export default Profile;
