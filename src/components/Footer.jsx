import React from 'react';
import './Footer.css';
import imageGit from '../assets/images/github.svg';
import imageLinkedin from '../assets/images/linkedin.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="div-vazia-footer" />
      <div className="text-footer">
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/rafaelfeliperibeiro/" target="blank">Rafael Ribeiro</a>
      </div>
      <div className="icons-footer">
        <a href="https://github.com/rafaelribeiro96/" target="blank">
          <img
            className="icon-footer icon-git"
            src={ imageGit }
            alt="imagem git svg"
          />
        </a>
        <a href="https://www.linkedin.com/in/rafaelfeliperibeiro/" target="blank">
          <img
            className="icon-footer icon-lkd"
            src={ imageLinkedin }
            alt="imagem linkedin svg"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
