/* eslint-disable react/prop-types */
import React from 'react';
import './TitlePokemon.css';

function TitlePokemon(props) {
  const { pokemon } = props;
  const { name, id } = pokemon;

  return (
    <div className="title-pokemon">
      <h1 className="title-pokemon-details">
        {name}
        {' '}
        #
        {' '}
        {id}
      </h1>
    </div>
  );
}

export default TitlePokemon;
