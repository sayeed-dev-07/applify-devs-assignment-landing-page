"use client";
import React from 'react';
import {
  Target, Sparkles, PenTool, Image as ImageIcon,
  Paperclip, Mic, Send, ChevronDown, Info
} from 'lucide-react';

const ChatContainer = () => {
  const suggestions = [
    {
      title: "Unlock Your Creative Flow",
      description: "Receive custom prompts that reflect your writing style and spark new ideas.",
      icon: Sparkles,
      color: "text-foreground/65"
    },
    {
      title: "Build a Resume That Shines",
      description: "Craft a resume tailored to highlight your experience and match the job you want.",
      icon: PenTool,
      color: "text-foreground/65"
    },
    {
      title: "Set a Challenge That Transforms",
      description: "Create a personalized challenge based on your goals designed to push you.",
      icon: Target,
      color: "text-foreground/65"
    },
    {
      title: "Write Irresistible Content",
      description: "Generate catchy, clever captions for your photos or videos.",
      icon: ImageIcon,
      color: "text-foreground/65"
    }
  ];

  return (
    <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-background">

      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-start overflow-y-auto px-3 pb-3 pt-6 sm:px-6 md:justify-center md:p-10">

        <div className="my-0 flex w-full max-w-3xl flex-col items-center py-6 md:my-auto md:py-10">

          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/3 text-foreground shadow-sm">
            <Target size={27} strokeWidth={1.6} />
          </div>
          <h1 className="mb-3 text-center font-header text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What can I help you with?
          </h1>
          <p className="mb-9 max-w-lg text-center text-sm leading-relaxed text-foreground/60 md:mb-10 md:text-base">
            Start with a question, a rough idea, or something you want to get done. We can shape it together.
          </p>

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
            {suggestions.map((card, idx) => (
              <button
                key={idx}
                type="button"
                className="group cursor-pointer rounded-2xl border border-foreground/10 bg-background p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-foreground/2.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <card.icon size={18} className={card.color} />
                  <h3 className="font-semibold text-sm text-foreground">{card.title}</h3>
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {card.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/*  bottom search bar  */}
      <div className="z-10 flex w-full shrink-0 flex-col items-center justify-center bg-gradient-to-t from-background via-background to-transparent px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4">

        <div className="w-full max-w-3xl">
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
              <button type="button" className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-xs font-semibold text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground">
                <Target size={14} />
                EchoGPT 4.0
                <ChevronDown size={14} className="opacity-50" />
              </button>
            </div>

            {/* Input Field */}
            <div className="flex items-end gap-2 px-1 pt-2">
              <button type="button" aria-label="Attach a file" className="shrink-0 cursor-pointer rounded-full p-3 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground">
                <Paperclip size={20} />
              </button>

              <textarea
                rows={1}
                placeholder="Ask a question..."
                className="max-h-32 w-full resize-none bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-foreground/40 custom-scrollbar"
                style={{ minHeight: '44px' }}
              />

              <div className="flex items-center gap-1 shrink-0 pb-1">
                <button type="button" aria-label="Record a voice message" className="cursor-pointer rounded-full p-2.5 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground">
                  <Mic size={20} />
                </button>
                <button type="button" aria-label="Send message" className="flex cursor-pointer items-center justify-center rounded-full bg-foreground p-2.5 text-background transition-opacity hover:opacity-80">
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

    </div>
  );
};

export default ChatContainer;
