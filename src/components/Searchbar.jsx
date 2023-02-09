import React, { useState } from 'react';

function Searchbar() {
  const [pokemonSearch, setPokemonSearch] = useState('charizard');

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setPokemonSearch(event.target.value);
  };

  const onButtonClick = () => {
    console.log(pokemonSearch);
  };

  return (
    <div className="searchbar-container">

      <div className="searchbar">
        <input type="text" placeholder="Buscar Pokemon" onChange={ onChangeHandler } />
      </div>

      <div className="div-searchbar-btn">
        <button
          className="searchbar-btn"
          type="button"
          onClick={ onButtonClick }
        >
          Buscar
        </button>
      </div>

    </div>
  );
}

export default Searchbar;
