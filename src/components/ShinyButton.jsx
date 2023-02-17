import React from 'react';
import PropTypes from 'prop-types';
import './ShinyButton.css';

function ShinyButton(props) {
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

export default ShinyButton;

ShinyButton.propTypes = {
  shiny: PropTypes.bool.isRequired,
  setShiny: PropTypes.func.isRequired,
};
