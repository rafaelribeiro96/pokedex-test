const limitPokemons = 30;
const erroNumber200 = 200;

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
    const filteredPokemons = pokemons.results
      .filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()));
    if (filteredPokemons.length > 0) {
      const pokemonData = await Promise.all(
        filteredPokemons.map((pokemon) => fetch(pokemon.url)
          .then((result) => result.json())
          .then((data) => data)),
      );
      return pokemonData;
    }
  }
  return null;
};

export const searchPokemonByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (response.status === erroNumber200) {
    const data = await response.json();
    return data.pokemon.map((p) => p.pokemon);
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
