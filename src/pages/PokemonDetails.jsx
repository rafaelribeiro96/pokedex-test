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

  const lastPokemonId = 10263;

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

  const imgDreamWorld = pokemon.sprites.other.dream_world.front_default;
  const imgOfficialNetwork = pokemon.sprites.other['official-artwork'].front_default;
  const imgPokemonShiny = pokemon.sprites.other.home.front_shiny;

  return (
    <div className="container-pokemon-details" style={ { backgroundColor } }>
      <nav className="nav-pokemon-details">
        <button
          onClick={ () => {
            if (pokemonId === '10001') {
              navigate('/pokemon/1008');
            } else if (pokemonId > 1) {
              navigate(`/pokemon/${parseInt(pokemonId, 10) - 1}`);
            } else {
              navigate(`/pokemon/${lastPokemonId}`);
            }
          } }
          type="button"
          className="btn-next-back"
        >
          Pokémon anterior
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
              navigate('/pokemon/1');
            }
          } }
          type="button"
          className="btn-next-back"
        >
          Pokémon seguinte
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
          <p>
            Tipo:
            {' '}
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </p>
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
        <h1>Outras versões:</h1>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PokemonDetails;
