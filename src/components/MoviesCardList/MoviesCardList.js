import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <section className="movies wrapper">
      <ul className="movies__list list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
