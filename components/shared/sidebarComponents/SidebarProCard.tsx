import React from 'react';
import { Sparkles } from 'lucide-react';

interface SidebarProCardProps {
    isCollapsed: boolean;
}

export const SidebarProCard = ({ isCollapsed }: SidebarProCardProps) => {
    return (
        <div className="p-4 shrink-0 relative">
            {/* Expanded Card */}
            <div
                className={`border border-foreground/20 bg-foreground/5 rounded-2xl p-4 transition-[opacity,transform] ease-in-out 
          ${isCollapsed ? 'opacity-0 pointer-events-none translate-y-4 absolute inset-4 duration-[160ms]' : 'opacity-100 translate-y-0 relative duration-[280ms] delay-[120ms]'}
        `}
            >
                <div className="flex items-center gap-2 mb-2 text-foreground">
                    <Sparkles size={16} />
                    <h4 className="font-header font-bold text-sm">Unlock Pro Features</h4>
                </div>
                <p className="text-[11px] text-foreground/70 mb-4 leading-relaxed">
                    With statistics on your shot & profile performance available to Pros.
                </p>
                <button className="w-full bg-foreground text-background font-bold text-sm py-2 rounded-xl hover:bg-foreground/90 transition-colors cursor-pointer">
                    Upgrade to Pro
                </button>
            </div>

            {/* Collapsed Icon Button */}
            <button
                className={`lg:flex hidden mx-auto w-10 h-10 bg-foreground/5 border border-foreground/20 hover:bg-foreground/10 rounded-xl items-center justify-center text-foreground transition-opacity ease-in-out cursor-pointer
          ${isCollapsed ? 'opacity-100 duration-[280ms] delay-[120ms]' : 'opacity-0 pointer-events-none absolute duration-[160ms]'}
        `}
                title="Upgrade to Pro"
            >
                <Sparkles size={20} />
            </button>
        </div>
    );
};
