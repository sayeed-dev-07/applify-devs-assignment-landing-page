import React from 'react';
import { SupportHeader } from './_components/SupportHeader';
import { SupportCategories } from './_components/SupportCategories';
import { ContactForm } from './_components/ContactForm';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
    'Support and Help Center',
    'Find help with your EchoGPT workspace, plans, account, and API, or send a message to the support team.',
    ['EchoGPT support', 'AI workspace help', 'AI platform help center', 'EchoGPT contact']
);

const SupportPage = () => {
    return (
        <div className="flex-1 h-full w-full">
            <div className="w-full px-4 sm:px-6 py-12 md:py-16 flex flex-col gap-8">
                <SupportHeader />
                <div className="w-full max-w-5xl mx-auto h-[1px] bg-foreground/5 my-4" />
                <SupportCategories />
                <ContactForm />

            </div>
        </div>
    );
};

export default SupportPage;
