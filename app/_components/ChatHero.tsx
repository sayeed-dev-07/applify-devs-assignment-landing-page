import React from 'react';
import { Target } from 'lucide-react';

export const ChatHero = () => {
    return (
        <>
            <div className="mb-3  flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/3 text-foreground shadow-sm">
                <Target size={27} strokeWidth={1.6} />
            </div>
            <h1 className="mb-3 text-center font-header text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                What can I help you with?
            </h1>
            <p className="mb-9 max-w-lg text-center text-sm leading-relaxed text-foreground/60 md:mb-10 md:text-base">
                Start with a question, a rough idea, or something you want to get done. We can shape it together.
            </p>
        </>
    );
};