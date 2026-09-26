import Link from 'next/link';
import React from 'react';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex h-full min-h-[calc(100dvh-1rem)] md:min-h-[calc(100dvh-9rem)] w-full flex-col items-center justify-center text-foreground px-4">
            <div className="flex flex-col items-center text-center max-w-md w-full animate-in fade-in zoom-in duration-500">

                <div className="w-20 h-20 rounded-3xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground mb-6 shadow-sm">
                    <Compass size={40} className="opacity-70" />
                </div>

                <h1 className="text-7xl md:text-8xl font-header font-bold tracking-tight mb-2 text-foreground">
                    404
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-foreground/90">
                    Page Not Found
                </h2>

                <p className="text-sm md:text-base text-foreground/60 mb-8 leading-relaxed">
                    The page you are looking for doesn&apos;t exist, has been moved, or is currently unavailable.
                </p>

                <Link
                    href="/"
                    className="flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-2xl font-bold text-sm hover:opacity-90 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                    <Home size={18} />
                    Go back to Home
                </Link>

            </div>
        </div>
    );
}