/* eslint-disable react/prop-types */
import React from 'react';
import './SpritesDetails.css';

function SpritesDetails({ pokemon }) {
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

export default SpritesDetails;
