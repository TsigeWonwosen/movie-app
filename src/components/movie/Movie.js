import React from 'react';
import { IMG_PATH, DEFAULT_IMAGE } from '../../asset/api-key';
function Movie({ movie, handleClick, setVoteClass }) {
  let title =
    movie.title.length > 20
      ? movie.title.substring(0, 20).concat(' ...')
      : movie.title;

  return (
    <div className="movie-card" onClick={() => handleClick(movie)}>
      <div className="imageContainer">
        <img
          src={movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMAGE}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <span className="title">
          <h5>{title}</h5>
        </span>
        <span className="vote-container">
          <h5>
            vote{' '}
            <span className={`vote ${setVoteClass(movie.vote_average)}`}>
              {movie.vote_average}
            </span>
          </h5>
        </span>
      </div>
      <div className="movie-over" onClick={() => handleClick(movie)}>
        <h4>Over View</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
