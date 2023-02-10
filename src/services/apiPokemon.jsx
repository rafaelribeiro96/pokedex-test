const limitPokemons = 120;
const erroNumber200 = 200;

export const searchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (response.status === erroNumber200) {
    return response.json();
  }
  return null;
};

export const getPokemons = async (limit = limitPokemons, offset = 0) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then((response) => response.json())
  .then((data) => data);

export const getPokemonData = async (url) => fetch(url)
  .then((response) => response.json())
  .then((data) => data);
