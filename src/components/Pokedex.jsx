import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './Pokedex.css';
import Pagination from './Pagination';
import Loading from './Loading';

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
          className="pagination-bottom-top"
          page={ page + 1 }
          totalPages={ totalPages }
          onLeftClick={ onLeftClickHandler }
          onRightClick={ onRightClickHandler }
          setPage={ setPage }
        />
      </div>
      {loading ? (
        <div><Loading /></div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && (Array.isArray(pokemons) ? pokemons.map((pokemon, index) => (
            <Link className="card-a" to={ `/pokemon/${pokemon.id}` } key={ index }>
              <Pokemon pokemon={ pokemon } />
            </Link>
          )) : (
            <Pokemon pokemon={ pokemons } />
          ))}
        </div>
      )}
      <div className="pagination-bottom">
        <Pagination
          page={ page + 1 }
          totalPages={ totalPages }
          onLeftClick={ onLeftClickHandler }
          onRightClick={ onRightClickHandler }
          setPage={ setPage }
        />
      </div>
    </div>
  );
}

export default Pokedex;

Pokedex.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
