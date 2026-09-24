'use client'
import IntroAnimation from '@/components/providers/IntroAnimation';
import React, { useState } from 'react';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const [introFinised, setIntroFinished] = useState(false)

    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default ClientLayout;