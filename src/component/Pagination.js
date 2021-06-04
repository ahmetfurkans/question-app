import React from 'react';
import '../styles/pagination.scss';

function Pagination({
  pages,
  gotoNext,
  gotoPrevious,
  pageNumber,
  setPageNumber,
}) {
  const Buttons = () => {
    if (pageNumber === 0) {
      if (pages.length >= 3) {
        return (
          <>
            <button className="pagination-first-button paginate-active">
              {pageNumber + 1}
            </button>
            <button
              className="pagination-middle-button"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              {pageNumber + 2}
            </button>
            <button
              className="pagination-last-button"
              onClick={() => setPageNumber(pageNumber + 2)}
            >
              {pageNumber + 3}
            </button>
          </>
        );
      }
    }
    if (pageNumber > 0 && pageNumber < pages.length - 1) {
      if (pages.length >= 3) {
        return (
          <>
            <button
              className="pagination-first-button"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              {pageNumber}
            </button>
            <button className="pagination-middle-button paginate-active">
              {pageNumber + 1}
            </button>
            <button
              className="pagination-last-button"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              {pageNumber + 2}
            </button>
          </>
        );
      }
    }
    if (pageNumber === pages.length - 1) {
      if (pages.length >= 3) {
        return (
          <>
            <button
              className="pagination-first-button"
              onClick={() => setPageNumber(pageNumber - 2)}
            >
              {pageNumber - 1}
            </button>
            <button
              className="pagination-middle-button"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              {pageNumber}
            </button>
            <button className="pagination-last-button paginate-active">
              {pageNumber + 1}
            </button>
          </>
        );
      }
    }
    if (pages.length === 2) {
      return (
        <>
          <button
            className={`pagination-first-button ${
              pageNumber === 0 ? 'paginate-active' : null
            }`}
            onClick={() => setPageNumber(0)}
          >
            1
          </button>
          <button
            className={`pagination-last-button ${
              pageNumber === 1 ? 'paginate-active' : null
            }`}
            onClick={() => setPageNumber(1)}
          >
            2
          </button>
        </>
      );
    }
    return null;
  };
  return (
    <div style={{ display: 'flex' }}>
      <button
        className="pagination-previous-next-button"
        onClick={gotoPrevious}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="middle-paginate">
        <Buttons />
      </div>

      <button className="pagination-previous-next-button" onClick={gotoNext}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <select
        className="pagination-select-button"
        value={pageNumber + 1}
        onChange={e => setPageNumber(e.target.value - 1)}
      >
        {pages.map(page => (
          <option value={page + 1} key={page}>
            {page + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
