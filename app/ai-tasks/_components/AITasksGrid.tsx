"use client";
import React, { useState } from 'react';
import { Search, Lightbulb, Rocket, Sparkles, Palette, Zap, Target, Users, FileText, Mail, Briefcase, Gamepad2, Film, Bike, TreePine, Users2, Settings2 } from 'lucide-react';
import { FaXTwitter, FaYoutube, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { AITaskAppCard } from './AITaskCard';


type Category = 'Ideas' | 'Work' | 'Fun' | 'Online Content';

const appsData = [
    // IDEAS
    { id: 'i1', category: 'Ideas', title: 'Think Outside the Box', description: 'Breakthrough ideas await your discovery', icon: Lightbulb },
    { id: 'i2', category: 'Ideas', title: 'Startup', description: 'Get a list of ambitious startup ideas based on your area of interest', icon: Rocket },
    { id: 'i3', category: 'Ideas', title: 'Innovate and Elevate', description: 'Your guide to unique and fresh ideas', icon: Sparkles },
    { id: 'i4', category: 'Ideas', title: 'Unleashing Creativity', description: 'Explore a world of brilliant ideas', icon: Palette },
    { id: 'i5', category: 'Ideas', title: 'Idea Sparks', description: 'Ignite your creativity for innovative solutions', icon: Zap },

    // WORK
    { id: 'w1', category: 'Work', title: 'Max Productivity', description: 'Max productivity, achieve more, stress less', icon: Target },
    { id: 'w2', category: 'Work', title: 'Recruiting', description: 'Define the qualifications for any position', icon: Users },
    { id: 'w3', category: 'Work', title: 'CV Builder', description: 'Generate a creative resume', icon: FileText },
    { id: 'w4', category: 'Work', title: 'Email', description: 'Get help to craft a compelling email', icon: Mail },
    { id: 'w5', category: 'Work', title: 'Interview Tips', description: 'Receive helpful tips for your interview', icon: Briefcase },

    // FUN
    { id: 'f1', category: 'Fun', title: 'Gaming', description: 'Level up your gaming skills and conquer challenges', icon: Gamepad2 },
    { id: 'f2', category: 'Fun', title: 'Movie Time', description: 'Cinematic delight, enjoy the latest blockbuster', icon: Film },
    { id: 'f3', category: 'Fun', title: 'Cycling Day', description: 'Pedal through scenic routes, relish the ride', icon: Bike },
    { id: 'f4', category: 'Fun', title: 'Outdoor Activities', description: 'Embrace nature, engage in thrilling outdoor adventures', icon: TreePine },
    { id: 'f5', category: 'Fun', title: 'Fun with buddies', description: 'Create memories with friends, have endless fun', icon: Users2 },

    // ONLINE CONTENT
    { id: 'o1', category: 'Online Content', title: 'X Posts', description: 'Summarize your text into a post (Tweet)', icon: FaXTwitter },
    { id: 'o2', category: 'Online Content', title: 'YouTube Scripts', description: 'Create a script for your video on any topic', icon: FaYoutube },
    { id: 'o3', category: 'Online Content', title: 'TikTok Posts', description: 'Craft TikTok posts on any topic', icon: FaTiktok },
    { id: 'o4', category: 'Online Content', title: 'TikTok Captions', description: 'Boost your TikTok views with appealing captions', icon: FaTiktok },
    { id: 'o5', category: 'Online Content', title: 'Insta Content', description: 'Create Instagram posts on any topic', icon: FaInstagram },
    { id: 'o6', category: 'Online Content', title: 'Insta Reels', description: 'Get creative descriptions for your Instagram Reels', icon: FaInstagram },
    { id: 'o7', category: 'Online Content', title: 'Insta Captions', description: 'Come up with engaging captions for your Instagram posts', icon: FaInstagram },
    { id: 'o8', category: 'Online Content', title: 'LinkedIn Hiring', description: 'Write clear and concise job descriptions', icon: FaLinkedin },
    { id: 'o9', category: 'Online Content', title: 'LinkedIn Job Search', description: 'Make your LinkedIn cover letter stand out', icon: FaLinkedin },
    { id: 'o10', category: 'Online Content', title: 'LinkedIn Profile', description: 'Enhance your professional presence and stand out', icon: FaLinkedin },
];

export const AITasksGrid = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | Category>('all');

    const filteredApps = appsData.filter(app => {
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
                    {filteredApps.map((app) => (
                        <AITaskAppCard
                            key={app.id}
                            title={app.title}
                            description={app.description}
                            icon={app.icon}
                        />
                    ))}
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