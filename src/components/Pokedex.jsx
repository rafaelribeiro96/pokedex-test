/* eslint-disable react/prop-types */
import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

function Pokedex(props) {
  const { pokemons, loading } = props;
  return (
    <div>
      <div>
        <h1>Pokedex</h1>
        <div>Páginas</div>
      </div>
      {loading ? (<div>Loading ...</div>) : (
        <div className="pokedex-grid">
          { pokemons && pokemons.map((pokemon, index) => (
            <Pokemon key={ index } pokemon={ pokemon } />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
