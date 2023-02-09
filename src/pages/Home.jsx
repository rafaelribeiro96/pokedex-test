import React from 'react';
import Navbar from '../components/Navbar';
import Pokedex from '../components/Pokedex';
import Searchbar from '../components/Searchbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Searchbar />
      <Pokedex />
    </div>
  );
}

export default Home;
