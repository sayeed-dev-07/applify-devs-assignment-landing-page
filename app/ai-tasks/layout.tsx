import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Tasks and Assistants',
  'Explore focused AI assistants for ideas, work, entertainment, and online content. Find a task and get started in EchoGPT.',
  ['AI assistants', 'AI tasks', 'AI writing tools', 'AI productivity']
);

export default function AITasksLayout({ children }: { children: ReactNode }) {
  return children;
}
