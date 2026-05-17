import { Review, RatingStats } from "@/types/reviews";

export const mockReviews: Review[] = [
  {
    id: "REV-001",
    customerId: "U-001",
    customerName: "Aryan Verma",
    customerImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    tailorId: "T-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    serviceName: "Royal Sherwani Stitching",
    rating: 5,
    comment: "The precision of the mirror work and the fit of the sherwani is absolutely unmatched. Rajesh is a true master of his craft. Highly recommended for any premium ethnic wear!",
    photos: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400"
    ],
    date: "2024-06-05",
    isVerified: true,
    helpfulCount: 24,
    fitSatisfaction: 10,
    qualitySatisfaction: 9.5,
    deliverySatisfaction: 9,
    reply: {
      tailorName: "Rajesh Iyer",
      comment: "Thank you Aryan! It was a pleasure working on your Sherwani. Looking forward to your next visit.",
      date: "2024-06-06"
    }
  },
  {
    id: "REV-002",
    customerId: "U-002",
    customerName: "Sneha Kapoor",
    customerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    tailorId: "T-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    serviceName: "Bridal Lehenga",
    rating: 4.5,
    comment: "Excellent work on my wedding lehenga. The blouse fitting was perfect on the first go. Only minor issue was a 2-day delay in delivery, but the quality made up for it.",
    photos: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400"
    ],
    date: "2024-05-20",
    isVerified: true,
    helpfulCount: 12,
    fitSatisfaction: 10,
    qualitySatisfaction: 10,
    deliverySatisfaction: 7,
  }
];

export const reviewStats: RatingStats = {
  averageRating: 4.8,
  totalReviews: 128,
  recommendationRate: 98,
  categories: [
    { label: "Stitch Quality", rating: 4.9 },
    { label: "Fit Accuracy", rating: 4.9 },
    { label: "Delivery Speed", rating: 4.5 },
    { label: "Tailor Behavior", rating: 4.8 },
  ],
  distribution: [
    { stars: 5, count: 105 },
    { stars: 4, count: 18 },
    { stars: 3, count: 5 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ]
};
