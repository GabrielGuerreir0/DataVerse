import React, { useState } from 'react';
import './Grafointer.css';

const Grafointer = () => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentColorNode, setCurrentColorNode] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOperationClick = (operation) => {
    setSelectedOperation(operation);
    switch (operation) {
      case 'Gerar Grafo Aleatório':
        generateRandomGraph();
        break;
      case 'Gerar Grafo Específico':
        generateSpecificGraph();
        break;
      case 'Limpar Grafo':
        clearGraph();
        break;
      case 'Inserir novo nó':
        insertNode();
        break;
      case 'Excluir nó':
        deleteNode();
        break;
      case 'Buscar nó':
        searchNode();
        break;
      default:
        break;
    }
    toggleMenu(); // Fechar o menu após a seleção da operação
  };

  const changeNodeColor = () => {
    setCurrentColorNode(current => (current % nodes.length) + 1);
  };

  const insertNode = () => {
    const newNodeValue = parseInt(prompt('Insira o valor para o novo nó:'));
    if (isNaN(newNodeValue)) {
      alert('Valor inválido. Insira um número.');
      return;
    }

    if (nodes.find(node => node.id === newNodeValue)) {
      alert(`O nó com valor ${newNodeValue} já existe.`);
      return;
    }

    const newNode = { id: newNodeValue, x: Math.random() * 500, y: Math.random() * 300 };
    setNodes([...nodes, newNode]);
    changeNodeColor();
  };

  const searchNode = () => {
    const searchValue = parseInt(prompt('Insira o valor do nó a ser buscado:'));
    const node = nodes.find(node => node.id === searchValue);
    if (node) {
      setCurrentColorNode(node.id);
    } else {
      alert('Nó não encontrado!');
    }
  };

  const deleteNode = () => {
    const deleteValue = parseInt(prompt('Insira o valor do nó a ser excluído:'));
    setNodes(nodes.filter(node => node.id !== deleteValue));
    setLinks(links.filter(link => link.source !== deleteValue && link.target !== deleteValue));
  };

  const clearGraph = () => {
    setNodes([]);
    setLinks([]);
  };

  const generateRandomGraph = () => {
    const numNodes = Math.floor(Math.random() * 5) + 1;
    const randomNodes = Array.from({ length: numNodes }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 500,
      y: Math.random() * 300
    }));
    const randomLinks = [];
    for (let i = 0; i < numNodes; i++) {
      const source = randomNodes[i].id;
      const target = Math.floor(Math.random() * numNodes) + 1;
      if (source !== target) {
        randomLinks.push({ source, target });
      }
    }
    setNodes(randomNodes);
    setLinks(randomLinks);
    setCurrentColorNode(1);
  };

  const generateSpecificGraph = () => {
    const newNodes = [];
    alert('Insira os valores para os nós específicos.');
    for (let i = 0; i < 5; i++) {
      const nodeValue = parseInt(prompt(`Insira o valor para o nó ${i + 1}:`));
      newNodes.push({ id: nodeValue, x: Math.random() * 500, y: Math.random() * 300 });
    }
    const newLinks = [];
    setNodes(newNodes);
    setLinks(newLinks);
    setCurrentColorNode(1);
  };

  return (
    <div>
      <div className='caixaDeTexto'>
        <svg className="graph">
          {links.map((link, index) => (
            <line
              key={index}
              className="link"
              x1={nodes[link.source - 1].x}
              y1={nodes[link.source - 1].y}
              x2={nodes[link.target - 1].x}
              y2={nodes[link.target - 1].y}
            />
          ))}
          {nodes.map(node => (
            <g key={node.id}>
              <circle
                className={node.id === currentColorNode ? 'node active' : 'node'}
                cx={node.x}
                cy={node.y}
                r={20}
              />
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill="#fff"
                fontSize="16"
              >
                {node.id}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div>
        <button id='buttom-menu' onClick={toggleMenu}>Acesse o Menu</button>
        {isMenuOpen && (
          <div className="menu">
            <div className='menu-section'>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Gerar Grafo Aleatório')}>Gerar Grafo Aleatório</button>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Gerar Grafo Específico')}>Gerar Grafo Específico</button>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Limpar Grafo')}>Limpar Grafo</button></div>
            <div className='menu-section'>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Inserir novo nó')}>Inserir novo nó</button>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Excluir nó')}>Excluir nó</button>
              <button className='butaoInteracao' onClick={() => handleOperationClick('Buscar nó')}>Buscar nó</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Grafointer;
