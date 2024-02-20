import React, { useState } from 'react';
import './table.css';

function App() {
  const [hashTable, setHashTable] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função de hash simples para este exemplo
  const hashFunction = (key, size) => {
    return key % size; 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para lidar com colisões inserindo em uma lista encadeada
  const handleCollision = (table, index, key, value) => {
    table[index] = table[index] || [];
    table[index].push({ key, value });
  };

  // Função para inserir valor na tabela hash
  const handleInsert = () => {
    if (hashTable.length === 0) {
      const customSize = parseInt(prompt('Digite o número de índices desejado para a tabela hash:'));
      if (isNaN(customSize) || customSize <= 0) {
        alert('Por favor, insira um número válido maior que zero.');
        return;
      }
      setHashTable(Array.from({ length: customSize }, () => []));
      alert(`Tabela de dispersão criada com ${customSize} índices.`);
      return;
    }

    const inputKey = parseInt(prompt('Digite a chave a inserir:'));
    const inputValue = parseInt(prompt('Digite o valor a inserir:'));
    const index = hashFunction(inputKey, hashTable.length);
    handleCollision(hashTable, index, inputKey, inputValue);
    setHashTable([...hashTable]);
    alert('Valor inserido com sucesso!');
  };

  // Função para excluir valor da tabela hash
  const handleDelete = () => {
    const inputKey = parseInt(prompt('Digite a chave a excluir:'));
    const index = hashFunction(inputKey, hashTable.length);
    if (hashTable[index]) {
      const filteredArray = hashTable[index].filter(item => item.key !== inputKey);
      hashTable[index] = filteredArray;
      setHashTable([...hashTable]);
      alert('Valor excluído com sucesso!');
    } else {
      alert('Valor não encontrado na tabela.');
    }
  };

  // Função para buscar valor na tabela hash
  const handleSearch = () => {
    const searchKey = parseInt(prompt('Digite a chave a buscar:'));
    const index = hashFunction(searchKey, hashTable.length);
    const foundItem = hashTable[index]?.find(item => item.key === searchKey);
    if (foundItem) {
      alert(`O valor associado à chave ${searchKey} é ${foundItem.value} e está no índice ${index}.`);
    } else {
      alert(`Valor associado à chave ${searchKey} não encontrado.`);
    }
  };

  // Função para gerar uma tabela de dispersão aleatória
  const generateRandomHashTable = () => {
    const randomSize = Math.floor(Math.random() * 10) + 1; 
    const randomMaxValue = Math.floor(Math.random() * 20) + 1; 
    const table = Array.from({ length: randomSize }, () => []);

    const uniqueKeys = new Set();
    const maxIterations = Math.min(randomSize * 10, randomMaxValue); // Limitando o número máximo de iterações

    while (uniqueKeys.size < randomSize && uniqueKeys.size < maxIterations) {
      const randomKey = Math.floor(Math.random() * randomMaxValue) + 1;
      uniqueKeys.add(randomKey);
    }

    uniqueKeys.forEach(key => {
      const value = Math.floor(Math.random() * randomMaxValue) + 1;
      const index = hashFunction(key, randomSize); 
      handleCollision(table, index, key, value);
    });

    setHashTable(table);
    alert(`Tabela de dispersão aleatória gerada com ${randomSize} índices.`);
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <div className="hash-table">
          {hashTable.map((bucket, index) => (
            <div key={index} className="bucket">
              {bucket.map((item, idx) => (
                <div key={idx} className="item">
                  <div>key:{item.key}</div>
                  <div className="divider"></div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
            
              <button className='butaoInteracao' onClick={handleInsert}>Inserir</button>
              <button className='butaoInteracao' onClick={handleDelete}>Excluir</button>
              <button className='butaoInteracao' onClick={handleSearch}>Buscar</button>
              <button className='butaoInteracao' onClick={generateRandomHashTable}>Gerar Aleatório</button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
