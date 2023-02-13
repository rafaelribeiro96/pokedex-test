/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';
import { getPokemonData, getPokemons, searchPokemon } from '../services/apiPokemon';
import './Home.css';
import NotFound from '../components/NotFound';

function Home() {
  const [page, setPage] = useState(
    Number(localStorage.getItem('pokedexPage')) || 0,
  );
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const pokemonsForPage = 30;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(pokemonsForPage, pokemonsForPage * page);
      setTotalPages(Math.ceil(data.count / pokemonsForPage));
      const promises = data.results.map((pokemon) => getPokemonData(pokemon.url));
      const response = await Promise.all(promises);
      setPokemons(response);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons error: ', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('pokedexPage', page);
  }, [page]);

  return (
    <div className="home-container">
      <Searchbar onSearch={ onSearchHandler } />
      {notFound ? (
        <NotFound />
      ) : (
        <Pokedex
          pokemons={ pokemons }
          loading={ loading }
          page={ page }
          setPage={ setPage }
          totalPages={ totalPages }
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
