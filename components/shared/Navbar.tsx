"use client";
import React, { useEffect, useRef, useState } from 'react';
import { LogOut, Menu, Moon, PanelLeftClose, PanelLeftOpen, Settings, Sparkles, Sun, UserRound } from 'lucide-react';

interface NavbarProps {
  toggleMobile: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const Navbar = ({ toggleMobile, isCollapsed, setIsCollapsed, isDark, setIsDark }: NavbarProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!profileRef.current?.contains(event.target as Node)) setIsProfileOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsProfileOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-6 border-b border-foreground/10 bg-background/80 backdrop-blur-md sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobile}
          className="p-2 -ml-2 cursor-pointer lg:hidden rounded-lg hover:bg-foreground/5 transition-colors text-foreground/80 hover:text-foreground"
        >
          <Menu size={24} />
        </button>


        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 -ml-2 hidden lg:flex rounded-lg hover:bg-foreground/5 cursor-pointer transition-colors text-foreground/60 hover:text-foreground"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>

        <h2 className="font-header font-semibold text-lg lg:hidden">Echo GPT</h2>
      </div>

      <div className="relative" ref={profileRef}>
        <button
          type="button"
          onClick={() => setIsProfileOpen((open) => !open)}
          aria-label="Open profile menu"
          aria-haspopup="menu"
          aria-expanded={isProfileOpen}
          className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground text-background shadow-sm transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <UserRound size={19} />
        </button>

        {isProfileOpen && (
          <div role="menu" aria-label="Profile menu" className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-foreground/10 bg-background text-foreground shadow-xl shadow-black/10">
            <div className="px-4 py-4">
              <p className="font-semibold">Your account</p>
              <p className="mt-0.5 text-sm text-foreground/55">Manage your EchoGPT account</p>
            </div>

            <div className="border-t border-foreground/10 p-2">
              <button type="button" role="menuitem" onClick={() => setIsProfileOpen(false)} className="flex w-full items-center gap-3 rounded-xl cursor-pointer px-3 py-2.5 text-left text-sm transition hover:bg-foreground/5">
                <Sparkles size={18} className="text-foreground/65" />
                <span>Upgrade plan</span>
              </button>
              <button type="button" role="menuitem" onClick={() => setIsProfileOpen(false)} className="flex w-full items-center gap-3 rounded-xl px-3 cursor-pointer py-2.5 text-left text-sm transition hover:bg-foreground/5">
                <Settings size={18} className="text-foreground/65" />
                <span>Settings</span>
              </button>
            </div>

            <div className="border-t border-foreground/10 p-2">
              <button type="button" role="menuitemcheckbox" aria-checked={isDark} onClick={() => setIsDark(!isDark)} className="flex w-full items-center cursor-pointer gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-foreground/5">
                {isDark ? <Moon size={18} className="text-foreground/65" /> : <Sun size={18} className="text-foreground/65" />}
                <span className="flex-1">Dark mode</span>
                <span aria-hidden="true" className={`flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${isDark ? 'bg-foreground' : 'bg-foreground/15'}`}>
                  <span className={`h-4 w-4 rounded-full bg-background shadow-sm transition-transform ${isDark ? 'translate-x-4' : 'translate-x-0'}`} />
                </span>
              </button>
            </div>

            <div className="border-t border-foreground/10 p-2">
              <button type="button" role="menuitem" onClick={() => setIsProfileOpen(false)} className="flex w-full items-center gap-3 cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-foreground/5">
                <LogOut size={18} className="text-foreground/65" />
                <span>Log out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
