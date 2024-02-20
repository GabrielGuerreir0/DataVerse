import React, { useState, useEffect } from 'react';
import './Grafo.css'; 
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Grafointer from './elementos/Grafointer';

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
        <p>Um grafo é uma estrutura de dados que representa relações entre elementos por meio de vértices (ou nós) e arestas (ou arcos) que conectam esses vértices. Essa abstração poderosa permite modelar uma variedade de situações do mundo real, desde redes sociais até mapas de estradas.</p><br/>
        <h4>Componentes Fundamentais do Grafo:</h4><br/>
        <p> - Vértices (Nós): Representam entidades ou pontos no grafo.<br/>
 - Arestas (Arcos): Conexões entre pares de vértices, representando relações ou links.
</p><br/>
<h4>Tipos Comuns de Grafos:
</h4><br/>
<p>Grafo Direcionado (Orientado): As arestas têm uma direção específica, indicando uma relação de um vértice de origem para um vértice de destino.
Grafo Não Direcionado: As arestas não têm uma direção específica, representando relações bidirecionais entre vértices.
</p><br/>
<h4>Exemplos de Aplicações Práticas:
</h4> <br/>
<p> - Redes Sociais: Modelagem de amizades ou conexões entre usuários.<br/>
 - Sistemas de Navegação: Representação de ruas e interseções em mapas.<br/>
 - Grafos de Dependência: Visualização de dependências entre tarefas em projetos.
</p><br/>
<h4>Operações Específicas para Grafos Direcionados:</h4><br/>

        <p>Grau de Entrada e Saída: Número de arestas que entram ou saem de um vértice, respectivamente.<br/>
Ordenação Topológica: Organização de vértices de forma que todas as arestas apontem para a direita.
</p>
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
<div className='explicacao'>
  <h4>Operações e Funcionalidades Principais:</h4><br/>
  <p> - Gerar Grafo: Gera um Grafo especifico ou aleatorio.<br/>
     - Inserir ao Grafo: Inclui um novo nó ao grafo.<br/>
     - Excluir valor: Elimina um no pesente no grafo.<br/>
     - Buscar valor: Burca um valor dentro do grafo percorendo o caminho ate ele.
  </p> <br/>

  <p>Ao utilizar essas funcionalidades, os grafos se tornam ferramentas poderosas para modelar e entender conexões complexas. Seja para análise de redes, otimização de rotas ou representação de relacionamentos, os grafos oferecem uma estrutura flexível e abrangente.</p>

</div>

            <Grafointer></Grafointer>
            <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
      <Footer />
    </div>
  );
};

export default Grafo;

