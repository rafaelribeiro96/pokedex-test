const limitPokemons = 30;
const erroNumber200 = 200;
/* const pokemonByPage = 30; */

export const searchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (response.status === erroNumber200) {
    return response.json();
  }
  return null;
};

export const searchPokemonForName = async (searchTerm) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limitPokemons}`);
  if (response.status === erroNumber200) {
    const pokemons = await response.json();
    const foundPokemon = pokemons.results
      .find((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()));
    if (foundPokemon) {
      const pokemonResponse = await fetch(foundPokemon.url);
      return pokemonResponse.json();
    }
  }
  return null;
};

export const searchPokemonByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (response.status === erroNumber200) {
    const data = await response.json();
    return {
      results: (data.pokemon.map((entry) => entry.pokemon)),
      count: data.pokemon.length,
    };
  }
  return null;
};

export const getPokemons = async (limit = limitPokemons, offset = 0) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return response.json();
};

export const getPokemonData = async (url) => {
  const response = await fetch(url);
  return response.json();
};
