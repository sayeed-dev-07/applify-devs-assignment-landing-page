"use client";
import React, { useState } from 'react';
import { JobAnalysisForm } from './_components/JobAnalysisForm';
import { JobAnalysisReport } from './_components/JobAnalysisReport';
import { JobAnalysisHeader } from './_components/JobAnalysisHeader';

const AIJobAnalysisPage = () => {
    const [resume, setResume] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const handleAnalyze = () => {
        // Future logic for triggering API goes here
        console.log("Analyzing...");
    };

    return (
        <div className="flex-1 h-full  w-full ">
            <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-12 flex flex-col gap-10">

                <JobAnalysisHeader />

                {/* Two Column Layout for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">

                    {/* Left Column: Inputs */}
                    <JobAnalysisForm
                        resume={resume}
                        setResume={setResume}
                        jobDescription={jobDescription}
                        setJobDescription={setJobDescription}
                        onAnalyze={handleAnalyze}
                    />

                    {/* Right Column: Results Dashboard */}
                    <JobAnalysisReport />

                </div>

            </div>
        </div>
    );
};

export default AIJobAnalysisPage;