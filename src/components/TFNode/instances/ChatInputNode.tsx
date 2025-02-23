import React from 'react';
import { NodeProps } from 'reactflow';
import TFNode from '..';
import { TFNodeData } from '../types';

const defaultData: TFNodeData = {
  title: 'Chat Input',
  description: 'Get chat inputs from user',
  nodeType: 'compute',
  parameters: [
    {
      id: 'text',
      title: 'Text',
      tooltip: 'Info Logo',
      type: 'text',
      inputType: 'text',
      placeholder: 'Hello',
      value: ''
    }
  ],
  outputs: [
    {
      id: 'message',
      title: 'Message',
      type: 'text'
    }
  ]
};

const ChatInputNode: React.FC<NodeProps> = (props) => {
  return <TFNode {...props} data={defaultData} />;
};

export default ChatInputNode;
