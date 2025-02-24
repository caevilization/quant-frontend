import React from 'react';
import { IconCode } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface CodeNodeProps extends NodeProps<TFNodeData> {}

const CodeNode: React.FC<CodeNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...codeNodeConfig
  }} />;
};

export const codeNodeConfig: Partial<TFNodeData> = {
  icon: <IconCode className="w-5 h-5" />,
  title: 'TFN-103 Code Node',
  description: 'Execute custom Python code for data processing',
  nodeType: 'compute',
  inputs: [
    {
      id: 'code',
      title: 'Python Code',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter Python code'
    },
    {
      id: 'requirements',
      title: 'Requirements',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter required packages'
    },
    {
      id: 'timeout',
      title: 'Timeout (s)',
      type: 'number',
      inputType: 'text',
      value: 30
    }
  ],
  outputs: [
    {
      id: 'result',
      title: 'Execution Result',
      type: 'text'
    },
    {
      id: 'logs',
      title: 'Execution Logs',
      type: 'text'
    }
  ]
};

export default CodeNode;
