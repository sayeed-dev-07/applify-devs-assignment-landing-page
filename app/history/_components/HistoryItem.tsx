import React from 'react';
import { MessageSquare, Image as ImageIcon, Film, MoreVertical, Trash2 } from 'lucide-react';

export type HistoryType = 'chat' | 'image' | 'video';

export interface HistoryItemProps {
    id: string;
    title: string;
    snippet: string;
    time: string;
    type: HistoryType;
}

export const HistoryItem = ({ title, snippet, time, type }: HistoryItemProps) => {
    
    const getIcon = () => {
        switch (type) {
            case 'chat': return <MessageSquare size={16} />;
            case 'image': return <ImageIcon size={16} />;
            case 'video': return <Film size={16} />;
        }
    };

    return (
        <div className="group flex items-center justify-between p-4 border-b border-foreground/5 last:border-b-0 hover:bg-foreground/[0.03] transition-colors cursor-pointer">
            <div className="flex items-center gap-4 overflow-hidden pr-4">
                {/* Type Icon */}
                <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/70 shrink-0 group-hover:text-foreground group-hover:border-foreground/20 transition-all">
                    {getIcon()}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col overflow-hidden">
                    <h4 className="font-semibold text-sm text-foreground truncate">
                        {title}
                    </h4>
                    <p className="text-xs text-foreground/50 truncate">
                        {snippet}
                    </p>
                </div>
            </div>

            {/* Trailing Actions */}
            <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-medium text-foreground/40 whitespace-nowrap">
                    {time}
                </span>
                
                {/* Actions Dropdown / Delete (Reveals on hover on desktop) */}
                <div className="flex items-center gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-foreground/40 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors">
                        <Trash2 size={16} />
                    </button>
                    <button className="p-2 text-foreground/40 hover:text-foreground hover:bg-foreground/10 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};