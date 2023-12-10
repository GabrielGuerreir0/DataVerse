// Importa o React para utilização de componentes
import React from "react";

// Importa o arquivo de estilos CSS específico para as estruturas
import './Estruturas.css';

// Importa as imagens das estruturas de dados
import pilha from './imgs/pilha-de-papeis-quadrados.png';
import arvore from './imgs/arvore (1).png';
import hash_table from './imgs/tabela.png';
import fila from './imgs/fila (1).png';
import vetor from './imgs/vetores.png';
import diagrama from './imgs/diagrama.png';
import grafo from './imgs/conectividade.png';
import lista from './imgs/lista-de-afazeres.png';

// Componente Funcionalidad que renderiza as estruturas de dados
const Funcionalidad = () => {
    return (
        <div className="Funcionalidades-container" id="estruturas">
            <br />

            {/* Título para as estruturas de dados */}
            <div className="title-box">
                <h3 className="tit">ESTRUTURAS DE DADOS</h3>
            </div>

            {/* Contêiner para as opções de estruturas */}
            <div className="options-container">
                {/* Linha 1 com opções */}
                <div className="option-row">
                    {/* Opção de Pilha */}
                    <div className="option-box">
                        <a href="#">
                            <img src={pilha} alt="Pilha" />
                        </a>
                        <p>Pilha</p>
                    </div>

                    {/* Opção de Árvore */}
                    <div className="option-box">
                        <a href="#">
                            <img src={arvore} alt="Árvore" />
                        </a>
                        <p>Árvore</p>
                    </div>

                    {/* Opção de Tabela Hash */}
                    <div className="option-box">
                        <a href="#">
                            <img src={hash_table} alt="Tabela Hash" />
                        </a>
                        <p>Tabela Hash</p>
                    </div>

                    {/* Opção de Fila */}
                    <div className="option-box">
                        <a href="#">
                            <img src={fila} alt="Fila" />
                        </a>
                        <p>Fila</p>
                    </div>
                </div>

                {/* Linha 2 com opções */}
                <div className="option-row">
                    {/* Opção de Vetor */}
                    <div className="option-box">
                        <a href="#">
                            <img src={vetor} alt="Vetor" />
                        </a>
                        <p>Vetor</p>
                    </div>

                    {/* Opção de Diagrama */}
                    <div className="option-box">
                        <a href="#">
                            <img src={diagrama} alt="Diagrama" />
                        </a>
                        <p>Heaps</p>
                    </div>

                    {/* Opção de Grafo */}
                    <div className="option-box">
                        <a href="#">
                            <img src={grafo} alt="Grafo" />
                        </a>
                        <p>Grafo</p>
                    </div>

                    {/* Opção de Lista */}
                    <div className="option-box">
                        <a href="#">
                            <img src={lista} alt="Lista de Afazeres" />
                        </a>
                        <p>Lista</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

// Exporta o componente Funcionalidad para uso em outros componentes ou arquivos
export default Funcionalidad;
