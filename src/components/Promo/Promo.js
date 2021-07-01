import './Promo.css';
import web from '../../images/web.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content container">
        <img className="promo__main-illustration" src={web} alt="Главная иллюстрация сайта" />
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#about-project" className="promo__link">Узнать больше</a>
      </div>
    </section>
  );
}

export default Promo;
