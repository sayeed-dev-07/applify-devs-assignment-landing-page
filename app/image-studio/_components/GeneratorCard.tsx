"use client";
import React from 'react';
import { Sparkles, Plus, Lock } from 'lucide-react';
import { ModelDropdown } from './ModelDropdown';

interface GeneratorCardProps {
    prompt: string;
    setPrompt: (val: string) => void;
    aspectRatio: string;
    setAspectRatio: (val: string) => void;
    imageCount: number;
    setImageCount: (val: number) => void;
    selectedModel: string;
    setSelectedModel: (val: string) => void;
}

export const GeneratorCard = ({
    prompt, setPrompt,
    aspectRatio, setAspectRatio,
    imageCount, setImageCount,
    selectedModel, setSelectedModel
}: GeneratorCardProps) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-3 flex flex-col shadow-sm focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300 relative z-10">

                {/* Prompt Input */}
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Turn my photo into a professional headshot..."
                    className="w-full bg-transparent resize-none outline-none text-sm p-3 text-foreground placeholder:text-foreground/40 min-h-[100px] custom-scrollbar"
                />

                {/* Toolbar Settings & Submit */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-3 border-t border-foreground/5">

                    {/* Settings Group */}
                    <div className="flex flex-wrap items-center gap-2">
                        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-foreground/10 text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer shrink-0">
                            <Plus size={16} />
                        </button>

                        <div className="h-4 w-[1px] bg-foreground/10 mx-1 hidden sm:block"></div>

                        {/* Aspect Ratio Selector */}
                        <div className="flex items-center bg-background rounded-full border border-foreground/10 p-0.5 shrink-0">
                            {['1:1', '3:2', '2:3', 'auto'].map((ratio) => (
                                <button
                                    key={ratio}
                                    onClick={() => setAspectRatio(ratio)}
                                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer
                                        ${aspectRatio === ratio
                                            ? 'bg-foreground text-background'
                                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                        }
                                    `}
                                >
                                    {ratio}
                                </button>
                            ))}
                        </div>

                        {/* Image Count Selector */}
                        <div className=" items-center bg-background rounded-full border border-foreground/10 p-0.5 shrink-0 hidden md:flex">
                            {[1, 2, 3, 4].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setImageCount(num)}
                                    className={`w-7 h-7 flex items-center justify-center rounded-full text-[11px] font-semibold transition-colors cursor-pointer
                                        ${imageCount === num
                                            ? 'bg-foreground text-background'
                                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                        }
                                    `}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        {/* Interactive Model Selector */}
                        <ModelDropdown
                            selectedModel={selectedModel}
                            onSelect={setSelectedModel}
                        />
                    </div>

                    {/* Generate Button */}
                    <button className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer shadow-md ml-auto">
                        <Sparkles size={16} />
                        Generate
                    </button>
                </div>
            </div>

            {/* Contextual Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-foreground/40 px-2 gap-2 text-center sm:text-left">
                <span className="flex items-start gap-0.5 sm:gap-1.5 text-foreground/60">
                    <Lock className='mt-0.5' size={12} />
                    Image generation is a paid feature — upgrade to start creating images.
                </span>
                <span>
                    Each image uses one message from your plan. Generation takes up to a minute.
                </span>
            </div>
        </div>
    );
};