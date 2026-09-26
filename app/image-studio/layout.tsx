import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Image Studio',
  'Create polished images from a prompt with EchoGPT’s AI image studio. Choose a model, set an aspect ratio, and explore your generated work.',
  ['AI image generator', 'AI image studio', 'text to image', 'image creation']
);

export default function ImageStudioLayout({ children }: { children: ReactNode }) {
  return children;
}
