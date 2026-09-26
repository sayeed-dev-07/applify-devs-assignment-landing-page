import type { Metadata } from 'next';

export function createRouteMetadata(title: string, description: string, keywords: string[]): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | EchoGPT`,
      description,
      siteName: 'EchoGPT',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${title} | EchoGPT`,
      description,
    },
  };
}
