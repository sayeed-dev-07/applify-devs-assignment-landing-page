"use client";
import React from 'react';
import { ConnectorsGrid } from './_components/ConnectorsGrid';
import { ConnectorsHeader } from './_components/ConnectorsHeader';


const ConnectorsPage = () => {
    return (
        <div className="flex-1 h-full overflow-y-auto w-full ">
            <div className="max-w-6xl mx-auto w-full px-2 sm:px-6 py-12 md:py-10 flex flex-col gap-8 md:gap-12">

                <ConnectorsHeader />
                <ConnectorsGrid />

            </div>
        </div>
    );
};

export default ConnectorsPage;