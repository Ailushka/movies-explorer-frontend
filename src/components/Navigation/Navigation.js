import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="header__nav project-nav>">
      <ul className="list project-nav__list">
        <li className="project-nav__item">
          <NavLink className="project-nav__link" activeClassName="project-nav__link_active" to="/movies">Фильмы</NavLink>
        </li>
        <li className="project-nav__item">
          <NavLink className="project-nav__link" to="/saved-movies">Сохраненные фильмы</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
