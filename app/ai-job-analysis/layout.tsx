import type { ReactNode } from 'react';
import { createRouteMetadata } from '@/data/SeoMetadata';

export const metadata = createRouteMetadata(
  'AI Resume and Job Analysis',
  'Compare your resume with a job description using AI. Find matching skills, identify gaps, and get practical suggestions for your application.',
  ['AI resume analysis', 'resume job match', 'job description analysis', 'resume feedback']
);

export default function AIJobAnalysisLayout({ children }: { children: ReactNode }) {
  return children;
}
