import React, { useState, useEffect } from 'react';
import './HeapsInter.css';

const HeapsInter = () => {
  const [heap, setHeap] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchIndex, setSearchIndex] = useState(-1);

  const addToHeap = (value) => {
    const newHeap = [...heap, value];
    setHeap(newHeap);
    heapifyUp(newHeap.length - 1, newHeap);
  };

  const removeFromHeap = () => {
    if (heap.length === 0) return;
    const newHeap = heap.slice(0, -1);
    setHeap(newHeap);
  };

  const addSpecificNumber = () => {
    const numberToAdd = prompt("Digite o número específico a adicionar à heap:");
    if (numberToAdd !== null && !isNaN(numberToAdd)) {
      addToHeap(parseInt(numberToAdd));
    } else {
      alert("Por favor, insira um número válido.");
    }
  };

  const removeSpecificNumber = () => {
    const numberToRemove = prompt("Digite o número específico a remover da heap:");
    if (numberToRemove !== null && !isNaN(numberToRemove)) {
      const index = heap.indexOf(parseInt(numberToRemove));
      if (index !== -1) {
        const newHeap = [...heap.slice(0, index), ...heap.slice(index + 1)];
        setHeap(newHeap);
      } else {
        alert("O número especificado não foi encontrado na heap.");
      }
    } else {
      alert("Por favor, insira um número válido.");
    }
  };

  const searchValueInHeap = () => {
    const valueToSearch = prompt("Digite o valor que deseja buscar na heap:");
    if (valueToSearch !== null && !isNaN(valueToSearch)) {
      setSearchValue(parseInt(valueToSearch));
      performHeapSearch(parseInt(valueToSearch), 0);
    } else {
      alert("Por favor, insira um valor válido.");
    }
  };

  const performHeapSearch = (value, index) => {
    setSearchIndex(index);
    if (heap[index] === value) {
      alert(`O valor ${value} foi encontrado na posição ${index} da heap.`);
      return true;
    }
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let found = false;
    if (leftChildIndex < heap.length) {
      found = performHeapSearch(value, leftChildIndex);
    }
    if (!found && rightChildIndex < heap.length) {
      found = performHeapSearch(value, rightChildIndex);
    }
    return found;
  };

  const heapifyUp = (index, heap) => {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[index] > heap[parentIndex]) {
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  const renderHeapLines = () => {
    const lines = [];
    for (let i = 1; i < heap.length; i++) {
      lines.push(
        <line
          key={i}
          x1={getPositionX(i)}
          y1={getPositionY(i)}
          x2={getPositionX(Math.floor((i - 1) / 2))}
          y2={getPositionY(Math.floor((i - 1) / 2))}
          style={{ stroke: 'black', strokeWidth: 2 }}
        />
      );
    }
    return lines;
  };

  const getPositionX = (index) => {
    const level = Math.floor(Math.log2(index + 1));
    const indexInLevel = index + 1 - Math.pow(2, level);
    const totalLevels = Math.floor(Math.log2(heap.length + 1));
    const widthRatio = Math.pow(2, totalLevels - level - 1);
    const positionX = (indexInLevel + 0.5) * (80 * widthRatio);
    return positionX;
  };

  const getPositionY = (index) => {
    const level = Math.floor(Math.log2(index + 1));
    const positionY = 50 + level * 80;
    return positionY;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="caixaDeTexto">
        <div className="">
          <svg className="svg-container2" width="1000%" height="1000%">
            {renderHeapLines()}
            {heap.map((item, index) => (
              <Balloon key={index} number={item} x={getPositionX(index)} y={getPositionY(index)} searchIndex={searchIndex} currentIndex={index} />
            ))}
          </svg>
        </div>
      </div>
      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-section">
            <div className="container">
              <button onClick={() => addToHeap(Math.floor(Math.random() * 100))} className="buttom-menu">
                Adicionar à Heap
              </button>
              <button className ="butaoInteracao" onClick={() => removeFromHeap()} >Remover da Heap</button>
              <button className ="butaoInteracao" onClick={() => addSpecificNumber()} >Adicionar Número Específico</button>
              <button className ="butaoInteracao" onClick={() => removeSpecificNumber()} >Remover Número Específico</button>
              <button className ="butaoInteracao" onClick={() => searchValueInHeap()} >Buscar Valor</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Balloon = ({ number, x, y, searchIndex, currentIndex }) => {
  const [fillColor, setFillColor] = useState('#aaf');

  useEffect(() => {
    if (searchIndex === currentIndex) {
      setFillColor('#f00');
    } else {
      setFillColor('#aaf');
    }
  }, [searchIndex, currentIndex]);

  return (
    <g>
      <circle cx={x} cy={y} r="20" stroke="black" strokeWidth="3" fill={fillColor} />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="16px" fill="black">
        {number}
      </text>
    </g>
  );
};

export default HeapsInter;
