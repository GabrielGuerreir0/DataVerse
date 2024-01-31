import React, { useState, useEffect } from 'react';
import './listaInter.css';

const ListOperationsWithToggleMenu = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const generateList = () => {
    const randomList = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setList(randomList);
    setSelectedOperation(null);
  };

  const generateSpecificList = () => {
    const userInput = prompt('Digite até 10 valores separados por vírgula (ex: 1, 2, 3):');

    if (userInput !== null) {
      const specificList = userInput
        .split(',')
        .map((value) => parseInt(value.trim(), 10))
        .filter((value) => !isNaN(value));

      setList(specificList.slice(0, 10));
      setSelectedOperation(null);
    }
  };

  const clearList = () => {
    setList([]);
    setIsSearching(false);
    setHighlightIndex(-1);
    setSelectedOperation(null);
  };

  const insertValue = (position) => {
    const value = prompt('Digite o valor para inserir:');
    if (value) {
      let updatedList;
      switch (position) {
        case 'head':
          updatedList = [value, ...list];
          break;
        case 'tail':
          updatedList = [...list, value];
          break;
        case 'specific':
          const index = prompt('Digite a posição específica para inserir o valor:');
          updatedList = [...list.slice(0, index), value, ...list.slice(index)];
          break;
        default:
          updatedList = list;
      }
      setList(updatedList);
    }
    setSelectedOperation(null);
  };

  const removeValue = (position) => {
    let updatedList;
    switch (position) {
      case 'head':
        updatedList = list.slice(1);
        break;
      case 'tail':
        updatedList = list.slice(0, -1);
        break;
      case 'specific':
        const index = prompt('Digite a posição específica para remover o valor:');
        const parsedIndex = parseInt(index, 10);
        if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < list.length) {
          updatedList = [...list.slice(0, parsedIndex), ...list.slice(parsedIndex + 1)];
        } else {
          alert('Posição inválida. Remoção cancelada.');
          updatedList = list;
        }
        break;
      default:
        updatedList = list;
    }
    setList(updatedList);
    setSelectedOperation(null);
  };

  const searchValue = () => {
    setSearchKey(prompt('Digite o valor para buscar:'));
    setIsSearching(true);
    setHighlightIndex(-1);
    setSelectedOperation(null);
  };

  useEffect(() => {
    if (isSearching) {
      let animationIndex = 0;

      const timer = setInterval(() => {
        if (animationIndex < list.length) {
          setHighlightIndex(animationIndex);

          // Verifica se o valor procurado está contido no item atual (ignorando outros caracteres)
          if (list[animationIndex].toString().replace(/\D/g, '') === searchKey) {
            setIsSearching(false);
            clearInterval(timer);
          }

          animationIndex += 1;
        } else {
          setIsSearching(false);
          clearInterval(timer);
        }
      }, 500);

      return () => clearInterval(timer);
    }
  }, [isSearching, list, searchKey]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOperationClick = (operation) => {
    setSelectedOperation(operation);
    switch (operation) {
      case 'Gere uma lista aleatoria':
        generateList();
        break;
      case 'Gere uma lista especifica':
        generateSpecificList();
        break;
      case 'Limpar lista':
        clearList();
        break;
      case 'Inserir Valor na Cabeça':
      case 'Inserir Valor no Final':
      case 'Inserir Valor na Posição Específica':
        insertValue(operation === 'Inserir Valor na Cabeça' ? 'head' : operation === 'Inserir Valor no Final' ? 'tail' : 'specific');
        break;
      case 'Remover Valor no Início':
      case 'Remover Valor no Final':
      case 'Remover Valor na Posição Específica':
        removeValue(operation === 'Remover Valor no Início' ? 'head' : operation === 'Remover Valor no Final' ? 'tail' : 'specific');
        break;
      case 'Buscar Valor':
        searchValue();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <div className="list">
          {list.map((item, index) => (
            <div
              key={index}
              className={`list-item ${highlightIndex === index ? 'searching' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
            
            <button className='butaoInteracao' onClick={() => handleOperationClick('Gere uma lista aleatoria')}>Gerar Lista Aleatória</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Gere uma lista especifica')}>Gerar Lista com Valores Específicos</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Limpar lista')}>Limpar Lista</button>
          </div>
          <div className='menu-section'>
            
            <button className='butaoInteracao' onClick={() => handleOperationClick('Inserir Valor na Cabeça')}> Adicionar a Cabeça da Lista</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Inserir Valor no Final')}>Adicionar ao Final da Lista</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Inserir Valor na Posição Específica')}>Adicionar a Posição Específica</button>
            {selectedOperation === 'Inserir Valor na Posição Específica' && (
              <div>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="Novo Item"
                />
                <button onClick={() => handleOperationClick('Inserir Valor na Posição Específica')}>Inserir</button>
              </div>
            )}
          </div>
          <div className='menu-section'>
            
            <button className='butaoInteracao' onClick={() => handleOperationClick('Remover Valor no Início')}>Excluir a Cabeça da Lista</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Remover Valor no Final')}>Excluir ao Final da Lista</button>
            <button className='butaoInteracao' onClick={() => handleOperationClick('Remover Valor na Posição Específica')}>Excluir em Posição Específica</button>
          </div>
          <div className='menu-section'>
            
            <button className='butaoInteracao' onClick={() => handleOperationClick('Buscar Valor')}>Buscar Valor</button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ListOperationsWithToggleMenu;
