import { Recommendation, FashionTrend, StyleProfile } from "@/types/ai";

export const aiRecommendations: Recommendation[] = [
  {
    id: "REC-001",
    type: "tailor",
    title: "Royal Stitch House",
    description: "Best match for your upcoming wedding season needs.",
    matchScore: 98,
    reason: "Based on your 5 previous bridal design saves and interest in premium silk fabrics.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400",
    metadata: {
      priceRange: "₹8k - ₹25k",
      delivery: "Express (48h)",
      rating: 4.9
    }
  },
  {
    id: "REC-002",
    type: "pricing",
    title: "Strategic Saving Tip",
    description: "Save ₹1,200 on your next Sherwani booking.",
    matchScore: 92,
    reason: "Booking during weekdays at 'The Master Cut' currently offers a 15% discount on labor charges.",
    metadata: {
      potentialSaving: "₹1,200",
      validUntil: "2024-06-15"
    }
  },
  {
    id: "REC-003",
    type: "style",
    title: "Emerald Velvet Sherwani",
    description: "This design is trending in your city.",
    matchScore: 85,
    reason: "Similar users with your body profile have rated this fit 4.9/5.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400"
  }
];

export const trendingStyles: FashionTrend[] = [
  {
    id: "TRD-001",
    label: "Minimalist Pastel Lehengas",
    growth: 45,
    description: "Shift towards subtle embroidery and luxury organza.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400",
    region: "North India"
  },
  {
    id: "TRD-002",
    label: "Eco-Friendly Hemp Formals",
    growth: 28,
    description: "Sustainable luxury is gaining momentum among corporate clients.",
    image: "https://images.unsplash.com/photo-1594932224491-9941966bba58?q=80&w=400",
    region: "Pan India"
  }
];

export const mockStyleProfile: StyleProfile = {
  ethnic: 85,
  formal: 45,
  casual: 30,
  bridal: 92,
  modern: 60
};
