import React from "react";
import './Apresentacao.css'; // Importa o estilo CSS para a apresentação
import logomarca from './imgs/logo_site.png'; // Importa a imagem da logomarca do site
import { Link } from "react-router-dom";

const Apresentacao = () => {
  return (
    <div className="Apresentacao-container"> {/* Container principal da apresentação */}
      <div id="apresentaca-text"> {/* Div para o texto de apresentação */}
        <h3 className="title">DATAVERSE</h3> {/* Título "DATAVERSE" */}
        <p class="texto">Nosso projeto tem como objetivo uma iniciativa de criação de site interativo e informativo<br/> sobre as estruturas de dados existentes em decorrência das aulas de estruturas de dados</p> {/* Parágrafo explicativo sobre o projeto */}
        <Link to='/Sobre'><button className="saiba-mais">saiba mais</button></Link> {/* Botão "saiba mais" */}
      </div>
      <div>
        <div id="image-apresentacao"> {/* Div para a imagem de apresentação */}
          <img src={logomarca} /> {/* Exibe a imagem da logomarca */}
        </div>
      </div>
    </div>
  );
};

export default Apresentacao; // Exporta o componente Apresentacao para ser utilizado em outros lugares
