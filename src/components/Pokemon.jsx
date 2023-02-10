/* eslint-disable react/prop-types */
import React from 'react';
import './Pokemon.css';

function Pokemon(props) {
  const { pokemon } = props;
  console.log('pokemons', pokemon);
  return (
    <div className="pokemon-card-grid">

      <div className="pokemon-title-grid">
        <h4>{pokemon.name}</h4>
        <div>
          #
          {pokemon.id}
        </div>
      </div>

      <div className="pokemon-image-grid">
        <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
      </div>

      <div className="pokemon-types-grid">
        {pokemon.types.map((type, index) => (
          <div key={ index } className="pokemon-type-text">{type.type.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
