import React from 'react';
import { IconWallet } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface AccountNodeProps extends NodeProps<TFNodeData> {}

const AccountNode: React.FC<AccountNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...accountNodeConfig
  }} />;
};

export const accountNodeConfig: Partial<TFNodeData> = {
  icon: <IconWallet className="w-5 h-5" />,
  title: 'TFN-001 Account Node',
  description: 'Manage trading account and API keys',
  nodeType: 'account',
  inputs: [
    {
      id: 'name',
      title: 'Account Name',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter account name'
    },
    {
      id: 'apiKey',
      title: 'API Key',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter API key'
    },
    {
      id: 'apiSecret',
      title: 'API Secret',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter API secret'
    }
  ],
  outputs: [
    {
      id: 'account',
      title: 'Account Info',
      type: 'text'
    }
  ]
};

export default AccountNode;
