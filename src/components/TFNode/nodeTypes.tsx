import { IconBrandTwitter, IconChartLine, IconNews, IconUsers, IconBrain, IconCode, IconExchange, IconDownload, IconServer, IconMessage } from '@tabler/icons-react';
// Account Nodes
import { accountNodeConfig } from './instances/account/AccountNode';
import { batteryNodeConfig } from './instances/account/BatteryNode';

// Compute Nodes
import { promptNodeConfig } from './instances/compute/PromptNode';
import { modelNodeConfig } from './instances/compute/ModelNode';
import { codeNodeConfig } from './instances/compute/CodeNode';

// Action Nodes
import { buyNodeConfig } from './instances/action/BuyNode';
import { sellNodeConfig } from './instances/action/SellNode';
import { mirrorNodeConfig } from './instances/action/MirrorNode';
import { swapNodeConfig } from './instances/action/SwapNode';

// Input Nodes
import { mediaListenerConfig } from './instances/input/MediaListenerNode';
import { marketListenerConfig } from './instances/input/MarketListenerNode';
import { fileInputConfig } from './instances/input/FileInputNode';

// Output Nodes
import { panelNodeConfig } from './instances/output/PanelNode';
import { fileOutputConfig } from './instances/output/FileOutputNode';
import { httpCallConfig } from './instances/output/HttpCallNode';
import { messageNodeConfig } from './instances/output/MessageNode';

// Account Nodes
export const accountNode = accountNodeConfig;
export const batteryNode = batteryNodeConfig;

// Compute Nodes
export const promptNode = promptNodeConfig;
export const modelNode = modelNodeConfig;
export const codeNode = codeNodeConfig;

// Action Nodes
export const buyNode = buyNodeConfig;
export const sellNode = sellNodeConfig;
export const mirrorNode = mirrorNodeConfig;
export const swapNode = swapNodeConfig;

// Input Nodes
export const mediaListenerNode = mediaListenerConfig;
export const marketListenerNode = marketListenerConfig;
export const fileInputNode = fileInputConfig;

// Output Nodes
export const panelNode = panelNodeConfig;
export const fileOutputNode = fileOutputConfig;
export const httpCallNode = httpCallConfig;
export const messageNode = messageNodeConfig;
