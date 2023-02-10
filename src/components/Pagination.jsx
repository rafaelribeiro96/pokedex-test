/* eslint-disable react/prop-types */
import React from 'react';

function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button onClick={ onLeftClick } type="button"><div>◀️</div></button>
      <div>
        {page}
        {' '}
        de
        {' '}
        {totalPages}
      </div>
      <button onClick={ onRightClick } type="button"><div>▶️</div></button>
    </div>
  );
}

export default Pagination;
