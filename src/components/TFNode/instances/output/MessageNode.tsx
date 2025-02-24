import React from 'react';
import { IconMessage } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface MessageNodeProps extends NodeProps<TFNodeData> {}

const MessageNode: React.FC<MessageNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...messageNodeConfig
  }} />;
};

export const messageNodeConfig: Partial<TFNodeData> = {
  icon: <IconMessage className="w-5 h-5" />,
  title: 'TFN-404 Message Node',
  description: 'Send notifications through various channels',
  nodeType: 'output',
  inputs: [
    {
      id: 'channel',
      title: 'Channel',
      type: 'select',
      inputType: 'text',
      options: ['Email', 'SMS', 'Telegram', 'Discord', 'Slack'],
      value: 'Email'
    },
    {
      id: 'recipient',
      title: 'Recipient',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter recipient address'
    },
    {
      id: 'subject',
      title: 'Subject',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter message subject'
    },
    {
      id: 'template',
      title: 'Message Template',
      type: 'paragraph',
      inputType: 'text',
      placeholder: 'Enter message template with {variables}'
    },
    {
      id: 'priority',
      title: 'Priority',
      type: 'select',
      inputType: 'text',
      options: ['Low', 'Normal', 'High', 'Urgent'],
      value: 'Normal'
    }
  ],
  outputs: []
};

export default MessageNode;
