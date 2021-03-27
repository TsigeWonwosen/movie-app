import Pagination from 'react-js-pagination';
import React from 'react';

import '../../style/paginationStyle.css';
function MoviesPagination({ activePage, handlePageChange }) {
  return (
    <div className="movie-pagination">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={10}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default MoviesPagination;
