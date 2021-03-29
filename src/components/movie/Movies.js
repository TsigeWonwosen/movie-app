import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Banner from './Banner';
import { SEARCHAPI } from '../../asset/api-key';
import useFetch from '../../hooks/useFetch';
import MoviesPagination from './Pagination';
import Search from './Search';
import Movie from './Movie';
import '../../style/movies.css';

const Movies = () => {
  const [activePage, setActivePage] = useState(1);
  const NewAPIREQ = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${activePage}`;
  let { loading, error, data } = useFetch(NewAPIREQ);
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.length > 0) {
      fetch(SEARCHAPI + search)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    }

    setSearch('');
  };

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
    setTimeout(() => {
      setTrailerUrl('');
    }, 1000);
  };

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    setMovies();
  }

  return (
    <div className="movie-container" onClick={() => setTrailerUrl('')}>
      {error && (() => <h1>Error Fetching Movies ...</h1>)}
      {loading && (() => <h1>Loading ...</h1>)}

      <Banner handleClick={handleClick} />

      {trailerUrl && (
        <div className="preview-video">
          <button className="preview-close" onClick={() => setTrailerUrl('')}>
            x
          </button>
          <YouTube videoId={trailerUrl} opts={opts} onPause={onReady} />
        </div>
      )}

      <div className="movie-search-pagination">
        <div className="movie-pagination">
          <MoviesPagination
            activePage={activePage}
            handlePageChange={handlePageChange}
          />
          <Search
            handleSubmit={handleSubmit}
            setSearch={setSearch}
            search={search}
          />
        </div>
      </div>
      <div className="movie-wrapper">
        {movies &&
          movies.results?.map((movie) => (
            <Movie
              movie={movie}
              handleClick={handleClick}
              setVoteClass={setVoteClass}
            />
          ))}
      </div>
      <div>
        <MoviesPagination
          activePage={activePage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Movies;
