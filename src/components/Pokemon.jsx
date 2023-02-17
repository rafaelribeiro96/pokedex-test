import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';
import Background from './Background';

function Pokemon(props) {
  const { pokemon } = props;

  return (
    <Background types={ pokemon.types } propsClass="pokemon-card-grid">
      <div className="pokemon-image-grid">
        <img
          className="img-card-pokemon"
          src={ pokemon.sprites.front_default }
          alt={ pokemon.name }
        />
      </div>

      <div className="pokemons-info-card">
        <div className="pokemon-title-grid">
          <h4 className="pokemon-name-card">{pokemon.name}</h4>
          <div className="pokemon-id-card">
            #
            {pokemon.id}
          </div>
        </div>

        <div className="pokemon-types-grid">
          {pokemon.types.map((type, index) => (
            <div key={ index } className="pokemon-type-text">{type.type.name}</div>
          ))}
        </div>
      </div>
    </Background>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }).isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};
