export interface Design {
  id: string;
  title: string;
  image: string;
  category: string;
  tailorId: string;
  tailorName: string;
  tailorShop: string;
  likes: number;
  saves: number;
  isTrending?: boolean;
  isVerified?: boolean;
  estimatedPrice: number;
  description: string;
  fabricSuggestions: string[];
  tags: string[];
}

export interface DesignCollection {
  id: string;
  title: string;
  coverImage: string;
  totalDesigns: number;
  isTrending?: boolean;
  thumbnails: string[];
}
