import React, { createContext, useState, useEffect } from 'react';

import movieTrailer from 'movie-trailer';
import { SEARCH_API } from '../asset/api-key';
import useFetch from '../hooks/useFetch';

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [activePage, setActivePage] = useState(1);
  const new_Api_Request = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${activePage}`;
  let { loading, error, data } = useFetch(new_Api_Request);
  const [movies, setMovies] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  const handleSearch = (search) => {
    if (search.length > 0) {
      fetch(SEARCH_API + search)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    }
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

  function handlePageChange(pageNumber) {
    setActivePage(pageNumber);
    setMovies();
  }
  return (
    <MovieContext.Provider
      value={{
        movies,
        error,
        loading,
        handlePageChange,
        handleClick,
        setVoteClass,
        handleSearch,
        trailerUrl,
        setTrailerUrl,
        activePage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export { MovieProvider, MovieContext };
