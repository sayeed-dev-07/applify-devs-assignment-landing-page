"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
    MessageSquare, Image as ImageIcon, Video, Layers,
    Link2, History, ShoppingBag, Grid, Briefcase, FileText,
    HelpCircle, Newspaper, CreditCard, Code, MessageCircle
} from 'lucide-react';


import { SidebarItem } from './sidebarComponents/SidebarItem';
import { SidebarProCard } from './sidebarComponents/SidebarProCard';
import { SidebarHeader } from './sidebarComponents/SidebarHeader';

gsap.registerPlugin(useGSAP);
gsap.config({
    force3D: true
})

interface SidebarProps {
    isMobileOpen: boolean;
    setIsMobileOpen: (val: boolean) => void;
    isCollapsed: boolean;
}

const navItems = [
    { name: 'New Chat', icon: MessageSquare, isPrimary: true, link: '/' },
    { label: 'ENGAGEMENT' },
    { name: 'Image Studio', icon: ImageIcon, pro: true, link: '/image-studio' },
    { name: 'Video Studio', icon: Video, pro: true, link: '/video-studio' },
    { name: 'Compare', icon: Layers, link: '/compare' },
    { name: 'Connectors', icon: Link2, link: '/connectors' },
    { name: 'History', icon: History, link: '/history' },
    { name: 'Store', icon: ShoppingBag, link: '/store' },
    { label: 'AI TASKS' },
    { name: 'AI Tasks', icon: Grid, link: '/ai-tasks' },
    { name: 'AI Job Analysis', icon: Briefcase, link: '/ai-job-analysis' },
    { name: 'AI SOP Builder', icon: FileText, link: '/ai-sop-builder' },
    { label: 'HELP & SUPPORT' },
    { name: 'Support', icon: HelpCircle, link: '/support' },
    { name: 'Newsletter', icon: Newspaper, link: '/newsletter' },
    { name: 'Subscriptions', icon: CreditCard, link: '/subscriptions' },
    { name: 'API Platform', icon: Code, link: '/api-platform' },
    { name: 'Discord', icon: MessageCircle, link: '/discord' },
];

const Sidebar = ({ isMobileOpen, setIsMobileOpen, isCollapsed }: SidebarProps) => {
    const sidebarRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();


        mm.add("(min-width: 1024px)", () => {
            gsap.set(sidebarRef.current, { x: 0 });
            gsap.to(sidebarRef.current, {
                width: isCollapsed ? 80 : 280,
                duration: 0.4,
                ease: "power3.inOut"
            });
        });

        mm.add("(max-width: 1023px)", () => {
            gsap.set(sidebarRef.current, { width: 280 });
            gsap.to(sidebarRef.current, {
                x: isMobileOpen ? 0 : -280,
                duration: 0.4,
                ease: "power3.out"
            });
        });

        return () => mm.revert();
    }, [isCollapsed, isMobileOpen]);

    return (
        <aside
            ref={sidebarRef}
            className="fixed font-outfit lg:relative top-0 left-0 h-svh z-50 bg-background border-r border-foreground/10 flex flex-col shrink-0 -translate-x-full lg:translate-x-0 w-[280px]"
        >
            <SidebarHeader
                isCollapsed={isCollapsed}
                closeMobile={() => setIsMobileOpen(false)}
            />

            <nav className={`flex-1 overflow-y-auto overflow-x-hidden py-2 space-y-1 
        ${isCollapsed ? 'px-4' : 'px-3'}
      `}>
                {navItems.map((item, idx) => {
                    if (item.label) {
                        return (
                            <div key={idx} className={`pt-4 pb-2 transition-[padding] duration-[400ms] ease-in-out ${isCollapsed ? 'px-0 text-center' : 'px-3'}`}>
                                <span className={`text-[10px] font-bold text-foreground/40 uppercase tracking-wider transition-opacity ease-in-out ${isCollapsed ? 'opacity-0 duration-[160ms]' : 'opacity-100 duration-[280ms] delay-[120ms]'}`}>
                                    {item.label}
                                </span>

                                {isCollapsed && <div className="w-1 h-1 bg-foreground/20 rounded-full mx-auto mt-2" />}
                            </div>
                        )
                    }

                    return (
                        <SidebarItem
                            key={idx}
                            icon={item.icon!}
                            label={item.name!}
                            href={item.link!}
                            isPrimary={item.isPrimary}
                            isCollapsed={isCollapsed}
                            pro={item.pro}
                        />
                    )
                })}
            </nav>

            <SidebarProCard isCollapsed={isCollapsed} />
        </aside>
    );
};

export default Sidebar;
