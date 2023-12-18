import React, { useState, useEffect } from 'react';
import './Heaps.css'; // Estilos CSS
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const HeapAnimation = () => {
  // Estado para os elementos do heap e o próximo elemento a ser inserido
  const [heapElements, setHeapElements] = useState([]);
  const [nextElement, setNextElement] = useState(null);

  useEffect(() => {
    // Define um intervalo para adicionar elementos ao heap de forma automática
    const interval = setInterval(() => {
      if (heapElements.length < 10) {
        // Gera um novo elemento único
        const newElement = generateUniqueElement();
        setNextElement(newElement); // Define o próximo elemento a ser inserido

        // Adiciona o próximo elemento automaticamente após um tempo
        setTimeout(() => {
          addToHeap(newElement);
        }, 1000);
      } else {
        clearInterval(interval); // Limpa o intervalo após atingir o limite de elementos
      }
    }, 2000); // Intervalo de 2 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [heapElements]);

  // Gera um elemento único que ainda não está no heap
  const generateUniqueElement = () => {
    let newElement;
    do {
      newElement = Math.floor(Math.random() * 10) + 1;
    } while (heapElements.includes(newElement));

    return newElement;
  };

  // Adiciona um elemento ao heap
  const addToHeap = (element) => {
    if (element !== null) {
      const updatedHeap = [...heapElements, element];
      setHeapElements(updatedHeap.sort((a, b) => b - a)); // Ordena o heap
      checkOrder(updatedHeap); // Verifica se os elementos estão em ordem
      setNextElement(null); // Limpa o próximo elemento após a inserção
    }
  };

  // Verifica se os elementos estão em ordem
  const checkOrder = (elements) => {
    for (let i = 0; i < elements.length - 1; i++) {
      if (elements[i] < elements[i + 1]) {
        console.log('Erro: Elementos fora de ordem.');
        return;
      }
    }
    console.log('Todos os elementos estão em ordem correta.');
  };

  // Renderiza a representação visual do heap
  const renderHeap = () => {
    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 0; i < heapElements.length; i++) {
      if (heapElements[i] > heapElements[maxIndex]) {
        maxIndex = i;
      }
      if (heapElements[i] < heapElements[minIndex]) {
        minIndex = i;
      }
    }

    return heapElements.map((element, index) => (
      <div
        className={`heap-node ${index === maxIndex ? 'max-value' : ''} ${index === minIndex ? 'min-value' : ''}`}
        key={index}
        style={{ height: `${element * 10}px` }}
      >
        {element}
      </div>
    ));
  };

  // Renderiza o próximo elemento a ser inserido no heap
  const renderNextElement = () => {
    return (
      <div className="next-element">
        {nextElement !== null && (
          <div className="next-element-box">
            <span className="value">{nextElement}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='page'>
      <Navbar/>
      <div className='titulo_heap' id="inicio"><h2>Heap</h2></div>
        
      
      <div className='explicacao'><p> Um heap é uma estrutura de dados que organiza elementos (como números) em forma de árvore binária, onde cada nó pai possui valores menores (no caso de um heap mínimo) ou maiores (no caso de um heap máximo) que seus nós filhos. Isso significa que o elemento no topo do heap é o maior (no caso de um heap máximo) ou o menor (no caso de um heap mínimo) valor presente. Isso é útil para encontrar rapidamente o valor máximo ou mínimo de um conjunto de dados, bem como para implementar algoritmos de ordenação eficientes, como o heapsort.</p><br/>

<p>Heaps são usados em várias aplicações computacionais, como em algoritmos de busca, filas de prioridade e implementações de algoritmos de ordenação. Sua estrutura permite acesso rápido ao maior ou menor elemento de um conjunto de dados, tornando-se uma ferramenta valiosa em situações onde essas operações são frequentes e necessitam de eficiência em termos de tempo de execução.</p><br/>

</div>
      
      
      <div className='caixaDeTexto'>
        {/* Container para representação visual do heap */}
        <div className="heap-container">
          <div className="heap">
            {renderHeap()} {/* Renderiza o heap */}
          </div>
          {renderNextElement()} {/* Renderiza o próximo elemento */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HeapAnimation;
