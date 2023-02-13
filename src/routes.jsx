import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="pokemon/:pokemonId" element={ <PokemonDetails /> } />
      <Route path="*" element="404 - Not found" />
    </Routes>
  );
}
