/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchPokemon(pokemonId);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Aqui você pode ver mais informações sobre o Pokémon escolhido.</h2>
      <h1>{pokemon.name}</h1>
      <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
      <img src={ pokemon.sprites.back_default } alt={ pokemon.name } />
      <p>
        Pokemon ID:
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
  );
}

export default PokemonDetails;
