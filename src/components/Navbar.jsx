import React from 'react';
import logoPokemon from '../assets/images/logo-pokemon.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <a href="/">
        {' '}
        <img src={ logoPokemon } alt="Logo Pokemon" className="logo-pokemon" />
      </a>

    </nav>
  );
}

export default Navbar;
