/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import searchPokemon from '../services/apiPokemon';

function Searchbar() {
  const [pokemonSearch, setPokemonSearch] = useState('charizard');
  const [pokemon, setPokemon] = useState({});

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setPokemonSearch(event.target.value);
  };

  const onSearchHandler = async (pokemonResult) => {
    const result = await searchPokemon(pokemonResult);
    setPokemon(result);
  };

  const onButtonClick = () => {
    onSearchHandler(pokemonSearch);
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
      { pokemon && pokemon.sprites ? (
        <div>
          <div>
            <h4>Nome:</h4>
            {pokemon.name}
          </div>
          <div>
            <h4>Altura:</h4>
            {pokemon.height}
          </div>
          <div>
            <h4>Peso:</h4>
            {pokemon.weight}
          </div>
          <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
        </div>
      ) : null}
    </div>
  );
}

export default Searchbar;
