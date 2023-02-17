import React from 'react';
import PropTypes from 'prop-types';
import './PokemonInfos.css';

const TEN = 10;

function PokemonInfos(props) {
  const { pokemon } = props;

  return (
    <div className="pokemon-info-stats">
      <div className="type-pokemon-details">
        Tipo:
        {' '}
        {pokemon.types.map((type) => type.type.name).join(', ')}
      </div>
      <p>
        Peso:
        {' '}
        {pokemon.weight / TEN }
        {' '}
        kg
      </p>
      <p>
        Altura:
        {' '}
        {pokemon.height / TEN }
        {' '}
        m
      </p>
      <p>
        Habilidades:
        {' '}
        {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
      </p>
    </div>
  );
}

export default PokemonInfos;

PokemonInfos.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};
