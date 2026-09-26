"use client";
import React, { useState } from 'react';
import { Search, Settings2 } from 'lucide-react';
import { HistoryItem, HistoryType } from './HistoryItem';
import { historyData } from '@/data/HistoryData';

export const HistoryList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | HistoryType>('all');

    // Filter logic
    const filteredData = historyData.map(group => {
        const filteredItems = group.items.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.snippet.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = filter === 'all' || item.type === filter;
            return matchesSearch && matchesType;
        });
        return { ...group, items: filteredItems };
    }).filter(group => group.items.length > 0);

    return (
        <div className="w-full flex flex-col gap-6 relative z-20">

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-foreground/2 border focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300 border-foreground/10 rounded-2xl p-2 shadow-sm">

                <div className="relative w-full sm:w-64 flex items-center shrink-0">
                    <Search size={16} className="absolute left-3 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search history..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent outline-none text-sm py-2 pl-9 pr-3 text-foreground placeholder:text-foreground/40"
                    />
                </div>

                <div className="w-full sm:w-px h-px sm:h-6 bg-foreground/10"></div>

                <div className="flex items-center w-full sm:w-auto p-1 bg-foreground/5 rounded-xl shrink-0 overflow-x-auto  ">
                    {(['all', 'chat', 'image', 'video'] as const).map((f) => (
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
                            {f === 'all' ? 'All Activity' : `${f}s`}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grouped History List */}
            {filteredData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    {filteredData.map((group, groupIdx) => (
                        <div key={groupIdx} className="flex flex-col gap-2">
                            {/* Date Group Header */}
                            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/40 pl-2">
                                {group.dateGroup}
                            </h3>

                            {/* List Container */}
                            <div className="w-full bg-foreground/1 border border-foreground/10 rounded-3xl overflow-hidden shadow-sm">
                                {group.items.map((item) => (
                                    <HistoryItem
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/1">
                    <Settings2 size={24} className="text-foreground/20" />
                    <p className="text-foreground/50 text-sm">
                        No history found matching your filters.
                    </p>
                </div>
            )}
        </div>
    );
};
