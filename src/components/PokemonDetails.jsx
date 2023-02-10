/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import Header from './Header';
import './PokemonDetails.css';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);
  const { pokemonId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchPokemon(pokemonId);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container-pokemon-details">
        <button
          onClick={ () => navigate('/') }
          type="button"
          className="btn-back"
        >
          Voltar para a pokedex
        </button>
        <h1 className="title-pokemon-details">
          {pokemon.name}
          {' '}
          #
          {' '}
          {pokemon.id}
        </h1>
        <div className="checkbox-container">
          <label htmlFor="shiny">
            Versão Shiny
            <input
              type="checkbox"
              id="shiny"
              checked={ shiny }
              onChange={ () => setShiny(!shiny) }
            />
          </label>

        </div>
        <img
          className="img-details"
          src={ shiny ? pokemon.sprites.other.home.front_shiny
            : pokemon.sprites.other.home.front_default }
          alt={ pokemon.name }
        />
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
