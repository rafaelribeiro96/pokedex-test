import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

function Searchbar(props) {
  const [pokemonSearch, setPokemonSearch] = useState('');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setPokemonSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClick = () => {
    if (Number.isNaN(pokemonSearch)) {
      onSearch(pokemonSearch.toLowerCase());
    } else {
      onSearch(pokemonSearch);
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="searchbar-input"
          placeholder="Digite o nome ou ID do pokemon"
          onChange={ onChangeHandler }
          onKeyDown={ onKeyDownHandler }
        />
        <button
          className="searchbar-btn"
          onClick={ onButtonClick }
          type="button"
        >
          Buscar

        </button>
      </div>
    </div>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
