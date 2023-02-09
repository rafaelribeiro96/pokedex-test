const limitPokemons = 50;

const searchPokemon = async (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => data);

const getPokemons = async (limit = limitPokemons, offset = 0) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then((response) => response.json())
  .then((data) => data);

export default { searchPokemon, getPokemons };
