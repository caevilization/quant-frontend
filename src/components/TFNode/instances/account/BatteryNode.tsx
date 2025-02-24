import React from 'react';
import { IconBattery } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface BatteryNodeProps extends NodeProps<TFNodeData> {}

const BatteryNode: React.FC<BatteryNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...batteryNodeConfig
  }} />;
};

export const batteryNodeConfig: Partial<TFNodeData> = {
  icon: <IconBattery className="w-5 h-5" />,
  title: 'TFN-002 Battery Node',
  description: 'Manage trading capital and risk limits',
  nodeType: 'account',
  inputs: [
    {
      id: 'initialCapital',
      title: 'Initial Capital',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter initial capital'
    },
    {
      id: 'riskLimit',
      title: 'Risk Limit (%)',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter risk limit percentage',
      value: 2
    },
    {
      id: 'maxDrawdown',
      title: 'Max Drawdown (%)',
      type: 'number',
      inputType: 'text',
      placeholder: 'Enter maximum drawdown percentage',
      value: 10
    }
  ],
  outputs: [
    {
      id: 'capital',
      title: 'Available Capital',
      type: 'text'
    },
    {
      id: 'risk',
      title: 'Risk Metrics',
      type: 'text'
    }
  ]
};

export default BatteryNode;
