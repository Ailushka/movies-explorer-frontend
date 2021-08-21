import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoreButton from '../MoreButton/MoreButton.js';
import Preloader from '../Preloader/Preloader.js';
import {
  DESKTOP,
  TABLET,
  NUM_OF_MOVIES_DESKTOP,
  NUM_OF_MOVIES_TABLET,
  NUM_OF_MOVIES_MOBILE,
  NUM_OF_MORE_MOVIES_DESKTOP,
  NUM_OF_MORE_MOVIES_TABLET
 } from '../../utils/constants.js';

function MoviesCardList({movies, userMovies, addMoreMovies, isLoading, onSaveMovie, onDeleteMovie }) {
  const [numberOfMovies, setNumberOfMovies] = useState(window.screen.width > DESKTOP ? NUM_OF_MOVIES_DESKTOP : window.screen.width > TABLET ? NUM_OF_MOVIES_TABLET : NUM_OF_MOVIES_MOBILE);
  const [currentViewportWidth, setCurrentViewportwidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width !== currentViewportWidth) {
        setNumberOfMovies(window.screen.width > DESKTOP ? NUM_OF_MOVIES_DESKTOP : window.screen.width > TABLET ? NUM_OF_MOVIES_TABLET : NUM_OF_MOVIES_MOBILE);
        setCurrentViewportwidth(window.screen.width);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [currentViewportWidth]);

  function handleMoreButtonClick() {
    setNumberOfMovies(prev => {
      return prev + (window.screen.width > DESKTOP ? NUM_OF_MORE_MOVIES_DESKTOP : NUM_OF_MORE_MOVIES_TABLET)
    });
  }

  return (
    <>
    <section className="movies wrapper">
      {isLoading && <Preloader />}
      {((movies && movies.length) || 0) > 0
      ? <ul className="movies__list list">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                isLiked={userMovies.some(savedMovie => savedMovie.id === movie.id)}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            );
          }).slice(0, numberOfMovies)}
        </ul>
      : <p className="movies__empty">Ничего не найдено</p>
      }
    </section>
    {
      movies.length > numberOfMovies
      ? (<MoreButton addMoreMovies={handleMoreButtonClick} />)
      : ''
    }
    </>
  );
}

export default MoviesCardList;
