import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = {
  ...createRouteMetadata(
    'Creation History',
    'Review recent chats, image prompts, and video projects in your EchoGPT workspace.',
    ['AI chat history', 'AI creation history', 'workspace history']
  ),
  robots: { index: false, follow: false },
};

export default function HistoryLayout({ children }: { children: ReactNode }) {
  return children;
}
