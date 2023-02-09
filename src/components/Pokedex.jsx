/* eslint-disable react/prop-types */
import React from 'react';

function Pokedex(props) {
  const { pokemons, loading } = props;
  return (
    <div>
      <div>
        <h1>Pokedex</h1>
        <div>Pokemons</div>
      </div>
      {loading ? (<div>Loading ...</div>) : (
        <div className="pokedex-grid">
          { pokemons && pokemons.map((pokemon, index) => (
            <div key={ index }>
              <div>
                { pokemon.name }
              </div>
            </div>

          ))}
          {' '}

        </div>
      )}
    </div>
  );
}

export default Pokedex;
