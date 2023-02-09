const searchPokemon = async (pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => data);

export default searchPokemon;
