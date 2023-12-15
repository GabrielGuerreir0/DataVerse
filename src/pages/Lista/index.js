import React, { useEffect, useState } from 'react';
import './Lista.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';

const Lista = () => {
    const [items, setItems] = useState([{ id: 1, text: 'Produto 1' }]);
    const maxItems = 7;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setItems((prevItems) => {
          // Reinicia a lista quando atinge o limite de 7 itens
          if (prevItems.length === maxItems) {
            return [{ id: 1, text: 'Produto 1' }];
          }
          // Adiciona um novo item
          const newItem = { id: Date.now(), text: `Produto ${prevItems.length + 1}` };
          return [...prevItems, newItem];
        });
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className='page_list'>
             <div><Navbar/></div>
             <div className='titulo_lista' id="inicio"><h2>Lista</h2></div>
        
        <div className='explicacao'><p> Uma lista é uma estrutura de dados que armazena uma coleção ordenada de elementos. É como uma lista de tarefas onde você pode adicionar novos itens, remover ou modificar os existentes e verificar se um item específico está presente. Cada elemento possui uma posição na lista, permitindo acesso direto a eles. A flexibilidade das listas permite manipular informações de maneira sequencial, útil para organizar dados de forma simples e acessível.</p><br/>

        <p>Em termos simples, uma lista é como um registro ordenado de informações, semelhante a uma lista de compras. Ela oferece a capacidade de adicionar, remover e verificar itens, mantendo sua ordem específica. Essa estrutura de dados é valiosa pela sua flexibilidade em lidar com coleções de elementos, facilitando a organização e manipulação de dados de forma sequencial.</p><br/>

        </div>
             <div className='caixaDeTexto'>
      <div className="animated-list-container">
        <h1>Lista Animada</h1>
        <ul className="animated-list">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div><Footer/></div>
      </div>
       
    );
  };
  
  export default Lista;