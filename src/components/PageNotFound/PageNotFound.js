import './PageNotFound.css';
import { useHistory } from 'react-router-dom';


function PageNotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="button button_type_to-back" onClick={history.goBack}>Назад</button>
    </section>
  );
}

export default PageNotFound;
