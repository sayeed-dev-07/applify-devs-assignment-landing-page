/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';



const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(window.localStorage.getItem('echogpt-theme') === 'dark');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('echogpt-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''} flex  w-full overflow-hidden bg-background font-outfit md:h-dvh text-foreground selection:bg-foreground selection:text-background`}>
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isCollapsed={isCollapsed}
      />

      <div className="relative flex h-full min-h-0 min-w-0 flex-1 flex-col">
        <Navbar
          toggleMobile={() => setIsMobileOpen(true)}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <main className="min-h-0 flex-1 overflow-y-auto p-2.5 md:p-8">
          {children}
        </main>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default AppShell;
