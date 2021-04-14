import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import MoviesPagination from './Pagination';
import Movie from './Movie';
import '../../style/movies.css';
import ReactHelmet from '../../util/ReactHelmet';
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
    height: '540px',
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
    <div className="movie-container">
      {error && (() => <h1>Error Fetching Movies ...</h1>)}
      {loading && (() => <h1>Loading ...</h1>)}
      <ReactHelmet title="Movies" />
      {trailerUrl && (
        <div className="preview-video" onClick={() => setTrailerUrl('')}>
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
