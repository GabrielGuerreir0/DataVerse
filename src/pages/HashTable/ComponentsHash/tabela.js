import React, { useState } from 'react';
import './table.css';

const HashTable = () => {
  const [hashTable, setHashTable] = useState({});
  const [searchKey, setSearchKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const addValue = () => {
    const key = prompt('Digite a chave:');
    const value = prompt('Digite o valor:');
    const newHashTable = { ...hashTable, [key]: value };
    setHashTable(newHashTable);
  };

  const searchValue = () => {
    const key = prompt('Digite a chave para buscar:');
    setSearchKey(key);
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={addValue}>Adicionar Valor</button>
      <button onClick={searchValue}>Buscar Valor</button>
      <div className="hash-table">
        {Object.keys(hashTable).map((key) => (
          <div key={key} className={`hash-table-item ${isSearching && searchKey === key ? 'searching' : ''}`}>
            {key}: {hashTable[key]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HashTable;
