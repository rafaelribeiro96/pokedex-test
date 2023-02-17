/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonDetails.css';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import PokemonNavigation from '../components/PokemonNavigation';
import SpritesDetails from '../components/SpritesDetails';
import StatsPokemon from '../components/StatsPokemon';
import InfosPokemons from '../components/InfosPokemons';

const typeColors = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A878',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  flying: '#d7cef0',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  ice: '#98D8D8',
};

function PokemonDetails() {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchPokemon(pokemonId);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <div><Loading /></div>;
  }

  let background;
  if (pokemon.types.length === 1) {
    background = typeColors[pokemon.types[0].type.name];
  } else if (pokemon.types.length === 2) {
    const type1 = typeColors[pokemon.types[0].type.name];
    const type2 = typeColors[pokemon.types[1].type.name];
    background = `linear-gradient(to right, ${type1} 60%, ${type2})`;
  }

  const imgDreamWorld = pokemon.sprites.other.dream_world.front_default;
  const imgOfficialNetwork = pokemon.sprites.other['official-artwork'].front_default;
  const imgPokemonShiny = pokemon.sprites.other.home.front_shiny;

  return (
    <div className="container-pokemon-details" style={ { background } }>

      <PokemonNavigation
        pokemonId={ pokemonId }
      />

      <h1 className="title-pokemon-details">
        {pokemon.name}
        {' '}
        #
        {' '}
        {pokemon.id}
      </h1>
      <div className="checkbox-container">
        <label htmlFor="shiny" className="shiny-version">
          Versão Shiny
          <input
            type="checkbox"
            id="shiny"
            className="shiny-checkbox"
            checked={ shiny }
            onChange={ () => setShiny(!shiny) }
          />
        </label>

      </div>
      <div className="pokemon-infos-stats-container">
        <InfosPokemons pokemon={ pokemon } background={ background } />

        <img
          className="img-details"
          src={ shiny ? imgPokemonShiny : (imgDreamWorld || imgOfficialNetwork) }
          alt={ pokemon.name }
        />

        <StatsPokemon pokemon={ pokemon } />

      </div>

      <SpritesDetails pokemon={ pokemon } />

      <Footer />
    </div>
  );
}

export default PokemonDetails;
