import React from 'react';
import logoPokemon from '../assets/images/logo-pokemon.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={ logoPokemon } alt="Logo Pokemon" className="logo-pokemon" />
      </div>
    </nav>
  );
}

export default Navbar;
