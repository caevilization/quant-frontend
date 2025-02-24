import React from 'react';
import { IconLayoutDashboard } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface PanelNodeProps extends NodeProps<TFNodeData> {}

const PanelNode: React.FC<PanelNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...panelNodeConfig
  }} />;
};

export const panelNodeConfig: Partial<TFNodeData> = {
  icon: <IconLayoutDashboard className="w-5 h-5" />,
  title: 'TFN-401 Panel Node',
  description: 'Display data in interactive dashboard panels',
  nodeType: 'output',
  inputs: [
    {
      id: 'type',
      title: 'Panel Type',
      type: 'select',
      inputType: 'text',
      options: ['Chart', 'Table', 'Text', 'KPI'],
      value: 'Chart'
    },
    {
      id: 'title',
      title: 'Panel Title',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter panel title'
    },
    {
      id: 'refreshInterval',
      title: 'Refresh Interval (s)',
      type: 'number',
      inputType: 'text',
      value: 5
    },
    {
      id: 'config',
      title: 'Panel Config',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter panel configuration in JSON'
    }
  ],
  outputs: []
};

export default PanelNode;
