/* eslint-disable react/prop-types */
import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <nav className="pagination-container">
      <button
        className="button-back-page"
        onClick={ onLeftClick }
        type="button"
      >
        <div>◀️</div>

      </button>
      <div className="render-number-page">
        {page}
        {' '}
        de
        {' '}
        {totalPages}
      </div>
      <button
        className="button-next-page"
        onClick={ onRightClick }
        type="button"
      >
        <div>▶️</div>

      </button>
    </nav>
  );
}

export default Pagination;
