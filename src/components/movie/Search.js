import React, { useState, useContext, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { FaSearch } from 'react-icons/fa';

import { MovieContext } from '../../context/ContextProvider';
import { IMG_PATH, DEFAULT_IMAGE } from '../../asset/api-key';

function Search() {
  const { handleSearch, movies, handleClick } = useContext(MovieContext);
  const [query, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setSearch('');
  };

  const options = useMemo( () => (   {
      isCaseSensitive: false,
      includeScore: true,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      keys: ['title', 'release_date', 'overview'],
    }),
    [],
  );

  useEffect(() => {
    if (movies && movies.results) {
      let fuse = new Fuse(movies?.results, options);
      let results = fuse.search(query);

      const characterResults = results && results.map((result) => result.item);

      setSearchResult(characterResults);
    }
  }, [movies, query, options]);

  return (
    <>
      <form onSubmit={handleSubmit} className="movie-header">
        <button className="searchIcon" onClick={handleSubmit}>
          <FaSearch />
        </button>
        {searchResult.length > 0 && (
          <span className="searchClose" onClick={() => setSearch('')}>
            X
          </span>
        )}
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter your key words"
          onChange={(e) => setSearch(e.target.value)}
          value={query}
        />
      </form>
      {searchResult.length > 0 && (
        <div className="search-result">
          <ul>
            {searchResult?.map((item) => {
              let title =
                item.title.length > 30
                  ? item.title.substring(0, 30).concat(' ...')
                  : item.title;

              let date = item.release_date.split('-')[0];

              return (
                <li
                  key={item.id}
                  onClick={() => {
                    handleClick(item);
                    setSearch('');
                  }}
                >
                  <img
                    src={
                      item.poster_path
                        ? IMG_PATH + item.poster_path
                        : DEFAULT_IMAGE
                    }
                    alt={title}
                  />
                  <div className="info">
                    <span>{title}</span>
                    <span className="release_date">{date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
