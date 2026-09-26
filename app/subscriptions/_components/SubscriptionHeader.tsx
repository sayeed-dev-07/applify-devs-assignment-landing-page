import { ArrowDown, ImageIcon, Sparkles } from 'lucide-react';
import type { PricingPageData } from '@/data/PricingData';
import { LiaMoneyCheckSolid } from 'react-icons/lia';

export function SubscriptionHeader({ data }: { data: PricingPageData }) {
    return (
        <header className="relative mx-auto flex w-full max-w-4xl flex-col items-center overflow-hidden px-4 pb-2 pt-10 text-center sm:pt-14">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(110,114,255,0.12),transparent_65%)]" />
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2">

                <LiaMoneyCheckSolid size={24} />
            </div>
            <h1 className="max-w-3xl font-header text-2xl leading-[1.08] tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Subscriptions
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/60 sm:text-base">
                {data.description}
            </p>
            <a href="#plans" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-foreground/55 transition-colors hover:text-foreground">
                Find your plan <ArrowDown size={14} />
            </a>
        </header>
    );
}
