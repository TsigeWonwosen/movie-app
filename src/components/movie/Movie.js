import React from 'react';
import { IMG_PATH, DEFAULT_IMAGE } from '../../asset/api-key';
function Movie({ movie, handleClick, setVoteClass }) {
  return (
    <div className="movie-card" onClick={() => handleClick(movie)}>
      <img
        src={movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMAGE}
        alt={movie.title}
      />
      <div className="movie-info">
        <span className="title">
          <h5>{movie.title}</h5>
        </span>
        <span className={`vote ${setVoteClass(movie.vote_average)}`}>
          <h5>{movie.vote_average}</h5>
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
