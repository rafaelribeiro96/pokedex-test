/* eslint-disable react/prop-types */
import React from 'react';

function Pokemon(props) {
  const { pokemon } = props;
  console.log('pokemons', pokemon);
  return (
    <div className="pokemon-card">
      <div>
        <h4>{pokemon.name}</h4>
        <div>
          #
          {pokemon.id}
        </div>
      </div>
      <div className="pokemon-image-card">
        <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
      </div>
    </div>
  );
}

export default Pokemon;
