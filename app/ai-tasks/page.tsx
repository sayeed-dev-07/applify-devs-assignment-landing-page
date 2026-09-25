"use client";
import React from 'react';
import { AITasksHeader } from './_components/AITasksHeader';
import { AITasksGrid } from './_components/AITasksGrid';


const AITasksPage = () => {
    return (
        <div className="flex-1 h-full overflow-y-auto w-full ">
            <div className="max-w-6xl mx-auto w-full px-2 sm:px-6 py-12 md:py-16 flex flex-col gap-10">

                <AITasksHeader />
                <AITasksGrid />

            </div>
        </div>
    );
};

export default AITasksPage;