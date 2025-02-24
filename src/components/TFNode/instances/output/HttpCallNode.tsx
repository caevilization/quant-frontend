import React from 'react';
import { IconWorldWww } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface HttpCallNodeProps extends NodeProps<TFNodeData> {}

const HttpCallNode: React.FC<HttpCallNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...httpCallConfig
  }} />;
};

export const httpCallConfig: Partial<TFNodeData> = {
  icon: <IconWorldWww className="w-5 h-5" />,
  title: 'TFN-403 Http-call Node',
  description: 'Make HTTP requests to external services',
  nodeType: 'output',
  inputs: [
    {
      id: 'url',
      title: 'URL',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter request URL'
    },
    {
      id: 'method',
      title: 'Method',
      type: 'select',
      inputType: 'text',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      value: 'POST'
    },
    {
      id: 'headers',
      title: 'Headers',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter headers in JSON format'
    },
    {
      id: 'body',
      title: 'Request Body',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter request body in JSON format'
    },
    {
      id: 'timeout',
      title: 'Timeout (ms)',
      type: 'number',
      inputType: 'text',
      value: 5000
    }
  ],
  outputs: []
};

export default HttpCallNode;
