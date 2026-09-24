/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import React, { useEffect, useState } from 'react';


const Page = () => {
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
    <div className={`${isDark ? 'dark' : ''} flex h-svh w-full bg-background text-foreground overflow-hidden`}>

      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isCollapsed={isCollapsed}
      />

      <div className="flex-1 flex flex-col h-full min-w-0 relative">
        <Navbar
          toggleMobile={() => setIsMobileOpen(true)}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto h-[1500px] border border-foreground/10 rounded-2xl p-6 bg-foreground/[0.02]">
            <h1 className="font-header text-3xl font-bold mb-4">Dashboard Overview</h1>
            <p className="text-foreground/70 text-sm">Scroll down to test the layout behavior.</p>
          </div>
        </main>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default Page;
