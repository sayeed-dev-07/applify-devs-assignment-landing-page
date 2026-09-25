"use client";
import React, { useState } from 'react';
import { ChevronDown, Check, Clapperboard } from 'lucide-react';

interface Model {
    id: string;
    name: string;
    tag?: string;
}

const models: Model[] = [
    { id: 'echo-vid-pro', name: 'Echo Video Pro', tag: 'HQ' },
    { id: 'echo-vid-fast', name: 'Echo Video Fast' }
];

interface VideoModelSelectorProps {
    selectedModel: string;
    onSelect: (modelId: string) => void;
}

export const VideoModelSelector = ({ selectedModel, onSelect }: VideoModelSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentModel = models.find(m => m.id === selectedModel) || models[0];

    return (
        <div className="relative">
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsOpen(false)} 
                />
            )}

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex items-center gap-2 font-medium transition-colors cursor-pointer rounded-lg py-1.5 px-3 hover:bg-foreground/5 text-xs text-foreground/70 border border-transparent hover:border-foreground/10"
            >
                <Clapperboard size={14} className="opacity-70" />
                <span>{currentModel.name}</span>
                <ChevronDown 
                    size={12} 
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180 opacity-100 text-foreground' : 'opacity-50'}`} 
                />
            </button>

            <div 
                className={`absolute top-[calc(100%+8px)] left-0 w-[240px] bg-background border border-foreground/10 rounded-2xl shadow-xl z-[100] overflow-hidden origin-top-left transition-all duration-200
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                `}
            >
                <div className="flex flex-col py-2">
                    <div className="px-4 py-3 pb-2">
                        <span className="text-[10px] font-bold tracking-wider text-foreground/40 uppercase">
                            Available Models
                        </span>
                    </div>
                    {models.map((model) => (
                        <button
                            key={model.id}
                            onClick={() => {
                                onSelect(model.id);
                                setIsOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-4 py-2.5 text-left hover:bg-foreground/5 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <span className={`text-sm ${selectedModel === model.id ? 'text-foreground font-medium' : 'text-foreground/70'}`}>
                                    {model.name}
                                </span>
                                {model.tag && (
                                    <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-md bg-foreground/10 text-foreground/60">
                                        {model.tag}
                                    </span>
                                )}
                            </div>
                            {selectedModel === model.id && (
                                <Check size={16} className="text-foreground" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};