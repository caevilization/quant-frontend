import React from 'react';
import { IconFileImport } from '@tabler/icons-react';
import { TFNodeData } from '../../types';
import TFNode from '../../index';
import { NodeProps } from 'reactflow';

interface FileInputNodeProps extends NodeProps<TFNodeData> {}

const FileInputNode: React.FC<FileInputNodeProps> = (props) => {
  return <TFNode {...props} data={{
    ...props.data,
    ...fileInputConfig
  }} />;
};

export const fileInputConfig: Partial<TFNodeData> = {
  icon: <IconFileImport className="w-5 h-5" />,
  title: 'TFN-303 File Input Node',
  description: 'Import and process data from files',
  nodeType: 'input',
  inputs: [
    {
      id: 'filePath',
      title: 'File Path',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter file path or URL'
    },
    {
      id: 'fileType',
      title: 'File Type',
      type: 'select',
      inputType: 'text',
      options: ['CSV', 'JSON', 'Excel', 'Text'],
      value: 'CSV'
    },
    {
      id: 'encoding',
      title: 'Encoding',
      type: 'select',
      inputType: 'text',
      options: ['UTF-8', 'ASCII', 'ISO-8859-1'],
      value: 'UTF-8'
    },
    {
      id: 'delimiter',
      title: 'Delimiter',
      type: 'text',
      inputType: 'text',
      placeholder: 'Enter delimiter (for CSV)',
      value: ','
    }
  ],
  outputs: [
    {
      id: 'data',
      title: 'File Data',
      type: 'text'
    },
    {
      id: 'metadata',
      title: 'File Metadata',
      type: 'text'
    }
  ]
};

export default FileInputNode;
