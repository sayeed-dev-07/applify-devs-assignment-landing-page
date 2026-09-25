import React from 'react';
import { Layers } from 'lucide-react';

export const CompareHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2 shadow-sm">
                <Layers size={24} />
            </div>
            <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Model Arena
            </h1>
            <p className="text-foreground/60 text-sm md:text-base max-w-md mx-auto">
                Compare up to 3 models side-by-side with a single prompt.
            </p>
        </div>
    );
};