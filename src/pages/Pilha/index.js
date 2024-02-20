import React, { useState, useEffect } from 'react';
import './Pilha.css'; // Importa estilos CSS
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PilhaInter from './componentes/PilhaInter';

const Pilhas = () => {
  // Estado para a pilha
  const [stack, setStack] = useState([]);

  // Função para adicionar um novo elemento à pilha
  const pushElement = () => {
    if (stack.length < 10) {
      const newElement = Math.floor(Math.random() * 100) + 1;
      setStack((prevStack) => [...prevStack, newElement]);
    }
  };

  // Efeito para simular a adição gradativa de elementos à pilha
  useEffect(() => {
    const interval = setInterval(() => {
      pushElement();
    }, 1500);

    // Limpa o intervalo quando a pilha está completa
    if (stack.length === 10) {
      clearInterval(interval);
    }

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [stack]);

  return (
    <div className='page'>
      <Navbar/>   
      <div className='titulo_pilha' id="inicio"><h2>Pilha</h2></div>
      <div className='explicacao'>
        <p>Uma pilha é uma estrutura de dados linear que organiza elementos seguindo o princípio "último a entrar, primeiro a sair" (LIFO). Cada elemento, chamado de item, é adicionado ou removido no topo da pilha. A manipulação dos dados ocorre exclusivamente no topo, simplificando o acesso e a remoção de elementos.
</p><br/>
<h4>Principais Funcionalidades da Pilha:</h4><br/>
        <p> - Empilhar (Push): Adiciona um novo elemento ao topo da pilha, tornando-o o item mais recente.<br/>
 - Desempilhar (Pop): Remove o elemento no topo da pilha, representando o último item adicionado.<br/>
 - Topo da Pilha: Retorna o elemento no topo da pilha sem removê-lo, permitindo a visualização do item mais recente.<br/>
 - Verificar se a Pilha Está Vazia: Informa se a pilha não contém elementos, indicando a conclusão de processos.<br/>
 - Obter Tamanho da Pilha: Retorna o número de elementos na pilha, proporcionando uma visão quantitativa da carga de trabalho.
</p><br/>
      </div>
      <div>
        {/* Caixa de texto para a pilha */}
        <div className="caixaDeTexto">
          <div className="stack-container">
            {/* Exibe os elementos da pilha */}
            <div className="stack">
              {stack.map((element, index) => (
                <div key={index} className="stack-element">
                  {element}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='explicacao'>
      <h4>Operações e Funcionalidades Disponíveis:</h4><br/>
      <p> - Empilhar Elemento: Adiciona um novo item ao topo da pilha, facilitando a inclusão de novos processos ou dados.<br/>
 - Desempilhar Elemento: Remove o item mais recente da pilha, refletindo o término de uma tarefa ou a conclusão de um processo.<br/>
 - Buscar um elemento: checa se há um elemento na pilha.<br/>
 - Gerar pilha aleatoria: Gera uma pilha com valores já introduzidas.<br/>
 - Apagar pilha: elimina toda a pilha.
</p><br/>
<p>Ao utilizar essas funcionalidades, nossa pilha se torna uma ferramenta eficaz para gerenciar processos de forma organizada e eficiente. Seja para reverter a ordem de operações, implementar sistemas de desfazer ou simplesmente para controlar a execução de tarefas, a pilha oferece um conjunto robusto de operações para otimizar o fluxo de trabalho.</p>
</div>
      <PilhaInter></PilhaInter>
      <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <Footer/>
    </div>
  );
};

export default Pilhas;
