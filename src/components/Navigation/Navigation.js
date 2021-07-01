import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav class="header__nav project-nav>">
      <ul class="list project-nav__list">
        <li class="project-nav__item">
          <NavLink className="project-nav__link" activeClassName="project-nav__link_active" to="/movies">Фильмы</NavLink>
        </li>
        <li class="project-nav__item">
          <NavLink className="project-nav__link" to="/saved-movies">Сохраненные фильмы</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
