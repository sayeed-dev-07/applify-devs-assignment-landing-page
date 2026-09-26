import React from 'react';
import { GraduationCap, Briefcase, Microscope, Palette } from 'lucide-react';
import { SOPTemplateCard } from './SOPTemplateCard';
import { sopTemplatesData } from '@/data/SOPData';

const templateIcons = { GraduationCap, Briefcase, Microscope, Palette };

export const SOPTemplatesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
            {sopTemplatesData.map((template) => {
                const Icon = templateIcons[template.iconKey as keyof typeof templateIcons];
                return (
                <SOPTemplateCard
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    icon={Icon}
                    tags={template.tags}
                />
                );
            })}
        </div>
    );
};
