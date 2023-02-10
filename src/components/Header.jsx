import React, { useState, useRef } from 'react';
import logoPokemon from '../assets/images/logo-pokemon.png';
import './Header.css';
import musicaPokemon from '../assets/audio/pokemon-abertura.mp3';

function Header() {
  const volumeInicial = 0.2;
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(volumeInicial);

  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = volumeInicial;
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = volume;
  };

  return (
    <nav className="header-container">
      <div className="div-vazia" />
      <div className="div-logo-pokemon">
        <a href="/">
          <img src={ logoPokemon } alt="Logo Pokemon" className="logo-pokemon" />
        </a>
      </div>

      <div className="div-audio">
        <audio
          ref={ audioRef }
          controls={ false }
          volume={ volume }
          autoPlay={ false }
        >
          <source src={ musicaPokemon } type="audio/mpeg" />
          <track kind="captions" src="" default />
        </audio>
        <div className="audio-controls">
          <button
            type="button"
            className="btn-audio-control"
            onClick={ togglePlay }
          >
            {isPlaying ? '⏸️' : '▶️'}

          </button>
          <input
            className="volume-control"
            type="range"
            min={ 0 }
            max={ 1 }
            step={ 0.01 }
            value={ volume }
            onChange={ handleVolumeChange }
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
