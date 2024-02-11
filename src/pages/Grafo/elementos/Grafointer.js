import React, { useState, useEffect } from 'react';
import './Grafointer.css';

const Grafointer = () => {
    const [drawnNodes, setDrawnNodes] = useState([]);
    const [drawnLinks, setDrawnLinks] = useState([]);
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

  const [searchedNodeId, setSearchedNodeId] = useState(null); // Novo estado para armazenar o ID do nó buscado

  const nodes = [
    { id: 1, x: 100, y: 100 },
    { id: 2, x: 250, y: 50 },
    { id: 3, x: 400, y: 100 },
    { id: 4, x: 250, y: 200 },
    { id: 5, x: 150, y: 250 },
  ];

  const links = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 5 },
    { source: 5, target: 1 },
    { source: 1, target: 3 },
    { source: 3, target: 5 },
    { source: 5, target: 2 },
    { source: 2, target: 4 },
    { source: 4, target: 1 },
  ];

  const changeNodeColor = () => {
    setCurrentColorNode(current => (current % drawnNodes.length) + 1); // Mudança aqui para usar drawnNodes
  };

  const insertNode = () => {
    const newNodeValue = parseInt(prompt('Insira o valor para o novo nó:'));
    const existingNode = drawnNodes.find(node => node.id === newNodeValue);
    if (existingNode) {
      alert(`Valor ${newNodeValue} foi adicionado ao nó ${existingNode.id} já existente.`);
      return;
    }

    const sortedNodes = [...drawnNodes].sort((a, b) => a.id - b.id); // Sort nodes by id
    let connectedNode = null;
    for (let i = 0; i < sortedNodes.length; i++) {
      if (sortedNodes[i].id < newNodeValue) {
        connectedNode = sortedNodes[i];
        break;
      }
    }

    const newNodeId = drawnNodes.length + 1; // Corrected
    const newNode = { id: newNodeValue, x: Math.random() * 500, y: Math.random() * 300 };
    const newNodes = [...drawnNodes, newNode];
    let newLinks = [...drawnLinks];
    if (connectedNode) {
      newLinks = [...drawnLinks, { source: connectedNode.id, target: newNodeId }];
    }
    setDrawnNodes(newNodes);
    setDrawnLinks(newLinks);
    changeNodeColor();
  };

  const searchNode = () => {
    const searchValue = parseInt(prompt('Insira o valor do nó a ser buscado:'));
    const node = drawnNodes.find(node => node.id === searchValue); // Mudança aqui para buscar em drawnNodes
    if (node) {
      setCurrentColorNode(node.id);
    } else {
      alert('Node not found!');
    }
    // Adicionando um pequeno atraso após a busca
    setTimeout(() => {
      setCurrentColorNode(null); // Limpa o valor após 1 segundo
    }, 1000);
  };

  const deleteNode = () => {
    const deleteValue = parseInt(prompt('Insira o valor do nó a ser excluído:'));
    const updatedNodes = drawnNodes.filter(node => node.id !== deleteValue);
    const updatedLinks = drawnLinks.filter(link => link.source !== deleteValue && link.target !== deleteValue);
    setDrawnNodes(updatedNodes);
    setDrawnLinks(updatedLinks);
  };

  const clearGraph = () => {
    setDrawnNodes([]);
    setDrawnLinks([]);
  };

  const generateRandomGraph = () => {
    const randomNodes = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 500,
      y: Math.random() * 300
    }));
    const randomLinks = [];
    for (let i = 0; i < randomNodes.length; i++) {
      const source = randomNodes[i].id;
      const target = Math.floor(Math.random() * randomNodes.length) + 1;
      if (source !== target) {
        randomLinks.push({ source, target });
      }
    }
    setDrawnNodes(randomNodes);
    setDrawnLinks(randomLinks);
    setCurrentColorNode(1);
  };

  const generateSpecificGraph = () => {
    const newNodes = [];
    alert('Insira os valores para os nós específicos.');
    for (let i = 0; i < 5; i++) {
      const nodeValue = parseInt(prompt(`Insira o valor para o nó ${i + 1}:`));
      newNodes.push({ id: nodeValue, x: Math.random() * 500, y: Math.random() * 300 });
    }
    const newLinks = links.map(link => ({ ...link }));
    setDrawnNodes(newNodes);
    setDrawnLinks(newLinks);
    setCurrentColorNode(1);
  };

  useEffect(() => {
    let timeout = 0;

    nodes.forEach((node, index) => {
      timeout += 500; // Tempo de espera entre cada nó (em milissegundos)
      setTimeout(() => {
        setDrawnNodes(nodes.slice(0, index + 1));
        if (index === nodes.length - 1) {
          links.forEach((link, linkIndex) => {
            timeout += 1000; // Tempo de espera entre cada link (em milissegundos)
            setTimeout(() => {
              setDrawnLinks(links.slice(0, linkIndex + 1));
              if (linkIndex === links.length - 1) {
                setInterval(() => {
                  changeNodeColor();
                }, 2000); // Mudança de cor a cada 2 segundos
              }
            }, timeout);
          });
        }
      }, timeout);
    });
  }, []);

  return (
    <div className='page'>

      <div className='caixaDeTexto'>
        
        <svg className="graph">
          {drawnLinks.map((link, index) => (
            <line
              key={index}
              className="link"
              x1={drawnNodes[link.source - 1].x}
              y1={drawnNodes[link.source - 1].y}
              x2={drawnNodes[link.target - 1].x}
              y2={drawnNodes[link.target - 1].y}
            />
          ))}
          {drawnNodes.map(node => (
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
          <button id='buttom-menu' onClick={toggleMenu}>Menu</button>
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
