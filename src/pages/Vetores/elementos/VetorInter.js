import React, { useState, useEffect } from 'react';
import './VetorInter.css';

const VectorInter = () => {
  const [vetor, setVetor] = useState([]);
  const [animar, setAnimar] = useState(false);
  const [indiceHover, setIndiceHover] = useState(-1);
  const [resultadoBusca, setResultadoBusca] = useState('');

  const adicionarAoVetor = () => {
    const valorAleatorio = Math.floor(Math.random() * 100) + 1;
    setVetor([...vetor, valorAleatorio]);
    setAnimar(true);
  };

  const removerDoVetor = () => {
    if (vetor.length > 0) {
      const novoVetor = [...vetor];
      novoVetor.pop();
      setVetor(novoVetor);
    }
  };

  const adicionarNumeroEspecifico = (numero) => {
    if (numero !== '') {
      setVetor([...vetor, parseInt(numero)]);
      setAnimar(true);
    }
  };

  const removerNumeroEspecifico = (numero) => {
    if (vetor.includes(parseInt(numero))) {
      const novoVetor = vetor.filter(item => item !== parseInt(numero));
      setVetor(novoVetor);
    }
  };

  const adicionarPorIndice = (indice, valor) => {
    if (!isNaN(indice) && indice >= 0 && indice <= vetor.length) {
      const novoVetor = [...vetor.slice(0, indice), valor, ...vetor.slice(indice)];
      setVetor(novoVetor);
      setAnimar(true);
    }
  };

  const removerPorIndice = (indice) => {
    if (!isNaN(indice) && indice >= 0 && indice < vetor.length) {
      const novoVetor = vetor.filter((item, index) => index !== indice);
      setVetor(novoVetor);
    }
  };

  const buscarNumeroEspecifico = (numero) => {
    if (numero !== '') {
      const resultado = vetor.includes(parseInt(numero));
      setResultadoBusca(resultado ? `Número ${numero} encontrado no vetor.` : `Número ${numero} não encontrado no vetor.`);
      alert(resultado ? `Número ${numero} encontrado no vetor.` : `Número ${numero} não encontrado no vetor.`);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (animar) {
      const timer = setTimeout(() => {
        setAnimar(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animar]);

  return (
    <div>
      <div className='caixaDeTexto'>
        {resultadoBusca && <p>{resultadoBusca}</p>}
        <div style={{ display: 'flex', marginLeft: '20px' }}>
          {vetor.map((item, index) => (
            <span
              key={index}
              className="square"
              style={{
                transform: animar ? 'translateY(-20px)' : 'none',
              }}
              onMouseEnter={() => setIndiceHover(index)}
              onMouseLeave={() => setIndiceHover(-1)}
            >
              {item}
              {indiceHover === index && <span className="hover-indicator">{index}</span>}
            </span>
          ))}
        </div>
      </div>

      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
            <div className="container">
              <button onClick={adicionarAoVetor} className="button">Adicionar</button>
              <button onClick={removerDoVetor} className="button">Remover</button>

              <button onClick={() => {
                const numero = prompt("Digite um número específico para adicionar:");
                adicionarNumeroEspecifico(numero);
              }} className="button">Adicionar Número Específico</button>

              <button onClick={() => {
                const numero = prompt("Digite um número específico para remover:");
                removerNumeroEspecifico(numero);
              }} className="button">Remover Número Específico</button>

              <button onClick={() => {
                const numero = prompt("Digite um número específico para buscar:");
                buscarNumeroEspecifico(numero);
              }} className="button">Buscar Número Específico</button>

              <button onClick={() => {
                const indice = parseInt(prompt("Digite o índice onde deseja adicionar o valor:"));
                const valor = parseInt(prompt("Digite o valor a ser adicionado:"));
                adicionarPorIndice(indice, valor);
              }} className="button">Adicionar por Índice</button>

              <button onClick={() => {
                const indice = parseInt(prompt("Digite o índice do valor a ser removido:"));
                removerPorIndice(indice);
              }} className="button">Remover por Índice</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VectorInter;
