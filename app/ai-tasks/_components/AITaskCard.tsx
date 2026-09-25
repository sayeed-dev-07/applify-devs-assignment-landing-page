import React from 'react';
import { IconType } from 'react-icons';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

export interface AITaskAppCardProps {
    title: string;
    description: string;
    icon: IconType | LucideIcon;
}

export const AITaskAppCard = ({ title, description, icon: Icon }: AITaskAppCardProps) => {
    return (
        <button className="group flex flex-col p-5 rounded-3xl border border-foreground/10 bg-foreground/1 hover:bg-foreground/[0.03] transition-all duration-300 text-left w-full h-full relative overflow-hidden cursor-pointer">

            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl border border-foreground/10 bg-background flex items-center justify-center text-foreground shadow-sm group-hover:shadow-md transition-shadow shrink-0">
                    <Icon size={22} />
                </div>

                <div className="p-2 text-foreground/20 group-hover:text-foreground/60 transition-colors">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <h3 className="font-semibold text-foreground text-sm mb-1">
                {title}
            </h3>
            <p className="text-xs text-foreground/60 leading-relaxed flex-1">
                {description}
            </p>
        </button>
    );
};