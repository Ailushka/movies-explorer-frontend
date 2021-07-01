import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio wrapper">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__projects projects list">
        <li className="projects__item">
          <a className="projects__link" href="https://ailushka.github.io/how-to-learn/" target="_blank" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="projects__item">
          <a className="projects__link" href="https://ailushka.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">Одностраничный сайт</a>
        </li>
        <li className="projects__item">
          <a className="projects__link" href="https://github.com/Ailushka/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
