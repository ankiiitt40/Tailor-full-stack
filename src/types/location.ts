export interface TailorLocation {
  id: string;
  name: string;
  shopName: string;
  image: string;
  lat: number;
  lng: number;
  distance: number;
  rating: number;
  reviews: number;
  startingPrice: number;
  deliveryTime: string;
  category: "Gents" | "Ladies" | "Boutique" | "Wedding" | "Kids";
  isVerified: boolean;
  experience: string;
  specialties: string[];
}

export interface City {
  name: string;
  state: string;
  lat: number;
  lng: number;
}
