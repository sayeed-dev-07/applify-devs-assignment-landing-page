"use client";
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Model {
    id: string;
    name: string;
    tag?: string;
}

const models: Model[] = [
    { id: 'nano-lite', name: 'Nano Banana 2 Lite', tag: 'Fast' },
    { id: 'nano-pro', name: 'Nano Banana 2 Pro', tag: 'Quality' },
    { id: 'echo-vision', name: 'Echo Vision XL', tag: 'Beta' },
    { id: 'dall-e-3', name: 'DALL-E 3', tag: 'Pro' }
];

interface ModelDropdownProps {
    selectedModel: string;
    onSelect: (modelId: string) => void;
}

export const ModelDropdown = ({ selectedModel, onSelect }: ModelDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const currentModel = models.find(m => m.id === selectedModel) || models[0];

    return (
        <div className="relative">
            {/* Click-away overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsOpen(false)} 
                />
            )}

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-50 flex items-center gap-2 bg-background border rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors cursor-pointer shrink-0
                    ${isOpen ? 'border-foreground/30 text-foreground shadow-sm' : 'border-foreground/10 text-foreground/70 hover:text-foreground hover:bg-foreground/5'}
                `}
            >
                {currentModel.name}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 opacity-100' : 'opacity-50'}`} />
            </button>

            {/* Dropdown Menu */}
            <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-background border border-foreground/10 rounded-xl shadow-xl z-50 overflow-hidden origin-top-left transition-all duration-200
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <div className="flex flex-col py-1">
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
                                <span className={`text-sm font-medium ${selectedModel === model.id ? 'text-foreground' : 'text-foreground/70'}`}>
                                    {model.name}
                                </span>
                                {model.tag && (
                                    <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-md bg-foreground/10 text-foreground/60">
                                        {model.tag}
                                    </span>
                                )}
                            </div>
                            {selectedModel === model.id && (
                                <Check size={14} className="text-foreground" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};