import React from 'react';
import { IconNews } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface MediaListenerNodeProps extends NodeProps<TFNodeData> {}

const MediaListenerNode: React.FC<MediaListenerNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...mediaListenerConfig
  }} />;
};

export const mediaListenerConfig: Partial<TFNodeData> = {
  icon: <IconNews className="w-5 h-5" />,
  title: 'TFN-301 Media Listener Node',
  description: 'Monitor and analyze media content',
  nodeType: 'input',
  inputs: [
    {
      id: 'sources',
      title: 'Sources',
      type: 'multiselect',
      inputType: 'text',
      options: ['Twitter', 'Discord', 'Reddit', 'Telegram', 'News'],
      value: ['Twitter']
    },
    {
      id: 'keywords',
      title: 'Keywords',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter keywords to monitor'
    },
    {
      id: 'language',
      title: 'Language',
      type: 'select',
      inputType: 'text',
      options: ['All', 'English', 'Chinese', 'Japanese', 'Korean'],
      value: 'All'
    },
    {
      id: 'interval',
      title: 'Update Interval (s)',
      type: 'number',
      inputType: 'text',
      value: 60
    }
  ],
  outputs: [
    {
      id: 'content',
      title: 'Media Content',
      type: 'text'
    },
    {
      id: 'metadata',
      title: 'Content Metadata',
      type: 'text'
    }
  ]
};

export default MediaListenerNode;
