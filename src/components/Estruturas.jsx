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
import { Link } from "react-router-dom";

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
                        <Link to="/Pilha#inicio">
                            <img src={pilha} alt="Pilha" />
                        </Link>
                        <p>Pilha</p>
                    </div>

                    {/* Opção de Árvore */}
                    <div className="option-box">
                        <Link to="/Arvore#inicio">
                            <img src={arvore} alt="Árvore" />
                        </Link>
                        <p>Árvore</p>
                    </div>

                    {/* Opção de Tabela Hash */}
                    <div className="option-box">
                        <Link to='/HashTable#inicio'>
                            <img src={hash_table} alt="Tabela Hash" />
                        </Link>
                        <p>Tabela Hash</p>
                    </div>

                    {/* Opção de Fila */}
                    <div className="option-box">
                        <Link to="/Fila#inicio">
                            <img src={fila} alt="Fila" />
                        </Link>
                        <p>Fila</p>
                    </div>
                </div>

                {/* Linha 2 com opções */}
                <div className="option-row">
                    {/* Opção de Vetor */}
                    <div className="option-box">
                        <Link to="/Vetores#inicio">
                            <img src={vetor} alt="Vetor" />
                        </Link>
                        <p>Vetor</p>
                    </div>

                    {/* Opção de Diagrama */}
                    <div className="option-box">
                        <Link to="/Heaps#inicio">
                            <img src={diagrama} alt="Diagrama" />
                        </Link>
                        <p>Heaps</p>
                    </div>

                    {/* Opção de Grafo */}
                    <div className="option-box">
                        <Link to="/Grafo#inicio">
                            <img src={grafo} alt="Grafo" />
                        </Link>
                        <p>Grafo</p>
                    </div>

                    {/* Opção de Lista */}
                    <div className="option-box">
                        <Link to="/Lista#inicio">
                            <img src={lista} alt="Lista de Afazeres" />
                        </Link>
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
