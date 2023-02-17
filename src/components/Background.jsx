import React from 'react';
import PropTypes from 'prop-types';

const typeColors = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  bug: '#A8B820',
  normal: '#A8A878',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  fairy: '#EE99AC',
  flying: '#d7cef0',
  fighting: '#C03028',
  psychic: '#F85888',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  ice: '#98D8D8',
};

function Background(props) {
  const { types } = props;
  const { propsClass } = props;
  const { children } = props;
  let background;

  if (types.length === 1) {
    background = typeColors[types[0].type.name];
  } else if (types.length === 2) {
    const type1 = typeColors[types[0].type.name];
    const type2 = typeColors[types[1].type.name];
    background = `linear-gradient(to right, ${type1} 60%, ${type2})`;
  }

  return (
    <div style={ { background } } className={ propsClass }>
      {children}
    </div>
  );
}

export default Background;

Background.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  propsClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
