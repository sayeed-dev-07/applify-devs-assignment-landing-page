import React from 'react';
import { BookOpen, CreditCard, Settings, Code, ArrowRight } from 'lucide-react';
import { supportCategoriesData } from '@/data/SupportData';

const categoryIcons = { BookOpen, CreditCard, Settings, Code };

export const SupportCategories = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
            {supportCategoriesData.map((category) => {
                const Icon = categoryIcons[category.iconKey as keyof typeof categoryIcons];
                return (
                <button
                    key={category.id}
                    className="group flex flex-col p-6 rounded-3xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-foreground/20 hover:shadow-md transition-all duration-300 text-left w-full cursor-pointer"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground shrink-0 shadow-sm transition-colors group-hover:bg-foreground group-hover:text-background">
                            <Icon size={18} />
                        </div>
                        <div className="p-1 text-foreground/20 group-hover:text-foreground/60 transition-colors">
                            <ArrowRight size={18} />
                        </div>
                    </div>

                    <h3 className="font-semibold text-foreground text-sm mb-1.5">
                        {category.title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                        {category.description}
                    </p>
                </button>
                );
            })}
        </div>
    );
};
