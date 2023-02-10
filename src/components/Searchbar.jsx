/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Searchbar.css';

function Searchbar(props) {
  const [pokemonSearch, setPokemonSearch] = useState('charizard');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setPokemonSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClick = () => {
    onSearch(pokemonSearch);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={ onChangeHandler } />
      </div>
      <div className="searchbar-btn">
        <button onClick={ onButtonClick } type="button">Buscar</button>
      </div>
    </div>
  );
}

export default Searchbar;
