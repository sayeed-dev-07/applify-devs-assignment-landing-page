import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'Compare AI Models',
  'Compare responses from multiple AI models side by side. Send one prompt and review each model’s answer in EchoGPT.',
  ['AI model comparison', 'compare AI models', 'AI chat comparison', 'model evaluation']
);

export default function CompareLayout({ children }: { children: ReactNode }) {
  return children;
}
