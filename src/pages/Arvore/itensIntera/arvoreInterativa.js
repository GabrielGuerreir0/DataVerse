import React, { useState, useEffect } from 'react';

// Definição do nó da árvore
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.visited = false; // Adicionando uma propriedade para rastrear nós visitados
  }
}

// Componente da árvore
const Tree = () => {
  const [root, setRoot] = useState(null);
  const [searchPath, setSearchPath] = useState([]);
  const [highlightedNodes, setHighlightedNodes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

// Toggle menu function
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  // Função para inserir um valor na árvore
  const insert = (value, node) => {
    if (!node) return new TreeNode(value);

    if (value < node.value) {
      node.left = insert(value, node.left);
    } else if (value > node.value) {
      node.right = insert(value, node.right);
    }

    return node;
  };

  // Função para buscar um valor na árvore
  const binarySearch = (value, node) => {
    if (!node) return false;

    const visitedNodes = [];
    let currentNode = node;

    while (currentNode) {
      visitedNodes.push(currentNode);

      if (value === currentNode.value) {
        // Marca todos os nós como visitados
        setSearchPath([...visitedNodes]);

        // Destaque todos os nós como vermelhos por 5 segundos
        setHighlightedNodes([...visitedNodes]);
        setTimeout(() => {
          setHighlightedNodes([]);
        }, 5000);

        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  };

  // Função para encontrar o nó com o valor mínimo na subárvore
  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  // Função para excluir um nó da árvore
  const remove = (value, node) => {
    if (!node) return null;

    if (value < node.value) {
      node.left = remove(value, node.left);
      return node;
    } else if (value > node.value) {
      node.right = remove(value, node.right);
      return node;
    } else {
      // Nó sem filhos ou com apenas um filho
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      // Nó com dois filhos
      const minRight = findMinNode(node.right);
      node.value = minRight.value;
      node.right = remove(minRight.value, node.right);
      return node;
    }
  };

  // Função para renderizar o SVG da árvore
  const renderTree = (node, x, y, dx, level) => {
    if (!node) return null;

    const radius = 20;
    const gapX = 50;
    const gapY = 80;

    return (
      <g key={node.value}>
        <circle
          cx={x}
          cy={y}
          r={radius}
          fill={highlightedNodes.includes(node) ? "#ff00f0" : (node.visited ? "#ff0000" : "#9e34eb")} // Altera a cor do círculo se o nó foi visitado ou destacado
          stroke="#000000"
          strokeWidth="2"
        />
        <text x={x} y={y} textAnchor="middle" alignmentBaseline="central">
          {node.value}
        </text>
        {node.left && (
          <>
            <line
              x1={x}
              y1={y + radius}
              x2={x - gapX}
              y2={y + gapY - radius}
              stroke="#000000"
              strokeWidth="2"
            />
            {renderTree(node.left, x - gapX, y + gapY, dx / 2, level + 1)}
          </>
        )}
        {node.right && (
          <>
            <line
              x1={x}
              y1={y + radius}
              x2={x + gapX}
              y2={y + gapY - radius}
              stroke="#000000"
              strokeWidth="2"
            />
            {renderTree(node.right, x + gapX, y + gapY, dx / 2, level + 1)}
          </>
        )}
      </g>
    );
  };

  // Função para adicionar um valor à árvore
  const handleInsert = () => {
    const value = parseInt(prompt('Insira um valor para inserir na árvore:'));
    setRoot(insert(value, root));
  };

  // Função para buscar um valor na árvore
  const handleSearch = () => {
    const value = parseInt(prompt('Insira um valor para buscar na árvore:'));
    setSearchPath([]);
    binarySearch(value, root);
  };

  // Função para excluir um valor da árvore
  const handleRemove = () => {
    const value = parseInt(prompt('Insira um valor para excluir da árvore:'));
    setRoot(remove(value, root));
  };

  // Função para realizar a busca binária na árvore
  const handleBinarySearch = () => {
    const value = parseInt(prompt('Insira um valor para buscar na árvore (busca binária):'));
    setSearchPath([]);
    binarySearch(value, root);
  };

  // Função para gerar uma árvore aleatória
  const generateRandomTree = (min, max, size) => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let tree = null;

    for (let i = 0; i < size; i++) {
      const value = getRandomInt(min, max);
      tree = insert(value, tree);
    }

    setRoot(tree);
  };

  // Efeito para limpar a marcação de nós visitados ao mudar a árvore
  useEffect(() => {
    if (root) markNodesUnvisited(root);
  }, [root]);

  // Função para marcar todos os nós como não visitados
  const markNodesUnvisited = (node) => {
    if (!node) return;
    node.visited = false;
    markNodesUnvisited(node.left);
    markNodesUnvisited(node.right);
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <svg width="800" height="600">
          {root && renderTree(root, 400, 50, 200, 1)}
        </svg>
      </div>
      <div>
      </div>

      <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>      {isMenuOpen && (
        <div className="menu">
          <div className='menu-section'>
        <button className='butaoInteracao' onClick={handleInsert}>Inserir</button>
        <button className='butaoInteracao' onClick={handleSearch}>Buscar</button>
        <button className='butaoInteracao' onClick={handleRemove}>Excluir</button></div>
        <div className='menu-section'>
        <button className='butaoInteracao' onClick={handleBinarySearch}>Busca Binária</button>
        <button className='butaoInteracao' onClick={() => generateRandomTree(1, 100, 10)}>Gerar Árvore Aleatória</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Tree;
