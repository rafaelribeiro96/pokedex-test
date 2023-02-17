/* eslint-disable react/prop-types */
import React from 'react';
import './Pagination.css';

function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick, setPage } = props;

  const goToFirstPage = () => {
    setPage(0);
    localStorage.setItem('pokedexPage', 0);
  };

  return (
    <nav className="pagination-container">
      <button
        type="button"
        className="button-first-last-page"
        onClick={ goToFirstPage }
      >
        Início

      </button>
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
