import './MobileMenu.css';
import { Link, NavLink } from 'react-router-dom';

function MobileMenu() {
  return (
    <div class="mobile-menu">
      <nav class="mobile-nav>">
        <ul class="list mobile-nav__list">
          <li class="mobile-nav__item">
            <NavLink className="mobile-nav__link" to="/">Главная</NavLink>
          </li>
          <li class="mobile-nav__item">
            <NavLink className="mobile-nav__link" activeClassName="mobile-nav__link_active" to="/movies">Фильмы</NavLink>
          </li>
          <li class="mobile-nav__item">
            <NavLink className="mobile-nav__link" to="/saved-movies">Сохраненные фильмы</NavLink>
          </li>
        </ul>
      </nav>
      <ul class="list mobile__nav usermobile-nav">
        <li class="usermobile-nav__item usermobile-nav__item_type_account">
          <Link className="usermobile-nav__link" to="/profile">Аккаунт</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
