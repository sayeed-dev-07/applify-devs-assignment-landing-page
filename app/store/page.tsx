"use client";
import React from 'react';
import { StoreHeader } from './_components/StoreHeader';
import { StoreGrid } from './_components/StoreGrid';


const StorePage = () => {
    return (
        <div className="flex-1 h-full overflow-y-auto w-full">
            <div className="max-w-6xl mx-auto w-full px-3 sm:px-6 py-12 md:py-10 flex flex-col gap-8 md:gap-12">

                <StoreHeader />
                <StoreGrid />

            </div>
        </div>
    );
};

export default StorePage;