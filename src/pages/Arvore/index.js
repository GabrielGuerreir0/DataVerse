import React, { useState, useEffect } from 'react';
import './Arvore.css';
import Navbar from '../../components/Navbar';
import Footer from'../../components/Footer';
import Arvoreinte from './itensIntera/arvoreInterativa';


const TreeNode = ({ label, children, delay }) => {
  const [showNode, setShowNode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNode(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showNode ? (
    <div className="node">
      <div className="value">{label}</div>
      <div className="children">{children}</div>
    </div>
  ) : null;
};

const Arvore = () => {
  const [showRoot, setShowRoot] = useState(false);
  const [showChild1, setShowChild1] = useState(false);
  const [showGrandchild1, setShowGrandchild1] = useState(false);
  const [showGrandchild2, setShowGrandchild2] = useState(false);
  const [showChild2, setShowChild2] = useState(false);
  const [showGrandchild3, setShowGrandchild3] = useState(false);

  useEffect(() => {
    const rootTimer = setTimeout(() => setShowRoot(true), 500);
    const child1Timer = setTimeout(() => setShowChild1(true), 1500);
    const grandchild1Timer = setTimeout(() => setShowGrandchild1(true), 2500);
    const grandchild2Timer = setTimeout(() => setShowGrandchild2(true), 3500);
    const child2Timer = setTimeout(() => setShowChild2(true), 4500);
    const grandchild3Timer = setTimeout(() => setShowGrandchild3(true), 5500);

    const resetAnimation = () => {
      setShowRoot(false);
      setShowChild1(false);
      setShowGrandchild1(false);
      setShowGrandchild2(false);
      setShowChild2(false);
      setShowGrandchild3(false);

      setTimeout(() => {
        setShowRoot(true);
        setTimeout(() => setShowChild1(true), 1500);
        setTimeout(() => setShowGrandchild1(true), 2500);
        setTimeout(() => setShowGrandchild2(true), 3500);
        setTimeout(() => setShowChild2(true), 4500);
        setTimeout(() => setShowGrandchild3(true), 5500);
      }, 2000); // Ajustei para 2 segundos
    };

    const resetTimer = setInterval(resetAnimation, 8000); // Mantive em 8 segundos para evitar problemas de sobreposição

    return () => {
      clearTimeout(rootTimer);
      clearTimeout(child1Timer);
      clearTimeout(grandchild1Timer);
      clearTimeout(grandchild2Timer);
      clearTimeout(child2Timer);
      clearTimeout(grandchild3Timer);
      clearInterval(resetTimer);
    };
  }, []);

  return (
  <div className='page'>
    <div><Navbar/></div>

    <div className='titulo_fila' id="inicio"><h2>Árvore</h2></div>
        
        <div className='explicacao'><p> Uma árvore é uma estrutura de dados hierárquica que organiza elementos de forma aninhada, representando relações pai-filho entre os nós. Cada nó possui um valor e pode ter zero ou mais nós filhos, formando uma estrutura arborescente.</p><br/>
        <h4>Componentes Essenciais da Árvore:</h4><br/>
        <p> - Raiz: O nó superior da árvore, que não tem pai e serve como ponto de partida.<br/>
 - Nó: Representa um elemento na árvore, contendo um valor e referências para seus nós filhos.<br/>
 - Arestas: Conexões entre nós que indicam a relação pai-filho.<br/>
 - Folhas: Nós sem filhos, localizados nas extremidades da árvore.
</p><br/>
<h4>Tipos Comuns de Árvores:</h4><br/>
<p>Árvore Binária: Cada nó pode ter no máximo dois filhos, um à esquerda e outro à direita.
Árvore Binária de Busca (BST): Uma árvore binária onde, para cada nó, todos os elementos no subárvore à esquerda são menores e todos os elementos no subárvore à direita são maiores.
Árvore AVL: Uma árvore binária de busca balanceada para otimizar operações de busca, inserção e remoção.
</p><br/>
<h4>Exemplos de Aplicações Práticas:</h4><br/>
<p> - Sistema de Arquivos: Organização hierárquica de pastas e arquivos em um sistema operacional.<br/>
 - Expressões Matemáticas: Representação de expressões matemáticas na forma de uma árvore de expressão.<br/>
 - Árvores Genealógicas: Modelagem de relações familiares em genealogias.
</p><br/>
<h4>Operações Específicas para Árvores Binárias:</h4><br/>
<p> - Altura da Árvore: Número de níveis na árvore, indicando sua profundidade.<br/>
 - Árvore Cheia: Uma árvore binária onde todos os níveis estão completamente preenchidos, exceto, talvez, o último.
</p>

        </div>

    <div className='caixaDeTexto'>
    <div className="tree">
      {showRoot && (
        <TreeNode label="Raiz">
          {showChild1 && (
            <div className="tree-level">
              <TreeNode label="Filho 1">
                <div className="tree-level">
                  {showGrandchild1 && <TreeNode label="Neto 1" />}
                  {showGrandchild2 && <TreeNode label="Neto 2" />}
                </div>
              </TreeNode>
            </div>
          )}
          {showChild2 && (
            <div className="tree-level">
              <TreeNode label="Filho 2">
                <div className="tree-level">
                  {showGrandchild3 && <TreeNode label="Neto 3" />}
                </div>
              </TreeNode>
            </div>
          )}
        </TreeNode>
      )}
    </div></div><div className='explicacao'>
      <h4>Operações e Funcionalidades Principais:</h4><br/>
      <p> - Inserir Nó: Adiciona um novo elemento à árvore, mantendo a estrutura hierárquica.<br/>
 - Remover Nó: Elimina um nó da árvore, ajustando os nós restantes conforme necessário.<br/>
 - Buscar Valor: Localiza um valor específico na árvore, permitindo uma busca eficiente.<br/>
 - Gerar Árvore: Gera uma arvore com valorees aleatorios.
</p><br/>
<p>Ao usar essas funcionalidades, as árvores proporcionam uma estrutura eficaz para organizar dados hierarquicamente. Seja para representar relações em estruturas organizacionais, modelar sistemas de arquivos ou otimizar operações de busca, as árvores oferecem flexibilidade e eficiência.</p>
    </div>
    <Arvoreinte></Arvoreinte>
    <div className='indicador'> <span class="arrow-up">&#x2191;</span><p>Acesse o menu a cima para realizar as operações interativas</p></div>
    <div><Footer/></div> 
    </div>
  );
};

export default Arvore;