import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    isPrimary?: boolean;
    isCollapsed: boolean;
}

export const SidebarItem = ({ icon: Icon, label, isPrimary, isCollapsed }: SidebarItemProps) => {
    return (
        <button
            title={isCollapsed ? label : undefined}
            className={`flex items-center rounded-xl transition-all duration-[400ms] ease-in-out cursor-pointer group shrink-0 py-2.5 overflow-hidden
            ${isCollapsed ? 'w-11 mx-auto justify-center px-0' : 'w-full mx-0 justify-start px-3'}
            ${isPrimary
                    ? 'bg-foreground text-background hover:bg-foreground/90 mt-1 mb-3'
                    : 'text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }
        `}
        >
            <Icon size={20} className="shrink-0" />
            <span
                className={`overflow-hidden whitespace-nowrap font-medium text-sm transition-[max-width,opacity,margin] duration-[400ms] ease-in-out 
                ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[180px] opacity-100 ml-3 text-left flex-1'}
                `}
            >
                {label}
            </span>
        </button>
    );
};