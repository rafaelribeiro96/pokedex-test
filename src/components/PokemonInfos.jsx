import React from 'react';
import PropTypes from 'prop-types';
import './PokemonInfos.css';

const TEN = 10;

function PokemonInfos(props) {
  const { pokemon } = props;

  return (
    <div className="pokemon-info-stats">

      <p className="weight-height cor-response-1">
        Peso:
        {' '}
        {pokemon.weight / TEN }
        {' '}
        kg
      </p>
      <p className="weight-height">
        Altura:
        {' '}
        {pokemon.height / TEN }
        {' '}
        m
      </p>
      <p className="type-pokemon-details">
        Tipo:
        {' '}
        {pokemon.types.map((type) => type.type.name).join(', ')}
      </p>
      <p className="type-pokemon-details details-ability cor-response-1">
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
