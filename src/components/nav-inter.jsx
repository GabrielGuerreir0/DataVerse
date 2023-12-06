import React from 'react';
import './nav-inter.css'; // Importa o estilo CSS para a barra de navegação
import logo from './imgs/logo_site.png'; // Importa a imagem do logo do site

function Navbar() {
  return (
    <nav className='nav'> {/* Cria um componente de navegação com a classe 'nav' */}
      <div className="marca"> {/* Cria um contêiner para a marca */}
        <img src={logo} className='marca-image' alt="Logo" /> {/* Exibe a imagem do logo com a classe 'marca-image' */}
        <a href='#' className='nav__brand'>DataVerse</a> {/* Cria um link com o texto 'DataVerse' e a classe 'nav__brand' */}
      </div>
    </nav>
  );
}

export default Navbar; // Exporta o componente Navbar para ser utilizado em outros lugares
