/* eslint-disable react/prop-types */
import React from 'react';
import './PokemonImgDetails.css';

function ImgDetails(props) {
  const { pokemon } = props;
  const { shiny } = props;

  const imgDreamWorld = pokemon.sprites.other.dream_world.front_default;
  const imgOfficialNetwork = pokemon.sprites.other['official-artwork'].front_default;
  const imgPokemonShiny = pokemon.sprites.other.home.front_shiny;

  return (
    <img
      className="img-details"
      src={ shiny ? imgPokemonShiny : (imgDreamWorld || imgOfficialNetwork) }
      alt={ pokemon.name }
    />
  );
}

export default ImgDetails;
