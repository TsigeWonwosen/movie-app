import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import MoviesPagination from './Pagination';
import Movie from './Movie';
import '../../style/movies.css';
import { MovieContext } from '../../context/ContextProvider';

const Movies = () => {
  const {
    movies,
    error,
    loading,
    handleClick,
    setVoteClass,
    trailerUrl,
    setTrailerUrl,
  } = useContext(MovieContext);

  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
    setTimeout(() => {
      setTrailerUrl('');
    }, 1000);
  };

  return (
    <div className="movie-container" onClick={() => setTrailerUrl('')}>
      {error && (() => <h1>Error Fetching Movies ...</h1>)}
      {loading && (() => <h1>Loading ...</h1>)}

      {trailerUrl && (
        <div className="preview-video">
          <button className="preview-close" onClick={() => setTrailerUrl('')}>
            X
          </button>
          <YouTube videoId={trailerUrl} opts={opts} onPause={onReady} />
        </div>
      )}

      <MoviesPagination />
      <div className="movie-wrapper">
        {movies &&
          movies.results?.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              handleClick={handleClick}
              setVoteClass={setVoteClass}
            />
          ))}
      </div>

      <MoviesPagination />
    </div>
  );
};

export default Movies;
