import React from 'react';
import { IconBrain } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface ModelNodeProps extends NodeProps<TFNodeData> {}

const ModelNode: React.FC<ModelNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...modelNodeConfig
  }} />;
};

export const modelNodeConfig: Partial<TFNodeData> = {
  icon: <IconBrain className="w-5 h-5" />,
  title: 'TFN-102 Model Node',
  description: 'Execute AI models for analysis and prediction',
  nodeType: 'compute',
  inputs: [
    {
      id: 'model',
      title: 'Model',
      type: 'select',
      inputType: 'text',
      options: ['GPT-4', 'GPT-3.5', 'Claude', 'Custom'],
      value: 'GPT-4'
    },
    {
      id: 'temperature',
      title: 'Temperature',
      type: 'number',
      inputType: 'text',
      value: 0.7
    },
    {
      id: 'systemPrompt',
      title: 'System Prompt',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter system prompt'
    }
  ],
  outputs: [
    {
      id: 'response',
      title: 'Model Response',
      type: 'text'
    },
    {
      id: 'tokens',
      title: 'Token Usage',
      type: 'text'
    }
  ]
};

export default ModelNode;
