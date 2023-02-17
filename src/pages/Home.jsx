/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';
import { getPokemonData, getPokemons, searchPokemonForName, searchPokemon, searchPokemonByType } from '../services/apiPokemon';
import './Home.css';
import NotFound from '../components/NotFound';
import SearchByType from '../components/SearchByType';

function Home() {
  const [page, setPage] = useState(Number(localStorage.getItem('pokedexPage')) || 0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState('');

  const pokemonByPage = 30;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      let data;
      if (type) {
        data = await searchPokemonByType(type);
        setTotalPages(Math.ceil(data.length / pokemonByPage));
        const start = pokemonByPage * page;
        const end = start + pokemonByPage;
        const promises = data.slice(start, end).map((pokemon) => getPokemonData(pokemon.url));
        const response = await Promise.all(promises);
        setPokemons(response);
        setLoading(false);
      } else {
        data = await getPokemons(pokemonByPage, pokemonByPage * page);
        setTotalPages(Math.ceil(data.count / pokemonByPage));
        const promises = data.results.map((pokemon) => getPokemonData(pokemon.url));
        const response = await Promise.all(promises);
        setPokemons(response);
        setLoading(false);
      }
    } catch (error) {
      console.log('fetchPokemons error: ', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page, type]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    let result;
    if (!pokemon) {
      result = await fetchPokemons();
    } else {
      result = await (Number.isNaN(Number(pokemon))
        ? searchPokemonForName(pokemon) : searchPokemon(pokemon));
    }
    if (!result || result.length === 0) {
      setNotFound(true);
      setPokemons([]);
    } else {
      setNotFound(false);
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
      <SearchByType
        setType={ setType }
        setPage={ setPage }
      />
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
