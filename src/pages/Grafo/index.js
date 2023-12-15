import React, { useState, useEffect } from 'react';
import './Grafo.css'; 
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Grafo = () => {
  const [drawnNodes, setDrawnNodes] = useState([]);
  const [drawnLinks, setDrawnLinks] = useState([]);
  const [currentColorNode, setCurrentColorNode] = useState(1);

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
    setCurrentColorNode(current => (current % nodes.length) + 1);
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
      <Navbar />
      <div className='titulo_grafo' id="inicio">
        <h2>Grafo</h2>
      </div>

      <div className='explicacao'>
        <p>Um grafo é uma representação visual de conexões entre objetos, usando vértices (pontos) e arestas (linhas). Essa estrutura de dados é como um mapa, onde os vértices são os locais e as arestas são as estradas que os conectam. Pode ser direcionado (com uma direção nas conexões) ou não-direcionado (sem uma direção específica). Grafos são úteis para modelar relacionamentos em situações como redes sociais, rotas de viagem ou qualquer problema que envolva entender e analisar conexões entre diferentes entidades. Além disso, há algoritmos específicos para resolver problemas relacionados a grafos, como encontrar o caminho mais curto entre dois pontos ou identificar grupos de conexões fortes entre vértices.</p><br/>

        <p>Em resumo, um grafo é uma representação visual de como coisas estão conectadas usando pontos e linhas, útil para entender relações entre objetos e resolver questões relacionadas à conectividade de maneira eficiente através de algoritmos específicos.</p>
      </div>

      <div className='caixaDeTexto'>
        <svg className="graph">
          {drawnLinks.map((link, index) => (
            <line
              key={index}
              className="link"
              x1={nodes[link.source - 1].x}
              y1={nodes[link.source - 1].y}
              x2={nodes[link.target - 1].x}
              y2={nodes[link.target - 1].y}
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

      <Footer />
    </div>
  );
};

export default Grafo;
