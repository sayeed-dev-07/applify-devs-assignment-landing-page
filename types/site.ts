import type { ComponentType } from 'react';

export type IconComponent = ComponentType<{ className?: string; size?: number }>;

export interface NavigationItem {
  name?: string;
  label?: string;
  iconKey?: string;
  isPrimary?: boolean;
  pro?: boolean;
  link?: string;
  targetBlank?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: string;
  monthlyEquivalent: string;
  badge?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface ModelOption {
  id: string;
  name: string;
  tag?: string;
}

export interface ChatSuggestion {
  title: string;
  description: string;
  iconKey: string;
}

export interface AITaskItem {
  id: string;
  category: 'Ideas' | 'Work' | 'Fun' | 'Online Content';
  title: string;
  description: string;
  iconKey: string;
}

export interface StoreItem {
  id: string;
  title: string;
  creator: string;
  description: string;
  iconKey: string;
  category: 'agent' | 'plugin' | 'prompt';
  rating: string;
  isAdded: boolean;
}

export interface SOPTemplate {
  id: string;
  title: string;
  description: string;
  iconKey: string;
  tags: string[];
}

export interface SupportCategory {
  id: string;
  title: string;
  description: string;
  iconKey: string;
}

export interface HistoryItemData {
  id: string;
  type: 'chat' | 'image' | 'video';
  title: string;
  snippet: string;
  time: string;
}

export interface HistoryGroup {
  dateGroup: string;
  items: HistoryItemData[];
}

export interface ConnectorItem {
  id: string;
  name: string;
  description: string;
  iconKey: string;
  isConnected: boolean;
}
