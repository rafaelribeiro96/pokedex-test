/* eslint-disable react/prop-types */
import React from 'react';
import './Shiny.css';

function Shiny(props) {
  const { shiny, setShiny } = props;

  return (
    <div className="checkbox-container">
      <label htmlFor="shiny" className="shiny-version">
        Versão Shiny
        <input
          type="checkbox"
          id="shiny"
          className="shiny-checkbox"
          checked={ shiny }
          onChange={ () => setShiny(!shiny) }
        />
      </label>
    </div>
  );
}

export default Shiny;
