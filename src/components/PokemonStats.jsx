import React from 'react';
import PropTypes from 'prop-types';
import './PokemonStats.css';

function PokemonStats({ pokemon }) {
  return (
    <div className="stats-pokemons">
      {pokemon.stats.map((stat) => (
        <div
          key={ stat.stat.name }
          className="stats-pokemons-details"

        >
          <p>
            {stat.stat.name}
            :
            {' '}
            {stat.base_stat}
          </p>
          <div
            className="bar"
            value={ stat.stat.name }
            style={ { width: `${stat.base_stat}%` } }
          />
        </div>
      ))}
    </div>
  );
}

export default PokemonStats;

PokemonStats.propTypes = {
  pokemon: PropTypes.shape({
    stats: PropTypes.arrayOf(PropTypes.shape({
      stat: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      base_stat: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};
