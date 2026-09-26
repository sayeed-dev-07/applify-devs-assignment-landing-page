import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Video Studio',
  'Turn detailed prompts into video concepts with EchoGPT’s AI video studio. Pick a model, format, and duration to shape your next clip.',
  ['AI video generator', 'AI video studio', 'text to video', 'video creation']
);

export default function VideoStudioLayout({ children }: { children: ReactNode }) {
  return children;
}
