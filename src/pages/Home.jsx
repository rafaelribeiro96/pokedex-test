import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';
import { getPokemonData, getPokemons } from '../services/apiPokemon';

function Home() {
  const [loading, setLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map((pokemon) => getPokemonData(pokemon.url));
      const response = await Promise.all(promises);
      setPokemons(response);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons error: ', error);
    }
  };

  useEffect(() => {
    console.log('carregou');
    fetchPokemons();
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={ pokemons } loading={ loading } />
    </div>
  );
}

export default Home;
