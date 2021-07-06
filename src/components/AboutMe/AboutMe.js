import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="about-me wrapper">
      <h2 className="about-me__header container__header">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__title">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании "СКБ Контур". После того как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__links links">
            <li className="links__item">
              <a className="links__link" href="https://www.facebook.com/profile.php?id=100005800548198" target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li className="links__item">
              <a className="links__link" href="https://github.com/Ailushka/" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Моя фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
