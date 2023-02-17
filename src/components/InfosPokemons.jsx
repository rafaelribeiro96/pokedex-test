/* eslint-disable react/prop-types */
import React from 'react';
import './InfosPokemons.css';

const TEN = 10;

function InfosPokemons(props) {
  const { pokemon } = props;
  const { background } = props;

  return (
    <div className="pokemon-info-stats">
      <div className="type-pokemon-details" style={ { background } }>
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

export default InfosPokemons;
