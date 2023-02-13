const limitPokemons = 30;

export const getPokemons = async (limit = limitPokemons, offset = 0) => fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then((response) => response.json())
  .then((data) => data);

export const getPokemonData = async (url) => fetch(url)
  .then((response) => response.json())
  .then((data) => data);

export async function searchPokemon(pokemon) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=964');
    const data = await response.json();
    const result = data.results.find((p) => p.name.includes(pokemon.toLowerCase()));
    if (!result) {
      return undefined;
    }
    const pokemonData = await getPokemonData(result.url);
    return pokemonData;
  } catch (error) {
    console.log('searchPokemon error: ', error);
  }
}
