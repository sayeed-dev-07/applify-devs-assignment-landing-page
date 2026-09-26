import data from '../public/data/pricing.json';
import type { PricingPlan } from '@/types/site';

export interface PricingPageData {
  eyebrow: string;
  title: string;
  description: string;
  billingOptions: string[];
  yearlySavings: string;
  plans: PricingPlan[];
  trustNote: string;
  paymentNote: string;
}

export const pricingData = data as PricingPageData;
