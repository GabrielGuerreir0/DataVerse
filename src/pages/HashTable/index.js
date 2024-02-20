import './HashTable.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';
import React, { useState, useEffect } from 'react';
import IntHas from './ComponentsHash/tabela';


const HashTableAnimation = () => {
  const [hashTable, setHashTable] = useState(Array(5).fill(null).map(() => []));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomKey = Math.floor(Math.random() * 100);
      const randomValue = `Value${randomKey}`;
      const hash = randomKey % hashTable.length;

      // Verificar se o bucket ainda não atingiu o número desejado de elementos
      if (hashTable[hash].length < 4) {
        const updatedTable = [...hashTable];
        updatedTable[hash].push({ key: randomKey, value: randomValue });
        setHashTable(updatedTable);
      }

      // Verificar se todos os buckets atingiram o número desejado de elementos
      if (hashTable.every(bucket => bucket.length === 4)) {
        clearInterval(intervalId);
      }
    }, 1500); // Inserir a cada 1.5 segundos

    return () => clearInterval(intervalId);
  }, [hashTable]);

  const renderTable = () => {
    return hashTable.map((bucket, index) => (
      <div key={index} className="hash-bucket">
        <span className="bucket-index">{index}</span>
        {bucket.map(({ key, value }) => (
          <div key={key} className="hash-item">
            {key}: {value}
          </div>
        ))}
      </div>
    ));
  };

  return (

    <div className='page'>
        <div><Navbar/></div>
        <script src="InterTable.js"></script>
        <div className='titulo_hasht' id="inicio"><h2>Hash Table</h2></div>
        
        <div className='explicacao'> 
        <h4>Hash:</h4><br/>
        <p>Um hash é uma função matemática que converte dados de tamanho variável em um valor de tamanho fixo, geralmente uma sequência alfanumérica. Essa técnica é amplamente utilizada na computação para diversos propósitos, como verificar a integridade de dados, armazenar senhas de forma segura, e indexar informações em estruturas de dados eficientes como tabelas de dispersão. A característica fundamental do hash é produzir um resultado único para um conjunto específico de dados, tornando-o útil em várias aplicações de segurança e otimização de desempenho.</p><br/>
        <h4>Tabela Hash</h4><br/>
        <p>Uma tabela hash é uma estrutura de dados que utiliza uma função de hash para organizar e acessar dados de forma eficiente. Cada elemento, ou par chave-valor, é mapeado para um índice na tabela através da função de hash, permitindo recuperação instantânea dos valores associados às chaves.</p><br/>
        <h4>Principais Funcionalidades da Tabela Hash:</h4><br/>
        <p> - Inserir Dado: Adiciona um novo par chave-valor à tabela hash. A função de hash determina a posição ideal para armazenamento.<br/>
 - Buscar Dado: Localiza e recupera rapidamente o valor associado a uma chave específica, proporcionando acesso eficiente aos dados.<br/>
 - Excluir Dado: Remove um par chave-valor da tabela hash, ajustando dinamicamente sua estrutura.
</p><br/>
<h4>Métodos de Tratamento de Colisões:</h4><br/>
<p> - Encadeamento: Utiliza listas encadeadas para armazenar múltiplos elementos que mapeiam para o mesmo índice.<br/>
 - Endereçamento Aberto: Encontra o próximo slot disponível na tabela quando ocorre uma colisão.<br/>
 - Hashing Duplo: Aplica duas funções de hash em caso de colisão, oferecendo uma abordagem alternativa para resolver conflitos.
</p><br/>
          
        </div>
        <div className='caixaDeTexto'>
            <div className="hash-table-animation">
      <div className="animation-container">{renderTable()}</div>
    </div>
    </div>
<div className='explicacao'>
  <h4>Operações e Funcionalidades Disponíveis:</h4><br/>
  <p> - Inserir Novo Registro: Adiciona um novo par chave-valor à tabela hash, garantindo uma distribuição uniforme dos dados.<br/>
 - Buscar Valor por Chave: Recupera rapidamente o valor associado a uma chave específica, otimizando o acesso a informações específicas.<br/>
 - Excluir Registro: Remove um par chave da tabela hash, mantendo a integridade da estrutura.<br/>
 - Gerar Tabela Hash: Gera dinamicamente o tamanho da tabela para otimizar o desempenho.
</p><br/>
<p>Ao utilizar essas funcionalidades, nossa tabela hash se torna uma ferramenta essencial para armazenamento e recuperação eficientes de dados. Seja para indexação em bancos de dados, implementação de caches ou gerenciamento rápido de informações, a tabela hash oferece um mecanismo eficaz para acesso instantâneo a dados específicos</p>
</div>

    <IntHas></IntHas>
    <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
    <div><Footer/></div>
    </div>
    
  );
};

export default HashTableAnimation;