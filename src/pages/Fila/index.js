import React, { useState, useEffect, useCallback } from 'react';
import './Fila.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';


const Fila = () => {
  const [fila, setFila] = useState([]);
  const [adicionando, setAdicionando] = useState(true);
  const [contador, setContador] = useState(1);

  const enqueue = useCallback(() => {
    setFila((prevFila) => {
      const newItem = { id: prevFila.length + 1, content: `Item ${prevFila.length + 1}` };
      return [...prevFila, newItem];
    });
  }, []);

  const dequeue = useCallback(() => {
    setFila((prevFila) => {
      const updatedFila = [...prevFila];
      updatedFila.shift();
      return updatedFila;
    });
  }, []);

  useEffect(() => {
    const adicionarItemInterval = setInterval(() => {
      if (adicionando && fila.length < 7) {
        enqueue();
      } else {
        setAdicionando(false);
      }

      if (!adicionando && fila.length === 0) {
        setAdicionando(true);
        setContador((prev) => (prev === 7 ? 1 : prev + 1));
      }
    }, 1000); // Intervalo de 1 segundo para adicionar um novo item

    return () => clearInterval(adicionarItemInterval);
  }, [adicionando, enqueue, fila]);

  useEffect(() => {
    const removerItemInterval = setInterval(() => {
      if (fila.length > 0) {
        dequeue();
      }
    }, 2000); // Intervalo de 2 segundos para remover um item

    return () => clearInterval(removerItemInterval);
  }, [dequeue, fila]);

  return (
    <div className='page'>
       <div><Navbar/></div>

       <div className='titulo_fila' id="inicio"><h2>Fila</h2></div>
        
        <div className='explicacao'><p> Uma fila é uma estrutura de dados que segue a lógica do "princípio FIFO" (First-In-First-Out). Funciona como uma fila no mundo real: o primeiro elemento adicionado é o primeiro a ser removido. Pense em pessoas em uma fila - quem chega primeiro é atendido primeiro. Na programação, uma fila é semelhante: você pode adicionar elementos no final da fila e remover elementos do início. As operações principais são enfileirar (adicionar), desenfileirar (remover), verificar o primeiro elemento e checar se a fila está vazia. É uma estrutura útil para armazenar e manipular dados de forma organizada, mantendo a ordem em que foram inseridos.</p><br/>

        <p>Para implementar uma fila, geralmente são utilizadas estruturas como arrays ou listas ligadas. Arrays fornecem acesso rápido, mas podem ser limitados em tamanho, enquanto listas ligadas permitem crescimento dinâmico, porém podem ter um acesso menos eficiente. Essa estrutura é amplamente utilizada em situações onde a ordem de chegada dos dados é importante, como em sistemas de processamento de tarefas, gerenciamento de solicitações e em algoritmos de busca e caminhos. Em resumo, a fila é uma estrutura simples, porém valiosa, que organiza dados seguindo o princípio de primeiro a entrar, primeiro a sair, facilitando o gerenciamento e processamento de informações em muitos contextos da programação.</p><br/>

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
    
    <div><Footer/></div>  
    </div>
  
  );
};

export default Fila;