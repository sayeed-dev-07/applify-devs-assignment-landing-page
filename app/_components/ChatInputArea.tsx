"use client";
import React, { useState } from 'react';
import { Paperclip, Mic, Send, Info } from 'lucide-react';
import ModelSelector from './ModelSelector';


export const ChatInputArea = () => {
    const [input, setInput] = useState("");

    return (
        <div className="z-10 flex w-full shrink-0 flex-col items-center justify-center bg-linear-to-t from-background via-background to-transparent px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4">
            <div className="w-full max-w-3xl">

                {/* Usage Info */}
                <div className="mb-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] font-medium text-foreground/40">
                    <Info size={14} />
                    <span>5 of 5 messages left this 5-hour window</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20 mx-1"></span>
                    <span>Resets in 4h 42m</span>
                </div>

                {/* Main Input Container */}
                <div className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-3xl p-2 flex flex-col shadow-sm focus-within:border-foreground/30 focus-within:ring-4 focus-within:ring-foreground/5 transition-all duration-300">

                    {/* Top Toolbar */}
                    <div className="flex items-center justify-between px-3 pb-2 pt-1 border-b border-foreground/5">
                        <ModelSelector initialModel="EchoGPT 4.0" />
                    </div>

                    {/* Input Field */}
                    <div className="flex items-end gap-2 px-1 pt-2">
                        <button type="button" aria-label="Attach a file" className="shrink-0 cursor-pointer rounded-full p-3 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground">
                            <Paperclip size={20} />
                        </button>

                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            rows={1}
                            placeholder="Ask a question..."
                            className="max-h-32 w-full resize-none bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-foreground/40 custom-scrollbar"
                            style={{ minHeight: '44px' }}
                        />

                        <div className="flex items-center gap-1 shrink-0 pb-1">
                            <button type="button" aria-label="Record a voice message" className="cursor-pointer rounded-full p-2.5 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground">
                                <Mic size={20} />
                            </button>
                            <button
                                type="button"
                                aria-label="Send message"
                                className={`flex items-center justify-center rounded-full p-2.5 transition-all cursor-pointer
                                    ${input.trim().length > 0 ? 'bg-foreground text-background hover:opacity-80' : 'bg-foreground/10 text-foreground/30 pointer-events-none'}
                                `}
                            >
                                <Send size={18} className="translate-x-[1px] translate-y-[1px]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-[10px] text-center text-foreground/40 mt-3">
                    EchoGPT can make mistakes. Consider verifying important information.
                </p>
            </div>
        </div>
    );
};