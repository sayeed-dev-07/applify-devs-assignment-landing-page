import React from 'react';
import { FaStore } from 'react-icons/fa';

export const StoreHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground mb-2 shadow-sm">
                <FaStore size={22} />
            </div>
            <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Echo Store
            </h1>
            <p className="text-foreground/60 text-sm md:text-base max-w-md mx-auto">
                Discover specialized agents, powerful plugins, and custom workflows.
            </p>
        </div>
    );
};