/* eslint-disable react/prop-types */
import React from 'react';
import './Pokemon.css';
import Background from './Background';

function Pokemon(props) {
  const { pokemon } = props;

  return (
    <Background types={ pokemon.types } propsClass="pokemon-card-grid">
      <div className="pokemon-image-grid">
        <img
          className="img-card-pokemon"
          src={ pokemon.sprites.front_default }
          alt={ pokemon.name }
        />
      </div>

      <div className="pokemons-info-card">
        <div className="pokemon-title-grid">
          <h4 className="pokemon-name-card">{pokemon.name}</h4>
          <div className="pokemon-id-card">
            #
            {pokemon.id}
          </div>
        </div>

        <div className="pokemon-types-grid">
          {pokemon.types.map((type, index) => (
            <div key={ index } className="pokemon-type-text">{type.type.name}</div>
          ))}
        </div>
      </div>
    </Background>
  );
}

export default Pokemon;
