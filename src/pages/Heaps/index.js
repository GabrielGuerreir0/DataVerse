import React, { useState, useEffect } from 'react';
import './Heaps.css'; // Estilos CSS
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import HeapsInter from './componentes/HeapsInter';

const HeapAnimation = () => {
  const [heapElements, setHeapElements] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [elementCount, setElementCount] = useState(0);

  useEffect(() => {
    if (elementCount < 15) {
      const interval = setInterval(() => {
        const newValue = Math.floor(Math.random() * 100);
        insertIntoHeap(newValue);
        setElementCount(prevCount => prevCount + 1);
      }, 1000); // Adiciona um novo elemento a cada segundo
      return () => clearInterval(interval);
    }
  }, [elementCount]);

  const insertIntoHeap = (newValue) => {
    const newHeap = [...heapElements, newValue];
    bubbleUp(newHeap);
    setHeapElements(newHeap);
  };

  const bubbleUp = (heap) => {
    let index = heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[parentIndex] < heap[index]) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  const removeFromHeap = () => {
    if (heapElements.length === 0) return;
    const newHeap = [...heapElements];
    [newHeap[0], newHeap[newHeap.length - 1]] = [
      newHeap[newHeap.length - 1],
      newHeap[0]
    ];
    newHeap.pop();
    bubbleDown(newHeap);
    setHeapElements(newHeap);
  };

  const bubbleDown = (heap) => {
    let index = 0;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let maxIndex = index;

      if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[maxIndex]) {
        maxIndex = leftChildIndex;
      }
      if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[maxIndex]) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex !== index) {
        [heap[maxIndex], heap[index]] = [heap[index], heap[maxIndex]];
        index = maxIndex;
      } else {
        break;
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderHeapLines = () => {
    const lines = [];
    for (let i = 1; i < heapElements.length; i++) {
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
    const totalLevels = Math.floor(Math.log2(heapElements.length + 1)); // Corrigido aqui
    const widthRatio = Math.pow(2, totalLevels - level - 1);
    const positionX = (indexInLevel + 0.5) * (80 * widthRatio);
    return positionX;
  };

  const getPositionY = (index) => {
    const level = Math.floor(Math.log2(index + 1));
    const positionY = 50 + level * 80;
    return positionY;
  };

  return (
    <div className='page'>
      <Navbar/>
      <div className='titulo_heap' id="inicio"><h2>Heap</h2></div>
      <div className='explicacao'>
        <p> Um heap é uma estrutura de dados que organiza elementos de forma hierárquica, priorizando a eficiência nas operações de inserção e remoção de elementos com base em sua prioridade. Heaps são frequentemente utilizados em filas de prioridade e algoritmos de ordenação, como o HeapSort.</p><br/>
        <h4>Principais Características de um Heap</h4><br/>
        <p> - Estrutura de Árvore: Um heap é uma árvore binária que segue a propriedade de heap, onde cada nó pai tem uma prioridade igual ou superior à de seus nós filhos.<br/>
 - Heap Máximo e Mínimo: Em um heap máximo, o nó pai tem uma prioridade maior que a de seus filhos, enquanto em um heap mínimo, o nó pai tem uma prioridade menor que a de seus filhos.
</p><br/>
<h4>Exemplos de Aplicações Práticas:</h4><br/>
<p> - Fila de Prioridade: Utilizado em algoritmos que requerem a execução de tarefas com base em prioridades específicas.<br/>
 - Implementação de Filas de Espera: Gerencia a ordem de acesso de processos ou tarefas com base em suas prioridades.<br/>
 - HeapSort: Algoritmo de ordenação que utiliza a estrutura de heap para classificar elementos.
</p><br/>
<h4>Operações Específicas para Heaps:</h4><br/>
<p> - Heapify: Transforma uma árvore em um heap, garantindo que cada subárvore seja um heap válido.<br/>
 - Redução de Chave: Modifica a prioridade de um elemento no heap, ajustando sua posição.
</p>
      </div>
      <div className='caixaDeTexto'>
        <div id='centro'>
        <svg className="svg-container2" width="1000%" height="1000%">
          {renderHeapLines()}
          {heapElements.map((item, index) => (
            <Balloon key={index} number={item} x={getPositionX(index)} y={getPositionY(index)} />
          ))}
        </svg></div>
      </div>
      <div className='explicacao'>
        <h4>Operações e Funcionalidades Principais:</h4><br/>
        <p> - Inserir Elemento: Adiciona um novo elemento ao heap<br/>
         - Remover Elemento: Remove o elemento do heap<br/>
         - Buscar: Retorna o elemento sem removê-lo do heap.<br/>
          - Construir Heap: Transforma um conjunto de elementos em um heap, garantindo a propriedade de heap.
        </p><br/>
      <p>Ao empregar essas funcionalidades, um heap se torna uma ferramenta eficiente para lidar com prioridades e ordenação de elementos. Seja para otimizar algoritmos de busca ou gerenciar filas de tarefas com diferentes níveis de importância, os heaps oferecem uma abordagem eficaz para organização de dados com base em prioridades.</p>
      </div>
      <HeapsInter heapElements={heapElements} removeFromHeap={removeFromHeap} />
      <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <Footer/>
    </div>
  );
};
const Balloon = ({ number, x, y, searchIndex, currentIndex }) => {
  const [fillColor, setFillColor] = useState('#aaf');

  useEffect(() => {
    if (searchIndex === currentIndex) {
      setFillColor('#f0f');
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

export default HeapAnimation;
