"use client";
import React, { useState } from 'react';
import { Search, FileText, Database, Cloud, MessageSquare } from 'lucide-react';
import { ConnectorCard } from './ConnectorCard';
import { BsGithub, BsSlack } from 'react-icons/bs';


const initialConnectors = [
    { id: 'github', name: 'GitHub', description: 'Analyze repositories, review code, and automate pull requests.', icon: BsGithub, isConnected: true },
    { id: 'notion', name: 'Notion', description: 'Sync your workspace documents and query your knowledge base.', icon: FileText, isConnected: true },
    { id: 'slack', name: 'Slack', description: 'Interact with EchoGPT directly within your team channels.', icon: BsSlack, isConnected: false },
    { id: 'postgres', name: 'PostgreSQL', description: 'Connect securely to query your database using natural language.', icon: Database, isConnected: false },
    { id: 'gdrive', name: 'Google Drive', description: 'Index and search across your documents, sheets, and slides.', icon: Cloud, isConnected: false },
    { id: 'discord', name: 'Discord', description: 'Add the EchoGPT bot to your server for community interactions.', icon: MessageSquare, isConnected: false },
];

export const ConnectorsGrid = () => {
    const [connectors, setConnectors] = useState(initialConnectors);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<'all' | 'connected' | 'available'>('all');

    const toggleConnection = (id: string) => {
        setConnectors(connectors.map(c =>
            c.id === id ? { ...c, isConnected: !c.isConnected } : c
        ));
    };

    const filteredConnectors = connectors.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filter === 'all'
            ? true
            : filter === 'connected'
                ? c.isConnected
                : !c.isConnected;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full flex flex-col gap-6 relative z-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-foreground/2 border focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300 border-foreground/10 rounded-2xl p-2 shadow-sm">

                <div className="relative w-full sm:w-64 flex items-center shrink-0">
                    <Search size={16} className="absolute left-3 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search connectors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent outline-none text-sm py-2 pl-9 pr-3 text-foreground placeholder:text-foreground/40"
                    />
                </div>

                <div className="w-full sm:w-px h-px sm:h-6 bg-foreground/10"></div>

                {/* Filter Tabs */}
                <div className="flex items-center w-full sm:w-auto p-1 bg-foreground/5 rounded-xl shrink-0">
                    {(['all', 'connected', 'available'] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer
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

            {/* Grid Layout */}
            {filteredConnectors.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                    {filteredConnectors.map((connector) => (
                        <ConnectorCard
                            key={connector.id}
                            name={connector.name}
                            description={connector.description}
                            icon={connector.icon}
                            isConnected={connector.isConnected}
                            onToggle={() => toggleConnection(connector.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-full border border-dashed border-foreground/15 rounded-3xl p-12 flex flex-col items-center justify-center text-center gap-3 bg-foreground/[0.01]">
                    <Search size={24} className="text-foreground/20" />
                    <p className="text-foreground/50 text-sm">
                        No connectors found matching &quot;{searchQuery}&quot;.
                    </p>
                </div>
            )}
        </div>
    );
};