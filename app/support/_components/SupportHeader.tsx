"use client";
import React, { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';

export const SupportHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex flex-col items-center text-center gap-6 mb-4 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2 shadow-sm">
                    <HelpCircle size={24} />
                </div>
                <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    Support
                </h1>
                <p className="text-foreground/60 text-sm md:text-base max-w-lg leading-relaxed">
                    Find answers, troubleshoot issues, or get in touch with our team. We are here to help.
                </p>
            </div>

            {/* Knowledge Base Search */}
            <div className="relative w-full flex items-center bg-background border border-foreground/15 rounded-2xl shadow-sm focus-within:border-foreground/40 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300">
                <Search size={18} className="absolute left-4 text-foreground/40" />
                <input
                    type="text"
                    placeholder="Search for articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/40 font-medium"
                />
            </div>
        </div>
    );
};