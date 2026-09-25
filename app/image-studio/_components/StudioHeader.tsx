import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const StudioHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2">
                <ImageIcon size={24} />
            </div>
            <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground">
                Image Studio
            </h1>
            <p className="text-foreground/60 text-sm md:text-base">
                Create images that stop the scroll.
            </p>
        </div>
    );
};