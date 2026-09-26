import React from 'react';
import { Target, X } from 'lucide-react';
import Link from 'next/link';

interface SidebarHeaderProps {
    isCollapsed: boolean;
    closeMobile: () => void;
}

export const SidebarHeader = ({ isCollapsed, closeMobile }: SidebarHeaderProps) => {
    return (
        <div className={`h-16 flex items-center shrink-0 transition-all duration-[400ms] ease-in-out ${isCollapsed ? 'pl-[26px]' : 'px-6'} justify-between`}>
            <Link href={'/'} className="flex items-center cursor-pointer group">
                <Target size={28} className="shrink-0 text-foreground group-hover:opacity-80 transition-opacity" />
                <span
                    className={`overflow-hidden whitespace-nowrap font-header text-xl font-bold tracking-wide text-foreground origin-left transition-[max-width,opacity,margin] duration-[400ms] ease-in-out
                    ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[160px] opacity-100 ml-3'}
                    `}
                >
                    EchoGPT
                </span>
            </Link>

            <button
                onClick={closeMobile}
                className="lg:hidden p-2 -mr-2 text-foreground/60 hover:text-foreground hover:bg-foreground/10 rounded-lg cursor-pointer"
            >
                <X size={24} />
            </button>
        </div>
    );
};