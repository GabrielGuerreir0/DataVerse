import './HashTable.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';
import React, { useState, useEffect } from 'react';


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
        <div className='titulo_hasht' id="inicio"><h2>Hash Table</h2></div>
        
        <div className='explicacao'><p> Uma hash table é uma estrutura de dados que organiza informações usando uma função matemática chamada função hash. Ela mapeia dados para uma localização específica, permitindo o armazenamento e a recuperação eficiente desses dados. Funciona como uma grande prateleira com compartimentos numerados, onde os itens são colocados em compartimentos específicos calculados pela função hash. No entanto, colisões podem ocorrer quando dois itens têm o mesmo local calculado. Para lidar com isso, estratégias como encadeamento (usando listas ligadas) ou hashing com resolução de colisões são utilizadas para garantir que os itens sejam armazenados e acessíveis corretamente.</p><br/>

        <p>Resumindo ainda mais, uma hash table é como um sistema de armazenamento inteligente que usa uma fórmula para direcionar onde cada informação deve ser guardada e acessada rapidamente. Isso ajuda na organização eficiente de dados, mesmo quando há chances de múltiplos itens serem direcionados para o mesmo local, garantindo que todos os itens possam ser encontrados e recuperados de maneira eficaz.</p><br/>

        </div>
        <div className='caixaDeTexto'>
            <div className="hash-table-animation">
      <div className="animation-container">{renderTable()}</div>
    </div>
    </div>
    
    <div><Footer/></div>
    </div>
    
  );
};

export default HashTableAnimation;