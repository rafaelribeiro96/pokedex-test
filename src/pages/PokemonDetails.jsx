/* eslint-disable max-lines */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { searchPokemon } from '../services/apiPokemon';
import './PokemonDetails.css';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

const TEN = 10;
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
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [shiny, setShiny] = useState(false);
  const [nextPokemon, setNextPokemon] = useState(null);
  const [nextPokemonImageUrl, setNextPokemonImageUrl] = useState(null);
  const [backPokemon, setBackPokemon] = useState(null);
  const [backPokemonImageUrl, setBackPokemonImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchPokemon(pokemonId);
      console.log(pokemonId);
      setPokemon(data);
    };
    fetchData();
  }, [pokemonId]);

  const lastPokemonId = 10263;
  const firstPokemonId = 1;

  let backPokemonId;
  if (pokemonId === '10001') {
    backPokemonId = '1008';
  } else if (pokemonId > 1) {
    backPokemonId = parseInt(pokemonId, 10) - 1;
  } else {
    backPokemonId = lastPokemonId;
  }

  let nextPokemonId;
  if (pokemonId === '1008') {
    nextPokemonId = '10001';
  } else if (pokemonId < lastPokemonId) {
    nextPokemonId = parseInt(pokemonId, 10) + 1;
  } else {
    nextPokemonId = firstPokemonId;
  }

  useEffect(() => {
    const fetchBackPokemon = async () => {
      const data = await searchPokemon(backPokemonId);
      if (data) {
        setBackPokemon(data);
        const imageUrl = data.sprites.other['official-artwork'].front_default;
        setBackPokemonImageUrl(imageUrl);
      }
    };

    fetchBackPokemon();
  }, [backPokemonId]);

  useEffect(() => {
    const fetchNextPokemon = async () => {
      const data = await searchPokemon(nextPokemonId);
      if (data) {
        setNextPokemon(data);
        const imageUrl = data.sprites.other['official-artwork'].front_default;
        setNextPokemonImageUrl(imageUrl);
      }
    };

    fetchNextPokemon();
  }, [nextPokemonId]);

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
          <div className="type-pokemon-details" style={ { background } }>
            Tipo:
            {' '}
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </div>
          <p>
            Peso:
            {' '}
            {pokemon.weight / TEN }
            {' '}
            kg
          </p>
          <p>
            Altura:
            {' '}
            {pokemon.height / TEN }
            {' '}
            m
          </p>
          <p>
            Habilidades:
            {' '}
            {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
          </p>
        </div>
        <img
          className="img-details"
          src={ shiny ? imgPokemonShiny : (imgDreamWorld || imgOfficialNetwork) }
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
      <div className="div-sprites">
        <div>
          {Object.keys(pokemon.sprites).map((sprite) => {
            const imageUrl = pokemon.sprites[sprite];
            if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
              return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
            }
            return null;
          })}
          {Object.keys(pokemon.sprites.other).map((sprite) => {
            const imageUrl = pokemon.sprites.other[sprite].front_default;
            if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
              return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
            }
            return null;
          })}
          {Object.keys(pokemon.sprites.other).map((sprite) => {
            const imageUrl = pokemon.sprites.other[sprite].front_shiny;
            if (typeof imageUrl === 'string' && imageUrl.trim() !== '') {
              return <img key={ sprite } src={ imageUrl } alt={ sprite } />;
            }
            return null;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PokemonDetails;
