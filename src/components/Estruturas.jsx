import React from "react";
import './Estruturas.css';
import pilha from './imgs/pilha-de-papeis-quadrados.png';
import arvore from './imgs/arvore (1).png';
import hash_table from './imgs/tabela.png';
import fila from './imgs/fila (1).png';
import vetor from './imgs/vetores.png';
import diagrama from './imgs/diagrama.png';
import grafo from './imgs/conectividade.png';
import lista from './imgs/lista-de-afazeres.png';

const Funcionalidad = () => {
    return (
        <div className="Funcionalidades-container">
            <br />
            <div className="title-box">
                <h3 className="tit">ESTRUTURAS DE DADOS</h3>
            </div>
            <div className="options-container">
                <div className="option-row">
                    <div className="option-box">
                        <a href="#">
                            <img src={pilha} alt="Pilha" />
                        </a>
                        <p>Pilha</p>
                    </div>
                    <div className="option-box">
                        <a href="#">
                            <img src={arvore} alt="Árvore" />
                        </a>
                        <p>Árvore</p>
                    </div>
                    <div className="option-box">
                        <a href="#">
                            <img src={hash_table} alt="Tabela Hash" />
                        </a>
                        <p>Tabela Hash</p>
                    </div>
                    <div className="option-box">
                        <a href="#">
                            <img src={fila} alt="Fila" />
                        </a>
                        <p>Fila</p>
                    </div>
                </div>
                <div className="option-row">
                    <div className="option-box">
                        <a href="#">
                            <img src={vetor} alt="Vetor" />
                        </a>
                        <p>Vetor</p>
                    </div>
                    <div className="option-box">
                        <a href="#">
                            <img src={diagrama} alt="Diagrama" />
                        </a>
                        <p>Heaps</p>
                    </div>
                    <div className="option-box">
                        <a href="#">
                            <img src={grafo} alt="Grafo" />
                        </a>
                        <p>Grafo</p>
                    </div>
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

export default Funcionalidad;
