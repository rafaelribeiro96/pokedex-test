import React from 'react';
import './App.css';
import PokemonProvider from './Context/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <h1>Olá mundo</h1>
      </div>
    </PokemonProvider>
  );
}

export default App;
