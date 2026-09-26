import React from 'react';
import { Activity, Search } from 'lucide-react';

export const JobAnalysisReport = () => {
    return (
        <div className="flex flex-col h-full relative z-10 w-full">
            <h3 className="font-header text-sm font-bold text-foreground border-b border-foreground/20 pb-3 mb-4 pl-2">
                Analysis Report
            </h3>

            {/* Empty State */}
            <div className="w-full h-full min-h-[400px] border-2 border-dashed border-foreground/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 bg-foreground/[0.01]">
                <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/20 mb-2">
                    <Activity size={32} />
                </div>
                <h4 className="font-semibold text-foreground/70">No Analysis Yet</h4>
                <p className="text-foreground/40 text-sm max-w-xs leading-relaxed">
                    Paste your resume and a job description on the left, then click &quot;Analyze Match&quot; to uncover your applicant score and missing keywords.
                </p>

                {/* Decorative Mock Elements to indicate what will appear */}
                <div className="flex gap-2 mt-4 opacity-30 pointer-events-none">
                    <div className="h-8 w-24 bg-foreground/40 rounded-lg"></div>
                    <div className="h-8 w-24 bg-foreground/40 rounded-lg"></div>
                    <div className="h-8 w-8 bg-foreground/40 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};