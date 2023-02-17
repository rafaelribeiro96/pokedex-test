/* eslint-disable react/prop-types */
import React from 'react';
import './SearchByType.css';

const pokemonTypes = [
  'normal',
  'fire',
  'fighting',
  'water',
  'flying',
  'grass',
  'poison',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ice',
  'bug',
  'dragon',
  'ghost',
  'dark',
  'steel',
  'fairy',
];

function SearchByType({ setType, setPage }) {
  const handleFilterAll = () => {
    setType('');
    setPage(0);
  };

  const handleChange = (event) => {
    const selectedType = event.target.value;
    if (selectedType === '') {
      handleFilterAll();
    } else {
      setType(selectedType);
      setPage(0);
    }
  };

  return (
    <div className="search-by-type">
      <h3>Tipo do Pokemon:</h3>
      <select
        onChange={ handleChange }
        data-testid="filter-select"
        className="select-type"
      >
        <option value="">Todos</option>
        {pokemonTypes.map((type) => (
          <option
            value={ type }
            key={ type }
            data-testid={ type }
            className="option-type"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchByType;
