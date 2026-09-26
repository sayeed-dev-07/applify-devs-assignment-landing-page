import React from 'react';
import { Sparkles, Globe, UserSquare2 } from 'lucide-react';

export const SOPFeatures = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mx-auto mb-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-3xl border border-foreground/10 bg-background w-full sm:w-1/3 shadow-sm">
                <div className="text-foreground/70 mb-3">
                    <Sparkles size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                    AI-Enhanced
                </h3>
                <p className="text-[11px] text-foreground/50">
                    Powered by Google Gemini
                </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-3xl border border-foreground/10 bg-background w-full sm:w-1/3 shadow-sm">
                <div className="text-foreground/70 mb-3">
                    <Globe size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                    6 Countries
                </h3>
                <p className="text-[11px] text-foreground/50">
                    Country-specific guidelines
                </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-3xl border border-foreground/10 bg-background w-full sm:w-1/3 shadow-sm">
                <div className="text-foreground/70 mb-3">
                    <UserSquare2 size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                    4 Templates
                </h3>
                <p className="text-[11px] text-foreground/50">
                    Academic, Professional, Research, Creative
                </p>
            </div>
        </div>
    );
};