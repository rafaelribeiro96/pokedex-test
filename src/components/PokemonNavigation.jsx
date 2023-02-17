/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonNavigation.css';

function PokemonNavigation({ pokemonId }) {
  const navigate = useNavigate();
  const [backPokemon, setBackPokemon] = useState(null);
  const [backPokemonImageUrl, setBackPokemonImageUrl] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);
  const [nextPokemonImageUrl, setNextPokemonImageUrl] = useState(null);

  const lastPokemonId = 10263;
  const firstPokemonId = 1;

  useEffect(() => {
    let backPokemonId;
    if (pokemonId === '10001') {
      backPokemonId = '1008';
    } else if (pokemonId > 1) {
      backPokemonId = parseInt(pokemonId, 10) - 1;
    } else {
      backPokemonId = lastPokemonId;
    }

    const fetchBackPokemon = async () => {
      const data = await searchPokemon(backPokemonId);
      if (data) {
        setBackPokemon(data);
        const imageUrl = data.sprites.other['official-artwork'].front_default;
        setBackPokemonImageUrl(imageUrl);
      }
    };

    fetchBackPokemon();
  }, [pokemonId]);

  useEffect(() => {
    let nextPokemonId;
    if (pokemonId === '1008') {
      nextPokemonId = '10001';
    } else if (pokemonId < lastPokemonId) {
      nextPokemonId = parseInt(pokemonId, 10) + 1;
    } else {
      nextPokemonId = firstPokemonId;
    }

    const fetchNextPokemon = async () => {
      const data = await searchPokemon(nextPokemonId);
      if (data) {
        setNextPokemon(data);
        const imageUrl = data.sprites.other['official-artwork'].front_default;
        setNextPokemonImageUrl(imageUrl);
      }
    };

    fetchNextPokemon();
  }, [pokemonId]);

  return (
    <nav className="nav-pokemon-details">

      <button
        onClick={ () => {
          if (pokemonId === '10001') {
            navigate('/pokemon/1008');
          } else if (pokemonId > firstPokemonId) {
            navigate(`/pokemon/${parseInt(pokemonId, 10) - 1}`);
          } else {
            navigate(`/pokemon/${lastPokemonId}`);
          }
        } }
        type="button"
        className="btn-next-back"
      >
        {backPokemonImageUrl && (
          <div className="next-pokemon-img">
            <img src={ backPokemonImageUrl } alt={ backPokemon.name } />
          </div>
        )}
      </button>

      <button
        onClick={ () => navigate('/') }
        type="button"
        className="btn-back"
      >
        VOLTAR PARA A POKEDEX
      </button>

      <button
        onClick={ () => {
          if (pokemonId === '1008') {
            navigate('/pokemon/10001');
          } else if (pokemonId < lastPokemonId) {
            navigate(`/pokemon/${parseInt(pokemonId, 10) + 1}`);
          } else {
            navigate(`/pokemon/${firstPokemonId}`);
          }
        } }
        type="button"
        className="btn-next-back"
      >
        {nextPokemonImageUrl && (
          <div className="next-pokemon-img">
            <img src={ nextPokemonImageUrl } alt={ nextPokemon.name } />
          </div>
        )}
      </button>

    </nav>
  );
}

export default PokemonNavigation;
