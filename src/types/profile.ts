export interface Service {
  id: string;
  name: string;
  price: number;
  deliveryTime: string;
  fabricSupport: string;
  image: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
  outfitImages?: string[];
  serviceUsed: string;
  isVerified: boolean;
}

export interface Design {
  id: string;
  title: string;
  image: string;
  category: "Bridal" | "Party Wear" | "Formal" | "Traditional" | "Designer Wear";
  likes: number;
}

export interface TailorProfile {
  id: string;
  name: string;
  shopName: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  location: string;
  deliveryTime: string;
  isVerified: boolean;
  bannerImage: string;
  shopImage: string;
  workingHours: string;
  languages: string[];
  specialization: string[];
  services: Service[];
  reviews: Review[];
  designs: Design[];
  analytics: {
    ordersCompleted: number;
    repeatCustomers: number;
    onTimeDelivery: number;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}
