import React from 'react';
import { PlaySquare } from 'lucide-react';

export const VideoStudioGallery = () => {
    return (
        <div className="flex flex-col gap-6 mt-8 relative z-10">
            <h3 className="font-header text-sm font-bold text-foreground">
                Your videos
            </h3>

            <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/1">
                <PlaySquare size={24} className="text-foreground/20" />
                <p className="text-foreground/50 text-sm">
                    Nothing here yet — describe a scene above to render your first video.
                </p>
            </div>
        </div>
    );
};