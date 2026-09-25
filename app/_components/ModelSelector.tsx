"use client";
import React, { useState } from 'react';
import { ChevronDown, Check, Target } from 'lucide-react';

interface Model {
    id: string;
    name: string;
    tag?: string;
}

const models: Model[] = [
    { id: 'echo-4', name: 'EchoGPT 4.0', tag: 'Smart' },
    { id: 'echo-3', name: 'EchoGPT 3.5', tag: 'Fast' },
    { id: 'echo-vision', name: 'Echo Vision', tag: 'Beta' }
];

interface ModelSelectorProps {
    initialModel?: string;
    compact?: boolean;
}

const ModelSelector = ({ initialModel = 'EchoGPT 4.0', compact }: ModelSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState(
        models.find(m => m.name === initialModel)?.id || models[0].id
    );

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
                className={`relative z-50 flex items-center gap-2 font-semibold transition-colors cursor-pointer rounded-lg hover:bg-foreground/5
                    ${compact ? 'text-xs text-foreground/70 py-1 px-2' : 'text-sm text-foreground py-2 px-3'}
                `}
            >
                <Target size={compact ? 14 : 16} className={isOpen ? 'text-foreground' : ''} />
                <span className={isOpen ? 'text-foreground' : ''}>{currentModel.name}</span>
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180 opacity-100 text-foreground' : 'opacity-50'}`}
                />
            </button>

            {/* Dropdown Menu - Configured to open UPWARDS (bottom-full, mb-2, origin-bottom-left) */}
            <div
                className={`absolute bottom-full left-0 mb-2 w-56 bg-background border border-foreground/10 rounded-xl shadow-xl z-50 overflow-hidden origin-bottom-left transition-all duration-200
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <div className="flex flex-col py-1">
                    {models.map((model) => (
                        <button
                            key={model.id}
                            onClick={() => {
                                setSelectedModel(model.id);
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

export default ModelSelector;