const limitPokemons = 30;

export const searchPokemon = async (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => data);

export const getPokemons = async (limit = limitPokemons, offset = 0) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then((response) => response.json())
  .then((data) => data);

export const getPokemonData = async (url) => fetch(url)
  .then((response) => response.json())
  .then((data) => data);
