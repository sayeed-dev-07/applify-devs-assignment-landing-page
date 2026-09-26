"use client";
import React from 'react';
import { Sparkles, FileText, Target, Upload } from 'lucide-react';

interface JobAnalysisFormProps {
    resume: string;
    setResume: (val: string) => void;
    jobDescription: string;
    setJobDescription: (val: string) => void;
    onAnalyze: () => void;
}

export const JobAnalysisForm = ({
    resume, setResume, jobDescription, setJobDescription, onAnalyze
}: JobAnalysisFormProps) => {

    const isReady = resume.trim().length > 0 && jobDescription.trim().length > 0;

    return (
        <div className="w-full flex flex-col gap-4 relative z-20">
            <div className="w-full bg-foreground/2 border border-foreground/40 rounded-3xl p-4 flex flex-col gap-4 shadow-sm">

                {/* Resume Input Area */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between px-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
                            <FileText size={14} />
                            Your Resume
                        </label>
                        <button className="text-[10px] flex items-center gap-1 font-semibold text-foreground/50 hover:text-foreground transition-colors cursor-pointer bg-foreground/5 px-2 py-1 rounded-md">
                            <Upload size={12} />
                            Upload PDF
                        </button>
                    </div>
                    <textarea
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        placeholder="Paste your resume content here..."
                        className="w-full bg-background border border-foreground/20 focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all duration-300 rounded-2xl resize-none outline-none text-sm p-4 text-foreground placeholder:text-foreground/30 h-[180px]"
                    />
                </div>

                {/* Job Description Input Area */}
                <div className="flex flex-col gap-2">
                    <div className="px-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
                            <Target size={14} />
                            Job Description
                        </label>
                    </div>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the target job description..."
                        className="w-full bg-background border border-foreground/20 focus:border-foreground/30 focus:ring-4 focus:ring-foreground/5 transition-all duration-300 rounded-2xl resize-none outline-none text-sm p-4 text-foreground placeholder:text-foreground/30 h-[180px] custom-scrollbar"
                    />
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-foreground/5">
                    <span className="text-[10px] text-foreground/40 max-w-[200px] leading-relaxed">
                        Analysis takes ~10 seconds and uses 1 Pro credit.
                    </span>

                    <button
                        disabled={!isReady}
                        onClick={onAnalyze}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-md
                            ${isReady
                                ? 'bg-foreground text-background hover:opacity-90'
                                : 'bg-foreground/10 text-foreground/40 pointer-events-none shadow-none'
                            }
                        `}
                    >
                        <Sparkles size={16} />
                        Analyze Match
                    </button>
                </div>
            </div>
        </div>
    );
};