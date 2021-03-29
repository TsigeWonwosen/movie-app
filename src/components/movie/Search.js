import React from 'react';

function Search({ handleSubmit, setSearch, search }) {
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
