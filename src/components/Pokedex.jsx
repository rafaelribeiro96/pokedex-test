/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import './Pokedex.css';
import Pagination from './Pagination';

function Pokedex(props) {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div>
        <Pagination
          page={ page + 1 }
          totalPages={ totalPages }
          onLeftClick={ onLeftClickHandler }
          onRightClick={ onRightClickHandler }
        />
      </div>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons
            && pokemons.map((pokemon, index) => (
              <Link className="card-a" to={ `/pokemon/${pokemon.id}` } key={ index }>
                <Pokemon pokemon={ pokemon } />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
