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
        
        <div className='explicacao'><p> Uma árvore de dados é uma estrutura que organiza informações de forma hierárquica, similar aos galhos de uma árvore. Ela começa com um nó central, chamado de "nó raiz", que se ramifica em outros nós, chamados de "nós filhos". Cada nó pode ter seus próprios nós filhos, criando ramos e sub-ramos. Essa estrutura é útil para armazenar e acessar dados de maneira organizada e eficiente, facilitando operações como busca, inserção e exclusão de informações.</p><br/>

        <p>Essas árvores são amplamente utilizadas em computação para resolver diversos problemas, como na criação de bancos de dados, em algoritmos de busca e ordenação, visto que permitem uma busca eficiente e ordenada dos dados, seguindo a estrutura ramificada e hierárquica dos nós.</p><br/>

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
    </div></div>
    <Arvoreinte></Arvoreinte>
    <div><Footer/></div> 
    </div>
  );
};

export default Arvore;