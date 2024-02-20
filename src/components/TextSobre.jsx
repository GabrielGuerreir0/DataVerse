import React from 'react';
import './TextSobre.css';
import logo from './imgs/logo_site.png';

function TextSobre(){
    return(
        <div className="TextApresentacao">
      <div className="imagem">
        <img src={logo} alt="logo_dataverse" />
      </div>
      <div className="titulo">
        <h2>DATAVERSE</h2>
      </div>
      <div className="text">
                <p>Dataverse foi meticulosamente concebido como uma plataforma dedicada à exploração dinâmica e interativa das estruturas fundamentais de dados. Nosso objetivo principal é proporcionar aos usuários uma compreensão mais aprofundada e envolvente dos conceitos essenciais da ciência da computação. Nossa abrangente plataforma oferece uma variedade diversificada de estruturas de dados, incluindo, mas não se limitando a, vetores, listas, pilhas, filas, heaps, árvores, hash tables e grafos.</p>
                <p>Por meio de uma abordagem didática e interativa, Dataverse permite que os usuários explorem e experimentem essas estruturas de dados de maneira prática e educativa. Oferecemos uma série de ferramentas e recursos que permitem aos usuários não apenas compreender os conceitos teóricos por trás dessas estruturas, mas também interagir com elas em tempo real.</p>
                <p>Cada estrutura de dados é cuidadosamente apresentada em sua forma mais básica e avançada, com explicações claras e exemplos práticos para ajudar na compreensão. Os usuários podem não apenas visualizar, mas também manipular e testar essas estruturas, permitindo uma aprendizagem hands-on e uma imersão mais completa nos princípios fundamentais da ciência da computação.</p>
                <p>Além disso, fornecemos recursos adicionais, como visualizações gráficas dinâmicas, exercícios interativos e exemplos de código, para aprimorar ainda mais a compreensão e a aplicação prática desses conceitos. O Dataverse se destaca como um ambiente educacional e de exploração onde estudantes, entusiastas e profissionais da área podem mergulhar profundamente no mundo das estruturas de dados, construindo um conhecimento sólido e prático para suas jornadas na computação.</p>
            </div>
        </div>
    );
}
export default TextSobre;