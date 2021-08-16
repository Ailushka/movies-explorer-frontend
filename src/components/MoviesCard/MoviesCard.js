import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, saved, onSaveMovie, onDeleteMovie, isLiked }) {
  const location = useLocation();

  function handleMovieDuration(duration) {
    if (duration < 60) {
      return duration + 'м'
    } else {
      return Math.floor(duration / 60) + ' ч ' + (duration % 60) + ' м';
    }
  }

  function handleClick() {
    if (!isLiked) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(movie);
    }
  }

  return (
    <li className="movies__card movie">
        <a href={movie.trailer} target="_blank" rel="noreferrer">
          <img className="movie__thumbnail" src={movie.image} alt={movie.nameRU} />
        </a>
        <div className="movie__info">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <button className={
            `button
             button_type_save
             ${isLiked ? "button_type_clicked" : ""}
             ${location.pathname === "/saved-movies" ? "button_type_delete" : ""}`
           }
           aria-label="Сохранить" onClick={handleClick}></button>
          <p className="movie__duration">{handleMovieDuration(movie.duration)}</p>
        </div>

    </li>
  );
}

export default MoviesCard;
