import React, { useState } from 'react';
import './Filas.css'; // Importando o arquivo CSS para estilização

const Fila = () => {
  const [fila, setFila] = useState([]);
  const [buscaValor, setBuscaValor] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const enqueue = (value) => {
    setFila((prevFila) => [...prevFila, value]);
  };

  const dequeue = () => {
    if (fila.length > 0) {
      setFila((prevFila) => {
        const updatedFila = [...prevFila];
        updatedFila.shift();
        return updatedFila;
      });
    } else {
      alert('A fila está vazia!');
    }
  };

  const handleAddClick = () => {
    const value = prompt('Digite o valor que deseja adicionar:');
    if (value !== null && value !== '') {
      enqueue(value);
    }
  };

  const handleAddRandomClick = () => {
    const value = Math.floor(Math.random() * 100); // Valor aleatório entre 0 e 99
    enqueue(value);
  };

  const handleRemoveClick = () => {
    dequeue();
  };

  const handleBuscarClick = () => {
    const valor = prompt('Digite o valor para buscar:');
    setBuscaValor(valor);
    let foundIndex = -1;
    for (let i = 0; i < fila.length; i++) {
      if (fila[i].toString() === valor) { // Convertendo para string antes de comparar
        foundIndex = i;
        break;
      }
    }
    if (foundIndex !== -1) {
      alert(`O valor ${valor} está na posição ${foundIndex + 1} da fila.`);
    } else {
      alert('Valor não encontrado na fila.');
    }
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <div className='fila'>
          {fila.map((item, index) => (
            <div 
              key={index} 
              className={`fila-item ${hoverIndex === index ? 'hovered' : ''}`} 
              onMouseOver={() => setHoverIndex(index)} 
              onMouseOut={() => setHoverIndex(null)}
            >
              {hoverIndex === index ? `${index + 1}º` : item}
            </div>
          ))}
        </div>
      </div>
      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
            <button className="butaoInteracao" onClick={handleBuscarClick}>Buscar</button>
            <button className="butaoInteracao" onClick={handleAddClick}>Adicionar Item</button>
            <button className="butaoInteracao" onClick={handleRemoveClick}>Remover Item</button>
            <button className="butaoInteracao" onClick={handleAddRandomClick}>Adicionar Aleatório</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fila;
