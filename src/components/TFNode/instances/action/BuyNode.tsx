import React from 'react';
import { IconArrowUp } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface BuyNodeProps extends NodeProps<TFNodeData> {}

const BuyNode: React.FC<BuyNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...buyNodeConfig
  }} />;
};

export const buyNodeConfig: Partial<TFNodeData> = {
  icon: <IconArrowUp className="w-5 h-5" />,
  title: 'TFN-201 Buy Node',
  description: 'Execute buy orders on exchanges',
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
      placeholder: 'Enter amount to buy'
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

export default BuyNode;
