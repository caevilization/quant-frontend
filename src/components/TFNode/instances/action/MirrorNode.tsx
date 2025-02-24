import React from 'react';
import { IconCopy } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface MirrorNodeProps extends NodeProps<TFNodeData> {}

const MirrorNode: React.FC<MirrorNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...mirrorNodeConfig
  }} />;
};

export const mirrorNodeConfig: Partial<TFNodeData> = {
  icon: <IconCopy className="w-5 h-5" />,
  title: 'TFN-203 Mirror Node',
  description: 'Mirror trades from other accounts or traders',
  nodeType: 'action',
  inputs: [
    {
      id: 'source',
      title: 'Source',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter source account or trader ID'
    },
    {
      id: 'multiplier',
      title: 'Size Multiplier',
      type: 'number',
      inputType: 'text',
      value: 1
    },
    {
      id: 'delay',
      title: 'Delay (ms)',
      type: 'number',
      inputType: 'text',
      value: 0
    },
    {
      id: 'filters',
      title: 'Trade Filters',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter trade filters (e.g. min size)'
    }
  ],
  outputs: [
    {
      id: 'trades',
      title: 'Mirrored Trades',
      type: 'text'
    },
    {
      id: 'status',
      title: 'Mirror Status',
      type: 'text'
    }
  ]
};

export default MirrorNode;
