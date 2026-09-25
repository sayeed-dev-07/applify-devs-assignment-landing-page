"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';
import { MdOutlineExtension } from 'react-icons/md';
import { BsMagic } from 'react-icons/bs';
import { IoMdAnalytics } from 'react-icons/io';
import { StoreCard } from './StoreCard';


const storeItems = [
    { id: '1', title: 'Data Analyst Pro', creator: 'Echo Team', description: 'Advanced data visualization and CSV analysis agent with Python backend support.', icon: IoMdAnalytics, category: 'agent', rating: '4.9', isAdded: true },
    { id: '2', title: 'Code Refactor Bot', creator: 'DevStudio', description: 'Automatically reviews your code and suggests clean architecture improvements.', icon: FaRobot, category: 'agent', rating: '4.7', isAdded: false },
    { id: '3', title: 'Web Scraper Plugin', creator: 'DataGen', description: 'Extract clean markdown and JSON data from any public URL seamlessly.', icon: MdOutlineExtension, category: 'plugin', rating: '4.5', isAdded: false },
    { id: '4', title: 'Midjourney Prompt Crafter', creator: 'PixelArts', description: 'Generates highly detailed prompt parameters for AI image models.', icon: BsMagic, category: 'prompt', rating: '4.8', isAdded: true },
    { id: '5', title: 'SEO Blog Writer', creator: 'ContentPro', description: 'Creates SEO-optimized long-form articles with built-in keyword density tracking.', icon: FaRobot, category: 'agent', rating: '4.6', isAdded: false },
    { id: '6', title: 'GitHub PR Summarizer', creator: 'GitTools', description: 'Plugin that reads your pull requests and writes human-readable release notes.', icon: MdOutlineExtension, category: 'plugin', rating: '4.9', isAdded: false },
];

export const StoreGrid = () => {
    const [items, setItems] = useState(storeItems);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'agent' | 'plugin' | 'prompt'>('all');

    const toggleAdded = (id: string) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, isAdded: !item.isAdded } : item
        ));
    };

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all' || item.category === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full flex flex-col gap-6 relative z-20">

            {/* Search and Filter Bar */}
            <div className="flex flex-col focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300 sm:flex-row items-center justify-between gap-4 w-full bg-foreground/2 border border-foreground/10 rounded-2xl p-2 shadow-sm">

                <div className="relative  w-full sm:w-64 flex items-center shrink-0">
                    <Search size={16} className="absolute left-3 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search the store..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent outline-none text-sm py-2 pl-9 pr-3 text-foreground placeholder:text-foreground/40"
                    />
                </div>

                <div className="w-full sm:w-px h-px sm:h-6 bg-foreground/10"></div>

                <div className="flex items-center w-full sm:w-auto p-1 bg-foreground/5 rounded-xl shrink-0 overflow-x-auto custom-scrollbar">
                    {(['all', 'agent', 'plugin', 'prompt'] as const).map((f) => (
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
                            {f === 'all' ? 'All Items' : `${f}s`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Layout */}
            {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                    {filteredItems.map((item) => (
                        <StoreCard
                            key={item.id}
                            {...item}
                            onToggle={() => toggleAdded(item.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/1">
                    <Search size={24} className="text-foreground/20" />
                    <p className="text-foreground/50 text-sm">
                        No extensions found matching &quot;{searchQuery}&quot;.
                    </p>
                </div>
            )}
        </div>
    );
};