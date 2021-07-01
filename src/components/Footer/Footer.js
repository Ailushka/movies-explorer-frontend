import './Footer.css';

function Footer() {
  return (
    <footer className="footer wrapper">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум x BeatFilm.</h3>
      <div className="footer__content">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links links">
          <li className="links__item links__item_type_footer">
            <a className="links__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="links__item links__item_type_footer">
            <a className="links__link" href="https://github.com/Ailushka/" target="_blank" rel="noreferrer">Github</a>
          </li>
          <li className="links__item links__item_type_footer">
            <a className="links__link" href="https://www.facebook.com/profile.php?id=100005800548198" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
