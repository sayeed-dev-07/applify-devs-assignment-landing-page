import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Workspace Connectors',
  'Connect EchoGPT with the tools your team already uses. Browse integrations for code, documents, messaging, and data.',
  ['AI integrations', 'AI workspace integrations', 'AI connectors', 'productivity integrations']
);

export default function ConnectorsLayout({ children }: { children: ReactNode }) {
  return children;
}
