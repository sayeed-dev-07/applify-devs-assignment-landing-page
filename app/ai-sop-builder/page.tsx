import React from 'react';
import { SOPFeatures } from './_components/SOPFeatures';
import { SOPHeader } from './_components/SOPHeader';
import { SOPTemplatesGrid } from './_components/SOPTemplatesGrid';
import { SOPHistoryEmptyState } from './_components/SOPHistoryEmptyState';


const AISOPBuilderPage = () => {
    return (
        <div className="flex-1 h-full w-full ">
            <div className="w-full px-2 sm:px-6 py-12 md:py-16 flex flex-col">

                {/* Top Features Cards */}
                <SOPFeatures />

                {/* Divider */}
                <div className="w-full max-w-5xl mx-auto h-[1px] bg-foreground/5 my-8"></div>

                {/* Templates Section */}
                <SOPHeader />
                <SOPTemplatesGrid />
                <SOPHistoryEmptyState />

            </div>
        </div>
    );
};

export default AISOPBuilderPage;