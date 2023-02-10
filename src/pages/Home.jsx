/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';
import { getPokemonData, getPokemons, searchPokemon } from '../services/apiPokemon';

function Home() {
  const [page, setPage] = useState(0);
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

  return (
    <div className="home-container">
      <Navbar />
      <Searchbar onSearch={ onSearchHandler } />
      {notFound ? (
        <div className="not-found-pokemon">
          <div class-name="not-found-text">
            Este Pokemón não existe!
            Digite novamente o nome do seu Pokémon!

          </div>
          <a href="/">
            <button type="button">Volte a tela inicial</button>
          </a>
        </div>
      )
        : (<Pokedex
          pokemons={ pokemons }
          loading={ loading }
          page={ page }
          setPage={ setPage }
          totalPages={ totalPages }
        />)}
    </div>
  );
}

export default Home;
