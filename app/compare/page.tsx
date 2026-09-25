"use client";
import React, { useState } from 'react';
import { CompareGallery } from './_components/CompareGallery';
import { CompareHeader } from './_components/CompareHeader';
import { CompareGeneratorCard } from './_components/CompareGeneratorCard';


const ComparePage = () => {
    const [prompt, setPrompt] = useState("");


    const [selectedModels, setSelectedModels] = useState<string[]>([
        'echo-4', 'echo-3', 'nano-pro'
    ]);

    return (
        <div className="flex-1 h-full overflow-y-auto w-full ">


            <div className="max-w-6xl mx-auto w-full px-3 sm:px-6 py-12 md:py-10 flex flex-col gap-4 sm:gap-12">

                <CompareHeader />

                <div className="max-w-4xl mx-auto  w-full">
                    <CompareGeneratorCard
                        prompt={prompt}
                        setPrompt={setPrompt}
                        selectedModels={selectedModels}
                        setSelectedModels={setSelectedModels}
                    />
                </div>

                <CompareGallery selectedModels={selectedModels} />

            </div>
        </div>
    );
};

export default ComparePage;