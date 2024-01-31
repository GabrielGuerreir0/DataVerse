// src/Tree.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Tree.css';

const TreeNode = ({ node, onToggle, onAddChild }) => {
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: node.isOpen ? 'auto' : 0, opacity: node.isOpen ? 1 : 0 },
  });

  return (
    <div className="tree-node">
      <div onClick={() => onToggle(node.id)}>{node.name}</div>
      <animated.div style={{ height, opacity }}>
        {node.children &&
          node.children.map(child => (
            <TreeNode key={child.id} node={child} onToggle={onToggle} onAddChild={onAddChild} />
          ))}
      </animated.div>
      <div className="tree-node-buttons">
        <button onClick={() => onAddChild(node.id)}>Add Child</button>
      </div>
    </div>
  );
};

const Tree = ({ treeData, onToggle, onAddChild }) => {
  return (
    <div className="tree">
      <TreeNode node={treeData} onToggle={onToggle} onAddChild={onAddChild} />
    </div>
  );
};

export default Tree;
