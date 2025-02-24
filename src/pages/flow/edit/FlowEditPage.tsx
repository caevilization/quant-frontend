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

// Account Nodes
import AccountNode from '../../../components/TFNode/instances/account/AccountNode';
import BatteryNode from '../../../components/TFNode/instances/account/BatteryNode';

// Compute Nodes
import PromptNode from '../../../components/TFNode/instances/compute/PromptNode';
import ModelNode from '../../../components/TFNode/instances/compute/ModelNode';
import CodeNode from '../../../components/TFNode/instances/compute/CodeNode';

// Action Nodes
import BuyNode from '../../../components/TFNode/instances/action/BuyNode';
import SellNode from '../../../components/TFNode/instances/action/SellNode';
import MirrorNode from '../../../components/TFNode/instances/action/MirrorNode';
import SwapNode from '../../../components/TFNode/instances/action/SwapNode';

// Input Nodes
import MediaListenerNode from '../../../components/TFNode/instances/input/MediaListenerNode';
import MarketListenerNode from '../../../components/TFNode/instances/input/MarketListenerNode';
import FileInputNode from '../../../components/TFNode/instances/input/FileInputNode';

// Output Nodes
import PanelNode from '../../../components/TFNode/instances/output/PanelNode';
import FileOutputNode from '../../../components/TFNode/instances/output/FileOutputNode';
import HttpCallNode from '../../../components/TFNode/instances/output/HttpCallNode';
import MessageNode from '../../../components/TFNode/instances/output/MessageNode';

const nodeTypes = {
  // Account Nodes
  account: AccountNode,
  battery: BatteryNode,

  // Compute Nodes
  prompt: PromptNode,
  model: ModelNode,
  code: CodeNode,

  // Action Nodes
  buy: BuyNode,
  sell: SellNode,
  mirror: MirrorNode,
  swap: SwapNode,

  // Input Nodes
  'media-listener': MediaListenerNode,
  'market-listener': MarketListenerNode,
  'file-input': FileInputNode,

  // Output Nodes
  panel: PanelNode,
  'file-output': FileOutputNode,
  'http-call': HttpCallNode,
  message: MessageNode
};

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];



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
      // 确保所有必需的属性都存在
      if (
        params.source && 
        params.target && 
        params.sourceHandle && 
        params.targetHandle
      ) {
        setEdges((eds) =>
          addEdge(
            {
              animated: true,
              type: 'default',  // 使用默认边类型
              source: params.source,
              target: params.target,
              sourceHandle: params.sourceHandle,
              targetHandle: params.targetHandle,
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
