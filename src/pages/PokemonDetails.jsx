/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonDetails.css';
import Loading from '../components/Loading';

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
  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);
  const { pokemonId } = useParams();
  const navigate = useNavigate();

  const backgroundColor = pokemon ? typeColors[pokemon.types[0].type.name] : null;

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
    <div className="container-pokemon-details" style={ { backgroundColor } }>
      <button
        onClick={ () => navigate('/') }
        type="button"
        className="btn-back"
      >
        VOLTAR PARA A POKEDEX
      </button>
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
      <div className="pokemon-infos-details-container">
        <div className="pokemons-other-details">
          <p>
            Tipo:
            {' '}
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </p>
          <p>
            Peso:
            {' '}
            {pokemon.weight}
          </p>
          <p>
            Altura:
            {' '}
            {pokemon.height}
          </p>
        </div>
        <img
          className="img-details"
          src={ shiny ? pokemon.sprites.other.home.front_shiny
            : pokemon.sprites.other.dream_world.front_default }
          alt={ pokemon.name }
        />
        <div className="stats-pokemons">
          {pokemon.stats.map((stat) => (
            <div key={ stat.stat.name } className="stats-pokemons-details">
              <p>
                {stat.stat.name}
                :
                {' '}
                {stat.base_stat}
              </p>
              <div className="bar" style={ { width: `${stat.base_stat}%` } } />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
