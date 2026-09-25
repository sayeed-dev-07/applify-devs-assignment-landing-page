"use client";
import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { MultiModelSelector } from './MultiModelSelector';

interface CompareGeneratorCardProps {
    prompt: string;
    setPrompt: (val: string) => void;
    selectedModels: string[];
    setSelectedModels: (models: string[]) => void;
}

export const CompareGeneratorCard = ({
    prompt, setPrompt, selectedModels, setSelectedModels
}: CompareGeneratorCardProps) => {

    const isReady = prompt.trim().length > 0 && selectedModels.length === 3;

    return (
        <div className="w-full flex flex-col gap-4 relative z-20">
            <div className="relative z-30 w-full bg-foreground/2 border border-foreground/10 rounded-3xl p-3 flex flex-col shadow-sm focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300">

                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter a prompt to run across 3 models simultaneously..."
                    className="w-full bg-transparent resize-none outline-none text-sm p-3 text-foreground placeholder:text-foreground/40 min-h-[100px]  "
                />

                <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-3 border-t border-foreground/5">

                    <MultiModelSelector
                        selectedModels={selectedModels}
                        onChange={setSelectedModels}
                    />

                    <button
                        disabled={!isReady}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-md ml-auto
                            ${isReady
                                ? 'bg-foreground text-background hover:opacity-90'
                                : 'bg-foreground/10 text-foreground/40 pointer-events-none shadow-none'
                            }
                        `}
                    >
                        <Sparkles size={16} />
                        Run Comparison
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center text-[11px] text-foreground/40 gap-1.5 px-2">
                <Info size={12} />
                <span>Select exactly 3 models to enable side-by-side comparison.</span>
            </div>
        </div>
    );
};