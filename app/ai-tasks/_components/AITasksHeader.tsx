import React from 'react';

export const AITasksHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-4 mb-2">
            <h1 className="font-header text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                EchoGPT AI Tasks
            </h1>
            <p className="text-foreground/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.
            </p>
        </div>
    );
};