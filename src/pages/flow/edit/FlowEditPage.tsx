import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Node,
  NodeChange,
  EdgeChange,
  Connection,
  addEdge
} from 'reactflow';
import 'reactflow/dist/style.css';

import Navbar from '../../../components/layout/Navbar';
import ComponentPanel from '../../../components/flow/ComponentPanel';
import ChatAssistant from '../../../components/flow/ChatAssistant';
import ChatInputNode from '../../../components/TFNode/instances/ChatInputNode';

const nodeTypes = {
  chatInput: ChatInputNode
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'chatInput',
    position: { x: 250, y: 25 },
    data: {}
  }
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];



const FlowEditPage: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  
  const onDrop = (event: React.DragEvent) => {
    event.preventDefault();
  
    const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
  
    if (typeof type === 'string' && reactFlowBounds) {
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };
  
      const newNode = {
        id: `${type}_${Date.now()}`,
        type,
        position,
        data: {},
      };
  
      setNodes((nds) => nds.concat(newNode));
    }
  };
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => {
      // 确保 source 和 target 都存在
      if (params.source && params.target) {
        setEdges((eds) =>
          addEdge(
            {
              ...params,
              animated: true,
              type: 'default',  // 使用默认边类型
              source: params.source,
              target: params.target,
            },
            eds
          )
        );
      }
    },
    []
  );

  return (
    <div className="h-screen flex flex-col bg-tf-dark-gray">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {/* Component Panel */}
        <div className="w-1/4 overflow-y-auto">
          <ComponentPanel />
        </div>

        {/* Flow Editor */}
        <div className="w-3/4 h-full bg-tf-black">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView onDragOver={onDragOver} onDrop={onDrop}>
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>

      {/* Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default FlowEditPage;
