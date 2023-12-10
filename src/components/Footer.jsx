import React from 'react';
import './Footer.css'; // Importa o estilo CSS para o footer
import whatsapp from './imgs/whatsapp.png'; // Importa a imagem do ícone do WhatsApp
import github from './imgs/github.png'; // Importa a imagem do ícone do GitHub
import instagram from './imgs/instagram.png'; // Importa a imagem do ícone do Instagram
import logo from './imgs/logo_site.png'; // Importa a imagem do logo do site
import mail from './imgs/carta.png'; // Importa a imagem do ícone do e-mail

const Footer = () => {
  return (
    <footer className="footer" id="rodape"> {/* Cria o componente do footer */}
      <div className="footer-content"> {/* Conteúdo do footer */}
        <div className="logo-container"> {/* Container para o logo */}
          <img className="logo" src={logo} alt="Logo" /> {/* Exibe o logo do site */}
          <p>DATAVERSE</p> {/* Texto "DATAVERSE" */}
          <hr className="separator" /> {/* Linha separadora */}
        </div>
        <div className="icons-container"> {/* Container para os ícones */}
          <nav>
            <ul>
              <li><a href="#"><img className="icon" src={whatsapp} alt="WhatsApp" /></a></li> {/* Ícone do WhatsApp */}
              <li><a href="#"><img className="icon" src={github} alt="GitHub" /></a></li> {/* Ícone do GitHub */}
              <li><a href="#"><img className="icon" src={instagram} alt="Instagram" /></a></li> {/* Ícone do Instagram */}
            </ul>
          </nav>
          <hr className="separator" /> {/* Linha separadora */}
        </div>
        <hr className="separator" /> {/* Linha separadora */}
        <div className="mail-container"> {/* Container para o e-mail */}
          <a>
            <img src={mail} alt="Mail" /> {/* Ícone do e-mail */}
            dataverse4@gmail.com {/* Endereço de e-mail */}
          </a>
        </div>
        <div className="direitos">
          <p>© {new Date().getFullYear()} DataVerse - Todos os direitos reservados</p> {/* Direitos autorais */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporta o componente Footer para ser utilizado em outros lugares
