"use client";
import React, { useState } from 'react';
import { StudioHeader } from './_components/StudioHeader';
import { GeneratorCard } from './_components/GeneratorCard';
import { StudioGallery } from './_components/StudioGallery';

const ImageStudioPage = () => {
    const [prompt, setPrompt] = useState("");
    const [aspectRatio, setAspectRatio] = useState("1:1");
    const [imageCount, setImageCount] = useState(1);
    const [selectedModel, setSelectedModel] = useState("nano-lite");

    return (
        <div className="flex-1 h-full overflow-y-auto w-full">
            <div className="max-w-4xl mx-auto w-full px-2 sm:px-6 py-12 md:py-10 flex flex-col gap-4 sm:gap-12">

                <StudioHeader />

                <GeneratorCard
                    prompt={prompt}
                    setPrompt={setPrompt}
                    aspectRatio={aspectRatio}
                    setAspectRatio={setAspectRatio}
                    imageCount={imageCount}
                    setImageCount={setImageCount}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                />

                <StudioGallery />

            </div>
        </div>
    );
};

export default ImageStudioPage;