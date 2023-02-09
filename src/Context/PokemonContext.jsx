import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const value = useMemo(() => ({ pokemons, error, loading }), [pokemons, error, loading]);

  return (
    <PokemonContext.Provider value={ value }>
      {children}
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokemonProvider;
