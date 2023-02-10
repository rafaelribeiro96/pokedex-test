/* eslint-disable react/prop-types */
import React from 'react';
import './Pokemon.css';

const typeColors = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A878',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  ice: '#98D8D8',
};

function Pokemon(props) {
  const { pokemon } = props;
  const backgroundColor = typeColors[pokemon.types[0].type.name];

  return (
    <div className="pokemon-card-grid" style={ { backgroundColor } }>
      <div className="pokemon-image-grid">
        <img
          className="img-card-pokemon"
          src={ pokemon.sprites.front_default }
          alt={ pokemon.name }
        />
      </div>

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
  );
}

export default Pokemon;
