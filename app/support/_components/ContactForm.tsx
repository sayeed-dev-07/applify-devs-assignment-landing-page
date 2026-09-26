"use client";
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const isReady = subject.trim().length > 0 && message.trim().length > 0;

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 relative z-20 mt-6">
            <h3 className="font-header text-lg font-bold text-foreground pl-2">
                Still need help?
            </h3>
            
            <div className="w-full bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60 px-1">
                        What is this regarding?
                    </label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Brief subject of your issue..."
                        className="w-full bg-background border border-foreground/10 focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all duration-300 rounded-2xl outline-none text-sm p-4 text-foreground placeholder:text-foreground/30"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60 px-1">
                        Message Details
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe your issue in detail so our team can assist you faster..."
                        className="w-full bg-background border border-foreground/10 focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all duration-300 rounded-2xl resize-none outline-none text-sm p-4 text-foreground placeholder:text-foreground/30 h-[140px] custom-scrollbar"
                    />
                </div>

                <div className="flex items-center justify-between mt-2 pt-6 border-t border-foreground/5">
                    <div className="flex items-center gap-2 text-[11px] text-foreground/50">
                        <MessageSquare size={14} />
                        <span>Average response time: 2-4 hours</span>
                    </div>

                    <button 
                        disabled={!isReady}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-md
                            ${isReady 
                                ? 'bg-foreground text-background hover:opacity-90' 
                                : 'bg-foreground/10 text-foreground/40 pointer-events-none shadow-none'
                            }
                        `}
                    >
                        <Send size={16} className="-ml-1" />
                        Submit Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};