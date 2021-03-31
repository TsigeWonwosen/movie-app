import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/ContextProvider';
import { FaSearch } from 'react-icons/fa';
function Search() {
  const { handleSearch } = useContext(MovieContext);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch('');
  };
  return (
    <form onSubmit={handleSubmit} className="movie-header">
      <button className="searchIcon" onClick={handleSubmit}>
        <FaSearch />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter your key words"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
}

export default Search;
