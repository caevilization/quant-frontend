import React from 'react';
import { IconPrompt } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface PromptNodeProps extends NodeProps<TFNodeData> {}

const PromptNode: React.FC<PromptNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...promptNodeConfig
  }} />;
};

export const promptNodeConfig: Partial<TFNodeData> = {
  icon: <IconPrompt className="w-5 h-5" />,
  title: 'TFN-101 Prompt Node',
  description: 'Design and manage prompts for AI models',
  nodeType: 'compute',
  inputs: [
    {
      id: 'template',
      title: 'Prompt Template',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter prompt template with {variables}'
    },
    {
      id: 'variables',
      title: 'Variables',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter comma-separated variable names'
    },
    {
      id: 'maxTokens',
      title: 'Max Tokens',
      type: 'number',
      inputType: 'text',
      value: 500
    }
  ],
  outputs: [
    {
      id: 'prompt',
      title: 'Generated Prompt',
      type: 'text'
    }
  ]
};

export default PromptNode;
