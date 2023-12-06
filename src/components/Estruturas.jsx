import React from "react";
import './Estruturas.css';
import pilha from './imgs/pilha-de-papeis-quadrados.png';

const Funcionalidad = () => {
    return (
        <div className="Funcionalidades-container">
            <div className="area-interativa">
                <div className="box">
                    <a>
                        <img src={pilha} />

                    </a>
                </div>
                <a>pilha</a>
            </div>
        </div>
        );
};

export default Funcionalidad;