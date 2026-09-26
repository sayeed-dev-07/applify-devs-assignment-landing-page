import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Tools Store',
  'Discover AI agents, plugins, and prompt tools for writing, coding, research, and everyday work in the EchoGPT store.',
  ['AI tools', 'AI agents', 'AI plugins', 'AI productivity tools']
);

export default function StoreLayout({ children }: { children: ReactNode }) {
  return children;
}
