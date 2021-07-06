import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project container" id="about-project">
      <h2 className="about-project__header container__header">О проекте</h2>
      <ul className="about-project__content project-desc">
        <li className="project-desc__review">
          <p className="project-desc__title">Дипломный проект включал 5 этапов</p>
          <p className="project-desc__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="project-desc__details">
          <p className="project-desc__title">На выполнение диплома ушло 5 недель</p>
          <p className="project-desc__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about-project__timetable timetable">
        <li className="timetable__backend">
          <p className="timetable__time">1 неделя</p>
          <p className="timetable__desc">Back-end</p>
        </li>
        <li className="timetable__frontend">
          <p className="timetable__time">4 недели</p>
          <p className="timetable__desc">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
