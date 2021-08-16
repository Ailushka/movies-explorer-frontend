import { Link } from 'react-router-dom';
import './Header.css';
import Account from '../Account/Account.js';
import Navigation from '../Navigation/Navigation.js';
import logo from '../../images/logo.svg';

function Header({ loggedIn }) {
  let headerClass;

  if (!loggedIn) { headerClass = "header_theme_dark"}

  return (
    <header className={`header ${headerClass}`}>
      <div className="header__content wrapper">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип дипломного проекта" />
      </Link>
      {
        !loggedIn
          ? ( ""
            )
          : (
              <Navigation />
            )
      }
        <ul className="user-nav list">
        {
          !loggedIn
            ? (
              <>
                <li className="user-nav__item">
                  <Link className="user-nav__link user-nav__link_type_signup" to="/signup">Регистрация</Link>
                </li>
                <li className="user-nav__item">
                  <Link className="user-nav__link user-nav__link_type_signin" to="/signin">Войти</Link>
                </li>
              </>
              )
            : (
                <Account />
              )
        }
        </ul>
      </div>
    </header>
  );
}

export default Header;
