import React from 'react';
import { Target, Sparkles, PenTool, Image as ImageIcon } from 'lucide-react';
import { chatSuggestions } from '@/data/ChatData';

const suggestionIcons = { Sparkles, PenTool, Target, Image: ImageIcon };

export const ChatSuggestions = () => {
    return (
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {chatSuggestions.map((card) => {
                const Icon = suggestionIcons[card.iconKey as keyof typeof suggestionIcons];
                return (
                <button
                    key={card.title}
                    type="button"
                    className="group cursor-pointer rounded-2xl border border-foreground/10 bg-background p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:p-5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Icon size={18} className="text-foreground/65" />
                        <h3 className="font-semibold text-sm text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                        {card.description}
                    </p>
                </button>
                );
            })}
        </div>
    );
};
