import React from 'react';
import imageLoading from '../assets/images/pikachu-loading.gif';
import './Loading.css';

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
