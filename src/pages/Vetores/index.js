import React, { useState, useEffect } from 'react';
import './Vetores.css'; // Importa o arquivo CSS para estilização
import Footer from '../../components/Footer'; // Importa o componente de rodapé
import Navbar from '../../components/Navbar'; // Importa o componente da barra de navegação
import VetorInter from './elementos/VetorInter';

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

  // Renderização do componente
  return (
    <div className='page'>
      <Navbar /> {/* Renderiza a barra de navegação */}
      <div className='titulo_vetor' id="inicio"><h2>Vetor</h2></div> {/* Título do vetor */}
      <div className='explicacao'><p> Um vetor, também conhecido como array, é uma estrutura de dados que armazena elementos sequencialmente em uma única dimensão. Cada elemento do vetor é acessado por meio de um índice, facilitando a manipulação e recuperação de dados de forma eficiente.</p><br/>
        <h4>Principais Características do Vetor:</h4><br/>
        <p> - Armazenamento Contíguo: Os elementos do vetor são armazenados em posições de memória contíguas, garantindo acesso rápido por meio de índices.<br/>
 - Tamanho Fixo: O tamanho do vetor é fixo durante a sua criação e não pode ser alterado dinamicamente.
</p><br/>
<h4>Exemplos de Aplicações Práticas:</h4><br/>
<p> - Armazenamento de Dados: Utilizado para representar listas de informações como notas de alunos, registros de clientes, etc.<br/>
 - Manipulação de Imagens: Em processamento de imagem, os pixels muitas vezes são armazenados em vetores.<br/>
 - Implementação de Estruturas de Dados: Componente fundamental em diversas estruturas, como pilhas, filas e listas.
</p><br/>
<h4>Operações Específicas para Vetores:</h4><br/>
<p> - Ordenação: Reorganiza os elementos do vetor em ordem ascendente ou descendente.<br/>
 - Soma dos Elementos: Calcula a soma de todos os elementos no vetor.<br/>
 - Cópia de Vetor: Cria uma cópia idêntica do vetor original.
</p><br/>

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
      </div><div className='explicacao'>
      <h4>Operações e Funcionalidades Principais:</h4><br/>
      <p> - Acesso por Índice: Recupera o valor de um elemento específico do vetor usando seu índice.<br/>
 - Inserir Elemento: Adiciona um novo elemento ao vetor, deslocando os elementos subsequentes, se necessário.<br/>
 - Remover Elemento: Elimina um elemento do vetor, ajustando os índices e o tamanho do vetor conforme necessário.<br/>
 - Buscar Elemento: Localiza a posição de um valor específico no vetor, fornecendo seu índice.
</p><br/>
<p>Ao empregar essas funcionalidades, os vetores se tornam uma estrutura de dados versátil e eficiente para armazenamento e manipulação de dados. Seja para implementar algoritmos de busca, armazenar informações em estruturas simples ou representar dados sequenciais, os vetores oferecem uma abordagem direta e eficaz.
</p>
</div>
      <VetorInter></VetorInter>
      <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <Footer /> {/* Renderiza o rodapé */}
    </div>
  );
};

export default VectorAnimation; // Exporta o componente de animação de vetor
