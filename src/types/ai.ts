export interface Recommendation {
  id: string;
  type: 'tailor' | 'style' | 'pricing' | 'booking';
  title: string;
  description: string;
  matchScore: number;
  reason: string;
  image?: string;
  metadata?: any;
}

export interface FashionTrend {
  id: string;
  label: string;
  growth: number;
  description: string;
  image: string;
  region: string;
}

export interface StyleProfile {
  ethnic: number;
  formal: number;
  casual: number;
  bridal: number;
  modern: number;
}
