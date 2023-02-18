import React from 'react';
import PropTypes from 'prop-types';
import './PokemonImgDetails.css';

function PokemonImgDetails(props) {
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

export default PokemonImgDetails;

PokemonImgDetails.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        dream_world: PropTypes.shape({
          front_default: PropTypes.string,
        }),
        'official-artwork': PropTypes.shape({
          front_default: PropTypes.string,
        }),
        home: PropTypes.shape({
          front_shiny: PropTypes.string,
        }),
      }),
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  shiny: PropTypes.bool.isRequired,
};
