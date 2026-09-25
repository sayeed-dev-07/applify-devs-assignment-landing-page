import React from 'react';
import { Settings2 } from 'lucide-react';

interface CompareGalleryProps {
    selectedModels: string[];
}

const modelNames: Record<string, string> = {
    'echo-4': 'EchoGPT 4.0',
    'echo-3': 'EchoGPT 3.5',
    'nano-pro': 'Nano Banana 2 Pro',
    'nano-lite': 'Nano Banana 2 Lite',
    'vision-xl': 'Echo Vision XL'
};

export const CompareGallery = ({ selectedModels }: CompareGalleryProps) => {
    const displaySlots = [...selectedModels, ...Array(3 - selectedModels.length).fill('empty')];

    return (
        <div className="flex flex-col gap-6 mt-8 relative z-10 w-full">
            <h3 className="font-header text-sm font-bold text-foreground border-b border-foreground/10 pb-2">
                Comparison Results
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                {displaySlots.map((modelId, idx) => {
                    const isEmpty = modelId === 'empty';
                    const name = isEmpty ? `Model Slot ${idx + 1}` : modelNames[modelId];

                    return (
                        <div key={idx} className="flex flex-col gap-3">
                            <div className={`px-3 py-2 rounded-lg text-xs font-semibold text-center border
                                ${isEmpty ? 'bg-transparent border-dashed border-foreground/20 text-foreground/40' : 'bg-foreground/5 border-foreground/10 text-foreground'}
                            `}>
                                {name}
                            </div>


                            <div className={`w-full min-h-[300px] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 border transition-colors
                                ${isEmpty ? 'border-dashed border-foreground/15 bg-foreground/1' : 'border-solid border-foreground/10 bg-background shadow-sm'}
                            `}>
                                <Settings2 size={24} className="text-foreground/20" />
                                <p className="text-foreground/40 text-[11px] leading-relaxed max-w-[200px]">
                                    {isEmpty
                                        ? "Select a model above to fill this slot."
                                        : `Output for ${name} will appear here.`
                                    }
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};