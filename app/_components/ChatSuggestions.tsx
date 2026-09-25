import React from 'react';
import { Target, Sparkles, PenTool, Image as ImageIcon } from 'lucide-react';

const suggestions = [
    {
        title: "Unlock Your Creative Flow",
        description: "Receive custom prompts that reflect your writing style and spark new ideas.",
        icon: Sparkles,
        color: "text-foreground/65"
    },
    {
        title: "Build a Resume That Shines",
        description: "Craft a resume tailored to highlight your experience and match the job you want.",
        icon: PenTool,
        color: "text-foreground/65"
    },
    {
        title: "Set a Challenge That Transforms",
        description: "Create a personalized challenge based on your goals designed to push you.",
        icon: Target,
        color: "text-foreground/65"
    },
    {
        title: "Write Irresistible Content",
        description: "Generate catchy, clever captions for your photos or videos.",
        icon: ImageIcon,
        color: "text-foreground/65"
    }
];

export const ChatSuggestions = () => {
    return (
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {suggestions.map((card, idx) => (
                <button
                    key={idx}
                    type="button"
                    className="group cursor-pointer rounded-2xl border border-foreground/10 bg-background p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:p-5"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <card.icon size={18} className={card.color} />
                        <h3 className="font-semibold text-sm text-foreground">{card.title}</h3>
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                        {card.description}
                    </p>
                </button>
            ))}
        </div>
    );
};