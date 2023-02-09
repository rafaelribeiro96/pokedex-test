import React from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Searchbar />
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
