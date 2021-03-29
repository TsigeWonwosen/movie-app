import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/ContextProvider';

function Search() {
  const { handleSearch } = useContext(MovieContext);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch('');
  };
  return (
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
  );
}

export default Search;
