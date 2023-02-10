import React from 'react';
import './Footer.css';
import imageLoading from '../assets/images/pikachu-loading.gif';

function Footer() {
  return (
    <div className="loading-container">
      <img
        className="img-loading"
        src={ imageLoading }
        alt="imagem pikachu correndo loading"
      />
    </div>
  );
}

export default Footer;
