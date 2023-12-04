import React, { useState } from 'react';

const TabelaHash = () => {
  const [tabelaHash, setTabelaHash] = useState(new Array(10).fill(null).map(() => []));
  const [chavePesquisa, setChavePesquisa] = useState('');
  const [chaveInsercao, setChaveInsercao] = useState('');
  const [valorInsercao, setValorInsercao] = useState('');

  const hash = (chave) => {
    let hash = 0;
    for (let i = 0; i < chave.length; i++) {
      hash += chave.charCodeAt(i);
    }
    return hash % tabelaHash.length;
  };

  const pesquisarEntrada = () => {
    if (chavePesquisa.trim() !== '') {
      const indice = hash(chavePesquisa);
      const bucket = tabelaHash[indice];
      const entradaEncontrada = bucket.find((entrada) => entrada.chave === chavePesquisa);
      if (entradaEncontrada) {
        alert(`Valor encontrado para a chave ${chavePesquisa}: ${entradaEncontrada.valor}`);
      } else {
        alert(`Nenhum valor encontrado para a chave ${chavePesquisa}`);
      }
      setChavePesquisa('');
    }
  };

  const adicionarEntrada = () => {
    if (chaveInsercao.trim() !== '' && valorInsercao.trim() !== '') {
      const indice = hash(chaveInsercao);
      const tabelaAtualizada = [...tabelaHash];
      tabelaAtualizada[indice].push({ chave: chaveInsercao, valor: valorInsercao });
      setTabelaHash(tabelaAtualizada);
      setChaveInsercao('');
      setValorInsercao('');
    }
  };

  const removerEntrada = () => {
    if (chavePesquisa.trim() !== '') {
      const indice = hash(chavePesquisa);
      const tabelaAtualizada = [...tabelaHash];
      tabelaAtualizada[indice] = tabelaAtualizada[indice].filter((entrada) => entrada.chave !== chavePesquisa);
      setTabelaHash(tabelaAtualizada);
      setChavePesquisa('');
    }
  };

  return (
    <div>
      <h2>Tabela Hash</h2>
      <div>
        <label>
          Pesquisar Chave:
          <input
            type="text"
            value={chavePesquisa}
            onChange={(e) => setChavePesquisa(e.target.value)}
          />
          <button onClick={pesquisarEntrada}>Pesquisar</button>
        </label>
      </div>
      <div>
        <label>
          Inserir Chave:
          <input
            type="text"
            value={chaveInsercao}
            onChange={(e) => setChaveInsercao(e.target.value)}
          />
        </label>
        <label>
          Valor:
          <input
            type="text"
            value={valorInsercao}
            onChange={(e) => setValorInsercao(e.target.value)}
          />
          <button onClick={adicionarEntrada}>Inserir</button>
        </label>
      </div>
      <div>
        <label>
          Remover Chave:
          <input
            type="text"
            value={chavePesquisa}
            onChange={(e) => setChavePesquisa(e.target.value)}
          />
          <button onClick={removerEntrada}>Remover</button>
        </label>
      </div>
      <div>
        <h3>Tabela Hash:</h3>
        {tabelaHash.map((bucket, indice) => (
          <div key={indice}>
            Bucket {indice}:
            <ul>
              {bucket.map((entrada, indiceEntrada) => (
                <li key={indiceEntrada}>
                  {entrada.chave}: {entrada.valor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabelaHash;
