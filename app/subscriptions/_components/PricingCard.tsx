import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { PricingPlan } from '@/types/site';

export function PricingCard({ plan }: { plan: PricingPlan }) {
    const isPro = plan.popular;

    return (
        <article className={`pricing-card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-background p-6 sm:p-8 transition-all duration-300
            ${isPro ? 'border-foreground/40 shadow-xl lg:scale-105 z-10' : 'border-foreground/10 shadow-sm hover:border-foreground/20'}
        `}>
            {/* Subtle monochrome glow effect for Pro card */}
            {isPro && (
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-foreground/5 blur-3xl" />
            )}

            <div className="relative flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-bold tracking-tight text-foreground">{plan.name}</h2>
                    <p className="mt-1 text-xs leading-5 text-foreground/60">{plan.description}</p>
                </div>

                {/* High-Contrast Monochrome Badge */}
                {plan.badge && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background shadow-sm">
                        <Sparkles size={11} className="text-background/80" />
                        {plan.badge}
                    </span>
                )}
            </div>

            <div className="relative mt-8 flex items-end gap-2">
                <span key={`${plan.id}-${plan.price}`} className="pricing-price text-5xl font-semibold tracking-[-0.06em] text-foreground">
                    ${plan.price}
                </span>
                <span className="mb-1.5 text-xs text-foreground/50">
                    {plan.interval}
                </span>
            </div>
            <p className="mt-1 text-[11px] text-foreground/40">
                {plan.monthlyEquivalent}
            </p>

            {/* Call to Action Button */}
            <a
                href={plan.id === 'free' ? '/' : '#checkout'}
                className={`relative mt-7 flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground
                    ${isPro
                        ? 'bg-foreground text-background hover:opacity-90 shadow-md'
                        : 'border border-foreground/15 bg-background text-foreground hover:bg-foreground/5'
                    }
                `}
            >
                {plan.cta} <ArrowRight size={15} />
            </a>

            <div className="my-7 h-px bg-foreground/10" />
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/45">
                What&apos;s included
            </p>

            <ul className="relative flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs leading-5 text-foreground/70">
                        <span className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full 
                            ${isPro ? 'bg-foreground text-background' : 'bg-foreground/[0.055] text-foreground/65'}
                        `}>
                            <Check size={12} strokeWidth={2.5} />
                        </span>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    );
}