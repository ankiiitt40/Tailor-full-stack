import { Service } from "./profile";

export interface TailorComparison {
  id: string;
  name: string;
  shopName: string;
  image: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  distance: string;
  isVerified: boolean;
  startingPrice: number;
  deliveryTime: string;
  services: string[];
  hasUrgentDelivery: boolean;
  fabricSupport: string[];
  hasHomePickup: boolean;
  designExpertise: number; // 1-10
  alterationSupport: boolean;
  bridalExpertise: number; // 1-10
  repeatCustomerRate: number; // percentage
  onTimeDeliveryRate: number; // percentage
  popularityScore: number;
}

export interface ServicePricePoint {
  serviceName: string;
  prices: {
    tailorId: string;
    price: number;
    delivery: string;
  }[];
}
