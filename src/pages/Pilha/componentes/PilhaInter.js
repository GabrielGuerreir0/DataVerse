import React, { useState } from 'react';
import './PilhaInter.css'; // Importa estilos CSS

const PilhaInter = () => {
  const [stack, setStack] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pushElement = () => {
    if (stack.length < 10) {
      const valueToAdd = prompt('Digite o valor que deseja adicionar:');
      if (valueToAdd !== null) {
        setStack(prevStack => [valueToAdd, ...prevStack]); // Adiciona no início da lista (topo da pilha)
      }
    } else {
      alert('A pilha está cheia!');
    }
  };
  
  
  const popElement = () => {
    if (stack.length > 0) {
      setStack(prevStack => {
        const updatedStack = [...prevStack];
        updatedStack.shift(); // Remove o primeiro elemento da lista (topo visualmente)
        return updatedStack;
      });
    } else {
      alert('A pilha está vazia!');
    }
  };
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const generateRandomList = () => {
    const randomList = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    setStack(randomList.reverse()); // Inverte a lista para seguir o princípio LIFO
  };

  const searchValueInStack = () => {
    const searchValue = prompt('Digite o valor que deseja buscar:');
    if (searchValue !== null) {
      const index = stack.findIndex(element => parseInt(element) === parseInt(searchValue));
      if (index !== -1) {
        alert(`O valor ${searchValue} foi encontrado na posição ${stack.length - index} da pilha.`);
      } else {
        alert(`O valor ${searchValue} não foi encontrado na pilha.`);
      }
    }
  };

  const clearStack = () => {
    setStack([]);
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <div className='stack-container'>
          <div className='stack'>
            {stack.slice().reverse().map((element, index) => ( // Inverter a pilha antes de mapear
              <div key={index} className='stack-element'>
                {element}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
            <div className="container">
              <button className='butaoInteracao' onClick={pushElement}>
                Adicionar Valor
              </button>
              <button className='butaoInteracao' onClick={popElement}>
                Remover Valor
              </button>
              <button className='butaoInteracao' onClick={generateRandomList}>
                Gerar Pilha Aleatória
              </button>
              <button className='butaoInteracao' onClick={searchValueInStack}>
                Buscar Valor na Pilha
              </button>
              <button className='butaoInteracao' onClick={clearStack}>
                Limpar Pilha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};  

export default PilhaInter;
