import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__content container">
        <h2 className="techs__header container__header">Технологии</h2>
        <div className="techs__info">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="techs__list technologies list">
            <li className="technologies__item">HTML</li>
            <li className="technologies__item">CSS</li>
            <li className="technologies__item">JS</li>
            <li className="technologies__item">React</li>
            <li className="technologies__item">Git</li>
            <li className="technologies__item">Express.js</li>
            <li className="technologies__item">mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
