"use client";
import React, { useState } from 'react';

import { VideoGeneratorCard } from './_components/VideoGeneratorCard';
import { VideoStudioGallery } from './_components/VideoStudioGallery';
import { VideoStudioHeader } from './_components/VideoStudioHeader';

const VideoStudioPage = () => {

    const [prompt, setPrompt] = useState("");
    const [aspectRatio, setAspectRatio] = useState("16:9");
    const [duration, setDuration] = useState("5s");
    const [selectedModel, setSelectedModel] = useState("echo-vid-pro");

    return (
        <div className="flex-1 h-full overflow-y-auto w-full ">
            <div className="max-w-4xl mx-auto w-full px-3 sm:px-6 py-12 md:py-10 flex flex-col gap-4 sm:gap-12">

                <VideoStudioHeader />

                <VideoGeneratorCard
                    prompt={prompt}
                    setPrompt={setPrompt}
                    aspectRatio={aspectRatio}
                    setAspectRatio={setAspectRatio}
                    duration={duration}
                    setDuration={setDuration}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                />

                <VideoStudioGallery />

            </div>
        </div>
    );
};

export default VideoStudioPage;