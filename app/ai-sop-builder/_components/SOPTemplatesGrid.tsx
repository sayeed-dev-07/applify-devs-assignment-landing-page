import React from 'react';
import { GraduationCap, Briefcase, Microscope, Palette } from 'lucide-react';
import { SOPTemplateCard } from './SOPTemplateCard';

const templates = [
    {
        id: 'academic',
        title: 'Academic Excellence',
        description: 'Ideal for students with strong academic records applying to graduate programs.',
        icon: GraduationCap,
        tags: ['Academic', 'Graduate Studies', 'Scholarships']
    },
    {
        id: 'professional',
        title: 'Professional Track',
        description: 'Designed for applicants with significant work experience seeking advanced degrees.',
        icon: Briefcase,
        tags: ['Career', 'Professional Development', 'MBA']
    },
    {
        id: 'research',
        title: 'Research Focused',
        description: 'Perfect for research-oriented applicants targeting PhD or research-intensive programs.',
        icon: Microscope,
        tags: ['Research', 'PhD', 'Innovation']
    },
    {
        id: 'creative',
        title: 'Creative Arts',
        description: 'Tailored for applicants to creative programs like fine arts, design, or writing.',
        icon: Palette,
        tags: ['Creative', 'Arts', 'Portfolio']
    }
];

export const SOPTemplatesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
            {templates.map((template) => (
                <SOPTemplateCard
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    icon={template.icon}
                    tags={template.tags}
                />
            ))}
        </div>
    );
};