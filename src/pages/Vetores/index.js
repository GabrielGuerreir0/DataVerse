import React, { useState, useEffect } from 'react';
import './Vetores.css'; // Importa o arquivo CSS para estilização
import Footer from '../../components/Footer'; // Importa o componente de rodapé
import Navbar from '../../components/Navbar'; // Importa o componente da barra de navegação

// Componente de animação de vetor
const VectorAnimation = () => {
  // Estado para armazenar o vetor e seu controle de índice destacado
  const [vector, setVector] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Efeito para adicionar elementos ao vetor em intervalos regulares
  useEffect(() => {
    const interval = setInterval(() => {
      if (vector.length < 10) {
        // Gera um número aleatório de 0 a 99 e adiciona ao vetor
        const newValue = Math.floor(Math.random() * 100);
        setVector(prevVector => [...prevVector, newValue]);
      }
    }, 1000); // Intervalo de 1 segundo para adicionar elementos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [vector]); // Dispara o efeito quando o vetor é modificado

  // Função para remover o último elemento do vetor
  const removeElement = () => {
    if (vector.length > 0) {
      // Remove o último elemento do vetor
      const newVector = vector.slice(0, -1);
      setVector(newVector);
    }
  };

  // Função para buscar um elemento no vetor pelo índice
  const searchElement = () => {
    const index = prompt('Digite o índice que deseja buscar:');
    if (index !== null) {
      const parsedIndex = parseInt(index, 10);
      if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < vector.length) {
        // Formata o elemento encontrado para exibição
        const formattedElement = vector[parsedIndex].toString().padStart(3, '0');
        alert(`Elemento do índice ${parsedIndex}: ${formattedElement}`);
      } else {
        alert('Índice inválido ou fora dos limites do vetor.');
      }
    }
  };

  // Renderização do componente
  return (
    <div className='page'>
      <Navbar /> {/* Renderiza a barra de navegação */}
      <div className='titulo_vetor' id="inicio"><h2>Vetor</h2></div> {/* Título do vetor */}
      <div className='explicacao'><p> Um vetor em estruturas de dados é como uma sequência ordenada de elementos, semelhante a uma lista. Ele é composto por células de armazenamento consecutivas, onde cada célula pode conter um dado específico, como números, palavras ou objetos mais complexos. A característica importante é que os elementos são acessados por meio de índices, sendo possível adicionar, acessar e modificar elementos em posições específicas de forma rápida, facilitando a organização e recuperação dos dados.</p><br/>

        <p>Em resumo, um vetor é como uma prateleira com compartimentos numerados, onde você pode guardar diferentes coisas em cada compartimento e encontrá-las facilmente quando precisar, usando o número do compartimento para referenciar o que está armazenado ali. Isso torna o vetor uma estrutura eficiente para lidar com conjuntos ordenados de informações.</p><br/>

        </div>
      {/* Container para a animação do vetor */}
      <div className='container'>
        <div className='caixaDeTexto'>
          <div className="vector-animation">
            <div className="vector-container">
              <div className="vector">
                {/* Mapeia e exibe os elementos do vetor com controle de destaque no hover */}
                {vector.map((element, index) => (
                  <div
                    key={index}
                    className="vector-element"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Mostra o índice ou o valor do elemento no vetor, conforme o hover */}
                    {hoveredIndex === index ? <div className="index">{index}</div> : <div className="value">{element}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Botões para remover elemento e buscar elemento por índice */}
        <div className="buttons-container">
          <button className="button-style" onClick={removeElement}>Remover Elemento</button>
          <button className="button-style" onClick={searchElement}>Buscar Elemento por Índice</button>
        </div>
      </div>
      <Footer /> {/* Renderiza o rodapé */}
    </div>
  );
};

export default VectorAnimation; // Exporta o componente de animação de vetor
