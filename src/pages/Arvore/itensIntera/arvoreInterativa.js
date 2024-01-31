// src/App.js
import React, { useState } from 'react';
import Tree from './Tree.js';

const generateRandomId = () => Math.random().toString(36).substring(7);

const Arvoreinterativa = () => {
  const [treeData, setTreeData] = useState({
    id: generateRandomId(),
    name: 'Root',
    children: [],
    isOpen: true,
  });

  const toggleNode = nodeId => {
    setTreeData(toggleNodeRecursive(treeData, nodeId));
  };

  const toggleNodeRecursive = (node, nodeId) => {
    if (node.id === nodeId) {
      node.isOpen = !node.isOpen;
    } else if (node.children) {
      node.children = node.children.map(child => toggleNodeRecursive(child, nodeId));
    }
    return node;
  };

  const addChild = parentId => {
    const newChild = {
      id: generateRandomId(),
      name: `Child of ${parentId}`,
      children: [],
      isOpen: true,
    };

    setTreeData(addChildRecursive(treeData, parentId, newChild));
  };

  const addChildRecursive = (node, parentId, newChild) => {
    if (node.id === parentId) {
      if (!node.children) {
        node.children = [];
      }
      node.children.push(newChild);
    } else if (node.children) {
      node.children = node.children.map(child => addChildRecursive(child, parentId, newChild));
    }
    return node;
  };

  const generateRandomTree = () => {
    const randomTree = generateRandomTreeNode(3);
    setTreeData(randomTree);
  };

  const generateRandomTreeNode = depth => {
    if (depth <= 0) {
      return { id: generateRandomId(), name: 'Leaf', children: [], isOpen: false };
    }

    const id = generateRandomId();
    const name = `Node ${id.substring(0, 3)}`;
    const children = Array.from({ length: Math.floor(Math.random() * 3) }, () =>
      generateRandomTreeNode(depth - 1)
    );

    return { id, name, children, isOpen: true };
  };

  return (
    <div>
      <h1>Interactive Tree</h1>
      <div>
        <button onClick={generateRandomTree}>Generate Random Tree</button>
      </div>
      <Tree treeData={treeData} onToggle={toggleNode} onAddChild={addChild} />
    </div>
  );
};

export default Arvoreinterativa;
