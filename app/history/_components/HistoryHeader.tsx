import React from 'react';
import { History } from 'lucide-react';

export const HistoryHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2 shadow-sm">
                <History size={24} />
            </div>
            <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Activity History
            </h1>
            <p className="text-foreground/60 text-sm md:text-base max-w-md mx-auto">
                Review and resume your past conversations and generations.
            </p>
        </div>
    );
};