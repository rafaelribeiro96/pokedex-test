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
import ImgDetails from '../components/ImgDetails';
import Shiny from '../components/Shiny';
import Background from '../components/Background';

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

  return (
    <Background types={ pokemon.types } propsClass="container-pokemon-details">

      <PokemonNavigation pokemonId={ pokemonId } />

      <h1 className="title-pokemon-details">
        {pokemon.name}
        {' '}
        #
        {' '}
        {pokemon.id}
      </h1>

      <Shiny shiny={ shiny } setShiny={ setShiny } />

      <div className="pokemon-infos-stats-container">
        <InfosPokemons pokemon={ pokemon } />

        <ImgDetails pokemon={ pokemon } shiny={ shiny } />

        <StatsPokemon pokemon={ pokemon } />

      </div>

      <SpritesDetails pokemon={ pokemon } />

      <Footer />

    </Background>

  );
}

export default PokemonDetails;
