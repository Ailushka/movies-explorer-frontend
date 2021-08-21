import './MoreButton.css';

function MoreButton({addMoreMovies}) {
  return (
    <div className="wrapper">
      <button className="button movies__more" onClick={addMoreMovies}>Ещё</button>
    </div>
  );
}

export default MoreButton;
