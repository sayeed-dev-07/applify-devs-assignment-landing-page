import React from 'react';
import { LucideIcon, CheckCircle2, Plus } from 'lucide-react';

interface ConnectorCardProps {
    name: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: LucideIcon | React.ComponentType<any>;
    isConnected: boolean;
    onToggle: () => void;
}

export const ConnectorCard = ({
    name, description, icon: Icon, isConnected, onToggle
}: ConnectorCardProps) => {
    return (
        <div className="group flex flex-col p-5 rounded-3xl border border-foreground/10 bg-foreground/1 hover:bg-foreground/3 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl border border-foreground/10 bg-background flex items-center justify-center text-foreground shadow-sm group-hover:shadow-md transition-shadow">
                    <Icon size={22} />
                </div>

                {isConnected ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/10 text-[10px] font-bold text-foreground uppercase tracking-wide">
                        <CheckCircle2 size={12} />
                        Connected
                    </span>
                ) : (
                    <span className="px-2.5 py-1 rounded-full border border-foreground/10 text-[10px] font-bold text-foreground/40 uppercase tracking-wide">
                        Available
                    </span>
                )}
            </div>

            <h3 className="font-semibold text-foreground text-sm mb-1">{name}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed flex-1 mb-6">
                {description}
            </p>

            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer
                    ${isConnected
                        ? 'border border-foreground/20 text-foreground hover:bg-foreground/5'
                        : 'bg-foreground text-background hover:opacity-90 shadow-sm'
                    }
                `}
            >
                {isConnected ? (
                    'Configure'
                ) : (
                    <>
                        <Plus size={14} />
                        Connect
                    </>
                )}
            </button>
        </div>
    );
};