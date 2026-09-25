import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
    targetBlank?: boolean;
    isActive?: boolean;
    isPrimary?: boolean;
    isCollapsed: boolean;
    pro?: boolean;
    closeMobile: () => void;
}

export const SidebarItem = ({ icon: Icon, label, href, targetBlank, isActive, isPrimary, isCollapsed, pro, closeMobile }: SidebarItemProps) => {
    return (
        <Link
            href={href}
            target={targetBlank ? '_blank' : undefined}
            rel={targetBlank ? 'noopener noreferrer' : undefined}
            aria-current={isActive ? 'page' : undefined}
            onClick={closeMobile}
            title={isCollapsed ? label : undefined}
            className={`flex items-center rounded-xl transition-all duration-[400ms] ease-in-out cursor-pointer group shrink-0 py-2.5 overflow-hidden
            ${isCollapsed ? 'w-11 mx-auto justify-center px-0' : 'w-full mx-0 justify-start px-3'}
            ${isActive
                    ? 'bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200'
                    : 'text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                }
            ${isPrimary ? 'mt-1 mb-3' : ''}
        `}
        >
            <Icon size={20} className="shrink-0" />
            <span
                className={`overflow-hidden whitespace-nowrap font-medium text-base transition-[max-width,opacity,margin] duration-400 ease-in-out 
                ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-45 opacity-100 ml-3 text-left flex-1'}
                `}
            >
                {label}
            </span>
            {
                !isCollapsed && pro && (
                    <span className='text-[10.5px] font-outfit uppercase font-semibold text-current'>pro</span>
                )
            }
        </Link>
    );
};
