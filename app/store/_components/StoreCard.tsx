import React from 'react';
import { Star, CheckCircle2, Download } from 'lucide-react';
import { IconType } from 'react-icons';

interface StoreCardProps {
    title: string;
    creator: string;
    description: string;
    icon: IconType | React.ElementType;
    category: string;
    rating: string;
    isAdded: boolean;
    onToggle: () => void;
}

export const StoreCard = ({
    title, creator, description, icon: Icon, category, rating, isAdded, onToggle
}: StoreCardProps) => {
    return (
        <div className="group flex flex-col p-5 rounded-3xl border border-foreground/10 bg-foreground/1 hover:bg-foreground/[0.03] transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl border border-foreground/10 bg-background flex items-center justify-center text-foreground shadow-sm group-hover:shadow-md transition-shadow">
                    <Icon size={22} />
                </div>

                <span className="px-2.5 py-1 rounded-full border border-foreground/10 text-[9px] font-bold text-foreground/50 uppercase tracking-wider bg-foreground/5">
                    {category}
                </span>
            </div>

            <div className="flex flex-col mb-4 flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{title}</h3>
                <p className="text-[10px] text-foreground/40 font-medium mb-2 uppercase tracking-wide">
                    By {creator}
                </p>
                <p className="text-xs text-foreground/60 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/5">
                <div className="flex items-center gap-1 text-foreground/70">
                    <Star size={14} className="fill-foreground/70" />
                    <span className="text-xs font-bold">{rating}</span>
                </div>

                <button
                    onClick={onToggle}
                    className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer
                        ${isAdded
                            ? 'bg-foreground/10 text-foreground hover:bg-foreground/15'
                            : 'bg-foreground text-background hover:opacity-90 shadow-sm'
                        }
                    `}
                >
                    {isAdded ? (
                        <>
                            <CheckCircle2 size={14} />
                            Added
                        </>
                    ) : (
                        <>
                            <Download size={14} />
                            Get
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};