import Pagination from 'react-js-pagination';
import React from 'react';
import { MovieContext } from '../../context/ContextProvider';
import useWindowSize from '../../hooks/useWindowSize';
import '../../style/paginationStyle.css';

function MoviesPagination() {
  const { activePage, handlePageChange } = React.useContext(MovieContext);
  const windowSize = useWindowSize();
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={windowSize ? 5 : 10}
      onChange={handlePageChange}
    />
  );
}

export default MoviesPagination;
