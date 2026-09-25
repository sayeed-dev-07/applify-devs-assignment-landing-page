"use client";
import React from 'react';
import { HistoryHeader } from './_components/HistoryHeader';
import { HistoryList } from './_components/HistoryList';


const HistoryPage = () => {
    return (
        <div className="flex-1 h-full overflow-y-auto w-full ">
            <div className="max-w-4xl mx-auto w-full px-2 sm:px-6 py-12 md:py-10 flex flex-col gap-8 md:gap-10">
                <HistoryHeader />
                <HistoryList />

            </div>
        </div>
    );
};

export default HistoryPage;