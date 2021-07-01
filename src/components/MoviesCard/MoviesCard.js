import './MoviesCard.css';
import thumbnail from '../../images/thumbnail.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const location = useLocation();
  let buttonClass;

  if (location.pathname === "/saved-movies") { buttonClass = "button_type_delete"}

  return (
    <li className="movies__card movie">
      <img className="movie__thumbnail" src={thumbnail} alt="Постер фильма" />
      <div className="movie__info">
        <h2 className="movie__title">33 слова о дизайне</h2>
        <button className={`button button_type_save ${buttonClass}`} aria-label="Сохранить"></button>
        <p className="movie__duration">1ч 47м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
