import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';
import { getPokemons } from '../services/apiPokemon';

function Home() {
  const [loading, setLoading] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await getPokemons();
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
      <Pokedex pokemons={ pokemons.results } loading={ loading } />
    </div>
  );
}

export default Home;
