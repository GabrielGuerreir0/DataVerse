import React, { useState, useEffect } from 'react';
import './Pilha.css'; // Importa estilos CSS
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

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
        <p> Uma pilha em estruturas de dados é uma coleção de elementos onde a adição e remoção ocorrem apenas em uma extremidade, chamada de topo da pilha. Funciona como uma pilha de pratos, onde você pode adicionar um novo prato no topo (empilhar) ou remover o prato que está no topo (desempilhar). O último elemento adicionado é o primeiro a ser removido (princípio LIFO - Last In, First Out), proporcionando uma forma de organizar e acessar os dados de maneira sequencial e ordenada.</p><br/>
        <p>Em termos simples, é como uma pilha de livros onde você adiciona um novo livro no topo e remove apenas o livro que está no topo quando precisa. Isso torna a pilha útil em muitas situações, especialmente quando a ordem de acesso aos dados segue uma lógica de "o último a entrar é o primeiro a sair".</p><br/>
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
      <Footer/>
    </div>
  );
};

export default Pilhas;
