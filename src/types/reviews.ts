export interface Review {
  id: string;
  customerId: string;
  customerName: string;
  customerImage: string;
  tailorId: string;
  tailorName: string;
  tailorShop: string;
  serviceName: string;
  rating: number;
  comment: string;
  photos: string[];
  date: string;
  isVerified: boolean;
  helpfulCount: number;
  fitSatisfaction: number; // 1-10
  qualitySatisfaction: number; // 1-10
  deliverySatisfaction: number; // 1-10
  reply?: {
    tailorName: string;
    comment: string;
    date: string;
  };
}

export interface RatingStats {
  averageRating: number;
  totalReviews: number;
  recommendationRate: number; // percentage
  categories: {
    label: string;
    rating: number;
  }[];
  distribution: {
    stars: number;
    count: number;
  }[];
}
