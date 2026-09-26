"use client";
import React, { useState } from 'react';
import { Search, Lightbulb, Rocket, Sparkles, Palette, Zap, Target, Users, FileText, Mail, Briefcase, Gamepad2, Film, Bike, TreePine, Settings2 } from 'lucide-react';
import { FaXTwitter, FaYoutube, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { AITaskAppCard } from './AITaskCard';
import { aiTasksData } from '@/data/AITasksData';


type Category = 'Ideas' | 'Work' | 'Fun' | 'Online Content';

const taskIcons = { Lightbulb, Rocket, Sparkles, Palette, Zap, Target, Users, FileText, Mail, Briefcase, Gamepad2, Film, Bike, TreePine, XTwitter: FaXTwitter, Youtube: FaYoutube, Tiktok: FaTiktok, Instagram: FaInstagram, Linkedin: FaLinkedin };

export const AITasksGrid = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | Category>('all');

    const filteredApps = aiTasksData.filter(app => {
        const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filter === 'all' || app.category === filter;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="w-full flex flex-col gap-6 relative z-20">

            {/* Standardized Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300 bg-foreground/2 border border-foreground/10 rounded-2xl p-2 shadow-sm">

                <div className="relative w-full sm:w-64 flex items-center shrink-0">
                    <Search size={16} className="absolute left-3 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search for Apps..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent outline-none text-sm py-2 pl-9 pr-3 text-foreground placeholder:text-foreground/40"
                    />
                </div>

                <div className="w-full sm:w-px h-px sm:h-6 bg-foreground/10"></div>

                <div className="flex items-center w-full sm:w-auto p-1 bg-foreground/5 rounded-xl shrink-0 overflow-x-auto ">
                    {(['all', 'Ideas', 'Work', 'Fun', 'Online Content'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer whitespace-nowrap
                                ${filter === f
                                    ? 'bg-background text-foreground shadow-sm'
                                    : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                                }
                            `}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Standard Grid Layout */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                    {filteredApps.map((app) => {
                        const Icon = taskIcons[app.iconKey as keyof typeof taskIcons];
                        return (
                        <AITaskAppCard
                            key={app.id}
                            title={app.title}
                            description={app.description}
                            icon={Icon}
                        />
                        );
                    })}
                </div>
            ) : (
                <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/1">
                    <Settings2 size={24} className="text-foreground/20" />
                    <p className="text-foreground/50 text-sm">
                        No apps found matching &quot;{searchQuery}&quot;.
                    </p>
                </div>
            )}
        </div>
    );
};
