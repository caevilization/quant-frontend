import React from 'react';
import { IconArrowsExchange } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface SwapNodeProps extends NodeProps<TFNodeData> {}

const SwapNode: React.FC<SwapNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...swapNodeConfig
  }} />;
};

export const swapNodeConfig: Partial<TFNodeData> = {
  icon: <IconArrowsExchange className="w-5 h-5" />,
  title: 'TFN-204 Swap Node',
  description: 'Perform token swaps on DEX platforms',
  nodeType: 'action',
  inputs: [
    {
      id: 'fromToken',
      title: 'From Token',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter source token'
    },
    {
      id: 'toToken',
      title: 'To Token',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter target token'
    },
    {
      id: 'amount',
      title: 'Amount',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter amount to swap'
    },
    {
      id: 'slippage',
      title: 'Slippage (%)',
      type: 'number',
      inputType: 'text',
      value: 0.5
    },
    {
      id: 'dex',
      title: 'DEX',
      type: 'select',
      inputType: 'text',
      options: ['Uniswap', 'SushiSwap', 'PancakeSwap', 'Auto'],
      value: 'Auto'
    }
  ],
  outputs: [
    {
      id: 'txHash',
      title: 'Transaction Hash',
      type: 'text'
    },
    {
      id: 'status',
      title: 'Swap Status',
      type: 'text'
    }
  ]
};

export default SwapNode;
