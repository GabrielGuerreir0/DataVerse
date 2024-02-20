import React, { useState, useEffect, useCallback } from 'react';
import './Fila.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';
import FilaInter from './componentes/Fila';

const Fila = () => {
  const [fila, setFila] = useState([]);
  const [adicionando, setAdicionando] = useState(true);

  // Função para adicionar um novo item à fila
  const enqueue = useCallback(() => {
    setFila((prevFila) => {
      // Verifica se a fila já tem 7 itens
      if (prevFila.length >= 7) {
        // Para de adicionar novos itens
        setAdicionando(false);
        return prevFila;
      }
      // Adiciona um novo item no final da fila
      const newItem = { id: Date.now(), content: `Item ${prevFila.length + 1}` };
      return [...prevFila, newItem];
    });
  }, []);

  // Função para remover o primeiro item da fila
  const dequeue = useCallback(() => {
    setFila((prevFila) => {
      // Remove o primeiro item da fila
      const updatedFila = [...prevFila.slice(1)];
      return updatedFila;
    });
  }, []);

  useEffect(() => {
    // Adiciona um novo item à fila a cada 1 segundo, enquanto a flag 'adicionando' estiver true
    const adicionarItemInterval = setInterval(() => {
      if (adicionando) {
        enqueue();
      }
    }, 1000);

    // Remove o primeiro item da fila a cada 2 segundos, se a fila não estiver vazia
    const removerItemInterval = setInterval(() => {
      if (fila.length > 0) {
        dequeue();
      }
    }, 2000);

    // Limpa os intervalos quando o componente é desmontado
    return () => {
      clearInterval(adicionarItemInterval);
      clearInterval(removerItemInterval);
    };
  }, [adicionando, enqueue, fila.length, dequeue]);

  useEffect(() => {
    // Verifica se a fila está cheia (com 7 itens) para parar de adicionar novos itens
    if (fila.length === 7) {
      setAdicionando(false);
    }
    // Verifica se a fila está vazia para permitir adicionar novos itens
    if (fila.length === 0) {
      setAdicionando(true);
    }
  }, [fila]);

  return (
    <div className='page'>
      <Navbar />
      <div className='titulo_fila' id="inicio"><h2>Fila</h2></div>
      <div className='explicacao'>
        <p>Uma fila é uma estrutura de dados linear que organiza elementos seguindo o princípio "primeiro a entrar, primeiro a sair" (FIFO). Cada elemento, chamado de nó, contém dados e uma referência (ponteiro) para o próximo nó na fila. O último nó geralmente aponta para null, indicando o final da fila.</p><br/>
        <h4>Principais Funcionalidades da Fila:</h4>
        <p> - Enfileirar (Inserir): Adiciona um novo elemento ao final da fila, garantindo que ele seja processado após todos os elementos existentes.<br/>
 - Desenfileirar (Remover): Remove o elemento no início da fila, representando o processo que foi concluído ou atendido.<br/>
 - Frente da Fila: Retorna o elemento no início da fila sem removê-lo, possibilitando a visualização do próximo processo a ser executado.<br/>
 - Verificar se a Fila Está Vazia: Informa se a fila não contém elementos, indicando que não há processos pendentes.<br/>
 - Obter Tamanho da Fila: Retorna o número de elementos na fila, fornecendo uma visão quantitativa do trabalho pendente.
</p>
      </div>
      <div className='caixaDeTexto'>
        <div className="fila-container">
          <div className="fila">
            {fila.map((item) => (
              <div key={item.id} className="fila-item">
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='explicacao'><h4>Operações e Funcionalidades Disponíveis</h4><p>
 - Enfileirar Processo: Adiciona um novo processo à fila, estabelecendo uma ordem clara de execução.<br/>
 - Desenfileirar Processo: Remove o processo no início da fila após sua conclusão, avançando para o próximo na sequência.<br/>
 - Visualizar Próximo Processo: Permite observar o próximo processo a ser executado sem removê-lo da fila.<br/>
 - Verificar Se a Fila Está Vazia: Indica se a fila não contém nenhum processo pendente, auxiliando na gestão de recursos.<br/>
 - Obter Número de Processos na Fila: Fornece o número atual de processos na fila, facilitando o monitoramento da carga de trabalho.</p><br/>
      <p>Ao utilizar estas funcionalidades, nossa fila se torna uma ferramenta eficiente para gerenciamento de processos, ideal para situações onde a ordem de chegada é crucial. Seja para organizar tarefas em um sistema operacional ou para gerenciar requisições em um servidor, a fila oferece um conjunto robusto de operações para otimizar o fluxo de trabalho.</p>
      </div>
      <FilaInter />
      <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <Footer />
    </div>
  );
};

export default Fila;
