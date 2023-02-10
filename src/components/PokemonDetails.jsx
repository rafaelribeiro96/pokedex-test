/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonDetails.css';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
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
    <div className="container-pokemon-details">
      <h2>Aqui você pode ver mais informações sobre o Pokémon escolhido.</h2>
      <button
        onClick={ () => navigate('/') }
        type="button"
        className="btn-back"
      >
        Voltar para a pokedex

      </button>
      <h1 className="title-pokemon-details">{pokemon.name}</h1>
      <img
        className="img-front-details"
        src={ pokemon.sprites.front_default }
        alt={ pokemon.name }
      />
      <div className="pokemons-other-details">
        <p>
          Pokemon #:
          {' '}
          {pokemon.id}
        </p>
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
    </div>
  );
}

export default PokemonDetails;
