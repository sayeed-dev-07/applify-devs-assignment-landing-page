import { PlaceholderPage } from '../_components/PlaceholderPage';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
    'EchoGPT Newsletter',
    'Get product updates, new AI features, and practical ideas for making more of your EchoGPT workspace.',
    ['EchoGPT newsletter', 'AI product updates', 'AI news and tips']
);

export default function NewsletterPage() {
    return <PlaceholderPage title="Newsletter" />;
}
