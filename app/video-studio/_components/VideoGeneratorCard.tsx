"use client";
import React from 'react';
import { Sparkles, Plus, Lock, Image as ImageIcon } from 'lucide-react';
import { VideoModelSelector } from './VideoModelSelector';


interface VideoGeneratorCardProps {
    prompt: string;
    setPrompt: (val: string) => void;
    aspectRatio: string;
    setAspectRatio: (val: string) => void;
    duration: string;
    setDuration: (val: string) => void;
    selectedModel: string;
    setSelectedModel: (val: string) => void;
}

export const VideoGeneratorCard = ({
    prompt, setPrompt,
    aspectRatio, setAspectRatio,
    duration, setDuration,
    selectedModel, setSelectedModel
}: VideoGeneratorCardProps) => {
    return (
        <div className="w-full flex flex-col gap-4 relative z-20">
            <div className="relative z-30 w-full bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-3 flex flex-col shadow-sm focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300">

                {/* Prompt Input */}
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe a scene in cinematic detail..."
                    className="w-full bg-transparent resize-none outline-none text-sm p-3 text-foreground placeholder:text-foreground/40 min-h-[100px] custom-scrollbar"
                />


                <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-3 border-t border-foreground/5">

                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-foreground/10 text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer shrink-0 text-xs font-semibold"
                            title="Add a starting image"
                        >
                            <ImageIcon size={14} />
                            <span className="hidden sm:inline">Start Image</span>
                            <Plus size={14} className="sm:hidden" />
                        </button>

                        <div className="h-4 w-[1px] bg-foreground/10 mx-1 hidden sm:block"></div>

                        {/* Aspect Ratio Selector */}
                        <div className="flex items-center bg-background rounded-lg border border-foreground/10 p-0.5 shrink-0">
                            {['16:9', '9:16', '1:1'].map((ratio) => (
                                <button
                                    key={ratio}
                                    onClick={() => setAspectRatio(ratio)}
                                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer
                                        ${aspectRatio === ratio
                                            ? 'bg-foreground text-background shadow-sm'
                                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                        }
                                    `}
                                >
                                    {ratio}
                                </button>
                            ))}
                        </div>

                        {/* Duration Selector */}
                        <div className="items-center bg-background rounded-lg border border-foreground/10 p-0.5 shrink-0 hidden md:flex">
                            {['3s', '5s', '10s'].map((time) => (
                                <button
                                    key={time}
                                    onClick={() => setDuration(time)}
                                    className={`px-3 py-1 flex items-center justify-center rounded-md text-[11px] font-semibold transition-colors cursor-pointer
                                        ${duration === time
                                            ? 'bg-foreground text-background shadow-sm'
                                            : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                        }
                                    `}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <div className="h-4 w-[1px] bg-foreground/10 mx-1 hidden sm:block"></div>

                        {/* Interactive Model Selector */}
                        <VideoModelSelector
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
                    Video generation is a Pro feature — upgrade to start creating motion.
                </span>
                <span>
                    Each 5s generation uses 10 credits. Takes up to 3 minutes.
                </span>
            </div>
        </div>
    );
};