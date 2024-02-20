import React, { useEffect, useState } from 'react';
import './Lista.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';
import ListInter from './elementos/listaInterativa';

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
        
        <div className='explicacao'><p>Uma lista é uma poderosa estrutura de dados que organiza elementos em uma sequência linear. Cada elemento, denominado nó, é composto por dados e uma referência (ponteiro) para o próximo nó na lista. A última referência na lista geralmente aponta para null, indicando o final da sequência.
</p><br/>
        <h4>Principais Tipos de Listas:</h4>
        <p>- Lista Simplesmente Encadeada: Cada nó possui uma referência para o próximo na sequência. O último nó aponta para null.<br/>
- Lista Duplamente Encadeada: Cada nó possui referências tanto para o próximo quanto para o anterior na sequência, permitindo uma travessia eficiente em ambas as direções.<br/>
- Lista Circular: O último nó aponta para o primeiro, formando um ciclo na lista.
</p><br/>

<p>A baixo temos uma exemplificação mais generica de oque sería uma lista.</p>

        </div>
             <div className='caixaDeTexto'>
      <div className="animated-list-container">
        <ul className="animated-list">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      
      </div>
      <div className='explicacao'><h4>Operações e Funcionalidades Disponíveis:</h4><p>
 - Gerar Lista Aleatória: Cria automaticamente uma lista com valores aleatórios, eliminando a necessidade de inserção manual.<br></br>
 - Gerar Lista com Valores Específicos: Permite ao usuário inserir manualmente os valores desejados para criar uma lista personalizada.<br></br>
 - Limpar Lista: Apaga todos os elementos da lista, proporcionando uma reinicialização fácil.<br></br>
 - Adicionar Cabeça da Lista: Acrescenta um novo item no início da lista, alterando dinamicamente a ordem dos elementos.<br></br>
 - Adicionar Final da Lista: Inclui um item no final da lista, mantendo a sequência existente.<br></br>
 - Adicionar Posição Específica: Insere um item em qualquer posição desejada, oferecendo flexibilidade na manipulação da lista.<br></br>
 - Excluir a Cabeça da Lista: Remove o primeiro item da lista, ajustando automaticamente a ordem dos elementos.<br></br>
 - Excluir o Final da Lista: Elimina o último item da lista, mantendo a integridade da sequência.<br></br>
 - Excluir Posição Específica: Exclui um item de qualquer posição desejada, proporcionando controle total sobre a estrutura da lista.<br></br>
 - Buscar Valor: Percorre a lista em busca de um valor específico inserido pelo usuário, facilitando a localização de elementos específicos na sequência.</p><br/>
 <p>Ao utilizar estas funcionalidades, nossa lista se torna uma ferramenta versátil para manipulação dinâmica de dados, adequando-se às diversas necessidades do usuário. Seja para ordenar informações, realizar buscas eficientes ou simplesmente </p>

        <p className='subexplica'>Em termos simples, uma lista é como um registro ordenado de informações, semelhante a uma lista de compras. Ela oferece a capacidade de adicionar, remover e verificar itens, mantendo sua ordem específica. Essa estrutura de dados é valiosa pela sua flexibilidade em lidar com coleções de elementos, facilitando a organização e manipulação de dados de forma sequencial.</p><br/>

        </div>
      <ListInter></ListInter>
      
      <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <div><Footer/></div>
      </div>
       
    );
  };
  
  export default Lista;