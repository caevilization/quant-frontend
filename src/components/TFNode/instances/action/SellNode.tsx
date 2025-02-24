import React from 'react';
import { IconArrowDown } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface SellNodeProps extends NodeProps<TFNodeData> {}

const SellNode: React.FC<SellNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...sellNodeConfig
  }} />;
};

export const sellNodeConfig: Partial<TFNodeData> = {
  icon: <IconArrowDown className="w-5 h-5" />,
  title: 'TFN-202 Sell Node',
  description: 'Execute sell orders on exchanges',
  nodeType: 'action',
  inputs: [
    {
      id: 'symbol',
      title: 'Symbol',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter trading pair (e.g. BTC/USDT)'
    },
    {
      id: 'amount',
      title: 'Amount',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter amount to sell'
    },
    {
      id: 'orderType',
      title: 'Order Type',
      type: 'select',
      inputType: 'text',
      options: ['Market', 'Limit', 'Stop-Limit'],
      value: 'Market'
    },
    {
      id: 'price',
      title: 'Price',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter price (for Limit orders)'
    }
  ],
  outputs: [
    {
      id: 'orderId',
      title: 'Order ID',
      type: 'text'
    },
    {
      id: 'status',
      title: 'Order Status',
      type: 'text'
    }
  ]
};

export default SellNode;
