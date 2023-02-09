/* eslint-disable react/prop-types */
import React from 'react';

function Pokemon(props) {
  const { pokemon } = props;
  return (
    <div>
      <div>
        <div>{pokemon.name}</div>
        <div>{pokemon.id}</div>
        <div>{pokemon.weight}</div>
        <div>{pokemon.height}</div>
        <div>{pokemon.base_experience}</div>
      </div>
    </div>
  );
}

export default Pokemon;
