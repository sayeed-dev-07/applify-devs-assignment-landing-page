"use client";
import React, { useState } from 'react';
import { ChevronDown, Check, Cpu } from 'lucide-react';

interface Model {
    id: string;
    name: string;
    tag?: string;
}

const availableModels: Model[] = [
    { id: 'echo-4', name: 'EchoGPT 4.0', tag: 'Smart' },
    { id: 'echo-3', name: 'EchoGPT 3.5', tag: 'Fast' },
    { id: 'nano-pro', name: 'Nano Banana 2 Pro', tag: 'Pro' },
    { id: 'nano-lite', name: 'Nano Banana 2 Lite' },
    { id: 'vision-xl', name: 'Echo Vision XL', tag: 'Beta' }
];

interface MultiModelSelectorProps {
    selectedModels: string[];
    onChange: (models: string[]) => void;
}

export const MultiModelSelector = ({ selectedModels, onChange }: MultiModelSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModel = (modelId: string) => {
        if (selectedModels.includes(modelId)) {
            onChange(selectedModels.filter(id => id !== modelId));
        } else if (selectedModels.length < 3) {
            onChange([...selectedModels, modelId]);
        }
    };

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
                className={`relative z-50 flex items-center gap-2 font-medium transition-colors cursor-pointer rounded-lg py-1.5 px-3 border 
                    ${isOpen ? 'bg-foreground/5 border-foreground/20 text-foreground' : 'border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5'}
                `}
            >
                <Cpu size={14} className={isOpen ? 'opacity-100' : 'opacity-70'} />
                <span className="text-xs">
                    {selectedModels.length} / 3 Models Selected
                </span>
                <ChevronDown 
                    size={12} 
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180 opacity-100' : 'opacity-50'}`} 
                />
            </button>

            {/* Dropdown Menu - Floating Card Design */}
            <div 
                className={`absolute top-[calc(100%+8px)] left-0 w-[260px] bg-background border border-foreground/10 rounded-2xl shadow-xl z-[100] overflow-hidden origin-top-left transition-all duration-200
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
                `}
            >
                <div className="flex flex-col py-2">
                    <div className="px-4 py-3 pb-2 flex justify-between items-center">
                        <span className="text-[10px] font-bold tracking-wider text-foreground/40 uppercase">
                            Select up to 3
                        </span>
                        <span className="text-[10px] font-bold text-foreground/60">
                            {selectedModels.length}/3
                        </span>
                    </div>
                    
                    {availableModels.map((model) => {
                        const isSelected = selectedModels.includes(model.id);
                        const isMaxReached = selectedModels.length >= 3 && !isSelected;

                        return (
                            <button
                                key={model.id}
                                onClick={() => toggleModel(model.id)}
                                disabled={isMaxReached}
                                className={`flex items-center justify-between w-full px-4 py-2.5 text-left transition-colors cursor-pointer
                                    ${isMaxReached ? 'opacity-40 cursor-not-allowed' : 'hover:bg-foreground/5'}
                                `}
                            >
                                <div className="flex items-center gap-2">
                                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors
                                        ${isSelected ? 'bg-foreground border-foreground text-background' : 'border-foreground/20'}
                                    `}>
                                        {isSelected && <Check size={12} strokeWidth={3} />}
                                    </div>
                                    <span className={`text-sm ${isSelected ? 'text-foreground font-medium' : 'text-foreground/70'}`}>
                                        {model.name}
                                    </span>
                                    {model.tag && (
                                        <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-md bg-foreground/10 text-foreground/60">
                                            {model.tag}
                                        </span>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};