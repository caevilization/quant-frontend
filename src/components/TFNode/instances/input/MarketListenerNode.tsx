import React from 'react';
import { IconChartBar } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface MarketListenerNodeProps extends NodeProps<TFNodeData> {}

const MarketListenerNode: React.FC<MarketListenerNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...marketListenerConfig
  }} />;
};

export const marketListenerConfig: Partial<TFNodeData> = {
  icon: <IconChartBar className="w-5 h-5" />,
  title: 'TFN-302 Market Listener Node',
  description: 'Monitor market data and price movements',
  nodeType: 'input',
  inputs: [
    {
      id: 'symbol',
      title: 'Symbol',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter trading pair (e.g. BTC/USDT)'
    },
    {
      id: 'exchange',
      title: 'Exchange',
      type: 'select',
      inputType: 'text',
      options: ['Binance', 'Coinbase', 'Uniswap', 'Aggregate'],
      value: 'Aggregate'
    },
    {
      id: 'dataType',
      title: 'Data Type',
      type: 'multiselect',
      inputType: 'text',
      options: ['Price', 'Volume', 'OrderBook', 'Trades'],
      value: ['Price']
    },
    {
      id: 'interval',
      title: 'Update Interval (s)',
      type: 'number',
      inputType: 'text',
      value: 1
    }
  ],
  outputs: [
    {
      id: 'marketData',
      title: 'Market Data',
      type: 'text'
    },
    {
      id: 'metadata',
      title: 'Data Metadata',
      type: 'text'
    }
  ]
};

export default MarketListenerNode;
