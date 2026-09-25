import React from 'react';
import { Settings2 } from 'lucide-react';

export const StudioGallery = () => {
    return (
        <div className="flex flex-col gap-6 mt-8 relative z-0">
            <h3 className="font-header text-sm font-bold text-foreground">
                Your creations
            </h3>

            {/* Empty State */}
            <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/[0.01]">
                <Settings2 size={24} className="text-foreground/20" />
                <p className="text-foreground/50 text-sm">
                    Nothing here yet — describe an image above to get started.
                </p>
            </div>
        </div>
    );
};