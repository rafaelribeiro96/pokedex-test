/* eslint-disable react/prop-types */
import React from 'react';
import './PokemonStats.css';

function PokemonStats({ pokemon }) {
  return (
    <div className="stats-pokemons">
      {pokemon.stats.map((stat) => (
        <div key={ stat.stat.name } className="stats-pokemons-details">
          <p>
            {stat.stat.name}
            :
            {' '}
            {stat.base_stat}
          </p>
          <div className="bar" style={ { width: `${stat.base_stat}%` } } />
        </div>
      ))}
    </div>
  );
}

export default PokemonStats;
