import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SOPTemplateCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    tags: string[];
}

export const SOPTemplateCard = ({ title, description, icon: Icon, tags }: SOPTemplateCardProps) => {
    return (
        <button className="group flex flex-col p-6 rounded-3xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-foreground/20 hover:shadow-md transition-all duration-300 text-left w-full h-full cursor-pointer">
            <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground shrink-0 shadow-sm transition-colors group-hover:bg-foreground group-hover:text-background">
                    <Icon size={18} />
                </div>
                <div className="flex flex-col pt-0.5">
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">
                        {title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap items-center gap-2 mt-auto">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/60 text-[10px] font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </button>
    );
};