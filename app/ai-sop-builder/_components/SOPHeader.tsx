import React from 'react';

export const SOPHeader = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3 mb-8 w-full max-w-2xl mx-auto">
            <h2 className="font-header text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Choose Your SOP Template
            </h2>
            <p className="text-foreground/60 text-sm leading-relaxed">
                Select the template that best matches your background and the focus of your application. Each template is optimized for different types of applicants and academic goals.
            </p>
        </div>
    );
};