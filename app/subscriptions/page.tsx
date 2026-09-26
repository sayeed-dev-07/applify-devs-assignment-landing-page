import React from 'react';
import { SubscriptionHeader } from './_components/SubscriptionHeader';
import { PricingGrid } from './_components/PricingGrid';
import { pricingData } from '@/data/PricingData';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
    'EchoGPT Pricing',
    'Compare EchoGPT plans and choose the right fit for your workflow. Start free or save with annual Pro access to advanced AI models and creative tools.',
    ['EchoGPT pricing', 'AI assistant pricing', 'AI image and video plan', 'AI subscription']
);

const SubscriptionsPage = () => {
    return (
        <div className="min-h-full w-full overflow-hidden">
            <div className="flex w-full flex-col gap-3 pb-6">
                <SubscriptionHeader data={pricingData} />
                <PricingGrid />
            </div>
        </div>
    );
};

export default SubscriptionsPage;
