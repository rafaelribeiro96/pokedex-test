import React from 'react';
import PropTypes from 'prop-types';
import './PokemonSprites.css';

function PokemonSprites({ pokemon }) {
  return (
    <div className="div-sprites">
      <div>
        {Object.keys(pokemon.sprites).map((sprite) => {
          const imageUrl = pokemon.sprites[sprite];
          if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
            return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
          }
          return null;
        })}
        {Object.keys(pokemon.sprites.other).map((sprite) => {
          const imageUrl = pokemon.sprites.other[sprite].front_default;
          if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
            return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
          }
          return null;
        })}
        {Object.keys(pokemon.sprites.other).map((sprite) => {
          const imageUrl = pokemon.sprites.other[sprite].front_shiny;
          if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
            return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default PokemonSprites;

PokemonSprites.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
      front_shiny: PropTypes.string,
      back_default: PropTypes.string,
      back_shiny: PropTypes.string,
      other: PropTypes.shape({
        dream_world: PropTypes.shape({
          front_default: PropTypes.string,
          front_female: PropTypes.string,
        }),
        official_artwork: PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
