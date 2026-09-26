"use client";
import { useState } from 'react';
import { Check, ShieldCheck, Sparkles } from 'lucide-react';
import { pricingData } from '@/data/PricingData';
import { PricingCard } from './PricingCard';

export function PricingGrid() {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly');
    const freePlan = pricingData.plans.find((plan) => plan.id === 'free')!;
    const proPlan = pricingData.plans.find((plan) => plan.id === (billing === 'yearly' ? 'annual' : 'monthly'))!;

    return (
        <section id="plans" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-12 pt-8 sm:px-6 sm:pt-10">
            <div className="mb-9 flex flex-col items-center gap-4 text-center">
                <div className="inline-flex items-center rounded-2xl border border-foreground/10 bg-foreground/[0.035] p-1.5 shadow-sm" aria-label="Billing frequency">
                    {pricingData.billingOptions.map((option) => {
                        const value = option.toLowerCase() as 'monthly' | 'yearly';
                        const isActive = billing === value;
                        return (
                            <button
                                key={option}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setBilling(value)}
                                className={`relative rounded-xl px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:px-5 ${isActive ? 'bg-background text-foreground shadow-sm' : 'text-foreground/55 hover:text-foreground'}`}
                            >
                                {option}
                                {value === 'yearly' && (
                                    <span className="ml-2 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold text-background shadow-sm">
                                        {pricingData.yearlySavings}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
                <p className="text-xs text-foreground/45">Choose monthly flexibility or save with a yearly plan.</p>
            </div>

            <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6">
                <PricingCard plan={freePlan} />
                <PricingCard plan={proPlan} />
            </div>

            <div className="mt-8 grid gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-4 text-center sm:grid-cols-3 sm:p-5">
                {[
                    { icon: Check, text: 'Cancel any time' },
                    { icon: ShieldCheck, text: pricingData.paymentNote },
                    { icon: Sparkles, text: 'Made for curious minds' },
                ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/55">
                        <Icon size={15} className="shrink-0 text-foreground/45" />{text}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-center text-[11px] text-foreground/40">{pricingData.trustNote}</p>
        </section>
    );
}
