import { PlaceholderPage } from '../_components/PlaceholderPage';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
    'EchoGPT API Platform',
    'Explore the EchoGPT API platform for integrating AI models and creative workflows into your applications.',
    ['EchoGPT API', 'AI API platform', 'AI model API', 'developer tools']
);

export default function ApiPlatformPage() {
    return <PlaceholderPage title="API Platform" />;
}
