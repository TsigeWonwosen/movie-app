import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Banner from './Banner';
import { IMGPATH, SEARCHAPI, DEFAULTIMAG } from '../../asset/api-key';
import { useFetch } from '../../hooks/useFetch';
import MoviesPagination from './Pagination';
import '../../style/movies.css';

const Movies = () => {
  const [activePage, setActivePage] = useState(1);
  const NewAPIREQ = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${activePage}`;
  let { products } = useFetch(NewAPIREQ);
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    if (products) {
      setMovies(products);
    }
  }, [products]);

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
          console.log(urlParams);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
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
    <div className="movie-container">
      <Banner />

      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} onPause={onReady} />
      )}

      <div className="movie-search-pagination">
        <div className="movie-pagination">
          <MoviesPagination
            activePage={activePage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="movie-header">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Enter your key words"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        </div>
      </div>
      <div className="movie-wrapper">
        {movies &&
          movies.results?.map((movie) => {
            return (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => handleClick(movie)}
              >
                <img
                  src={
                    movie.poster_path
                      ? IMGPATH + movie.poster_path
                      : DEFAULTIMAG
                  }
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
          })}
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
