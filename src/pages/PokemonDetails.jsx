import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonDetails.css';
import Loading from '../components/Loading';
import Background from '../components/Background';
import PokemonNavigation from '../components/PokemonNavigation';
import TitlePokemon from '../components/TitlePokemon';
import ShinyButton from '../components/ShinyButton';
import PokemonInfos from '../components/PokemonInfos';
import PokemonStats from '../components/PokemonStats';
import PokemonSprites from '../components/PokemonSprites';
import Footer from '../components/Footer';
import PokemonImgDetails from '../components/PokemonImgDetails';

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

      <TitlePokemon pokemon={ pokemon } />

      <ShinyButton shiny={ shiny } setShiny={ setShiny } />

      <div className="pokemon-infos-stats-container">
        <PokemonInfos pokemon={ pokemon } />
        <PokemonImgDetails pokemon={ pokemon } shiny={ shiny } />
        <PokemonStats pokemon={ pokemon } />

      </div>
      <PokemonSprites pokemon={ pokemon } shiny={ shiny } />
      <Footer />
    </Background>
  );
}

export default PokemonDetails;
