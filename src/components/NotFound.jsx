import React from 'react';
import './NotFound.css';
import imageNotFound from '../assets/images/pikachu-notfound.gif';

function Footer() {
  return (
    <div className="not-found-pokemon">
      <div class-name="not-found-text">
        <p>
          Este Pokemón não existe!
          Digite novamente o nome do seu Pokémon!
        </p>
      </div>
      <a href="/">
        <button type="button" className="button-not-found">Volte a tela inicial</button>
      </a>

      <img
        className="img-not-found"
        src={ imageNotFound }
        alt="imagem pikachu chorando notfound"
      />
    </div>

  );
}

export default Footer;
