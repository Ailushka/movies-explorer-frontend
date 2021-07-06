import './Account.css';
import { Link } from 'react-router-dom';

function Account() {
  return (
    <li class="user-nav__item user-nav__item_type_account">
      <Link className="user-nav__link user-nav__link_type_account" to="/profile">Аккаунт</Link>
    </li>
  );
}

export default Account;
