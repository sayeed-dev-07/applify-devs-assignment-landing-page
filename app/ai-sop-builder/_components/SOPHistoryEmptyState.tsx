import React from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export const SOPHistoryEmptyState = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-8 border border-foreground/10 rounded-3xl p-12 md:p-16 flex flex-col items-center justify-center text-center gap-3 bg-background shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground mb-3">
                <FileText size={24} className="opacity-70" />
            </div>

            <h3 className="font-semibold text-foreground text-base md:text-lg">
                No SOP history available
            </h3>

            <p className="text-foreground/50 text-sm mb-4">
                Start by generating a new Statement of Purpose!
            </p>

            <Link href="/" className="bg-foreground text-background px-6 py-2.5 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer shadow-md mt-2">
                Create New SOP
            </Link>
        </div>
    );
};