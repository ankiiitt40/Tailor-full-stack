import { TailorProfile } from "@/types/profile";

export const profiles: Record<string, TailorProfile> = {
  "TL-001": {
    id: "TL-001",
    name: "Rajesh Iyer",
    shopName: "Royal Stitch House",
    bio: "With over 15 years of experience in the heart of Bhopal, Royal Stitch House specializes in premium wedding and designer tailoring services. We combine traditional craftsmanship with modern silhouettes to create outfits that tell your story.",
    rating: 4.9,
    reviewsCount: 156,
    experience: "15+ Years",
    location: "MP Nagar, Bhopal",
    deliveryTime: "3-5 Days",
    isVerified: true,
    bannerImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200",
    shopImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400",
    workingHours: "10:00 AM - 09:00 PM (Closed on Sundays)",
    languages: ["English", "Hindi", "Urdu"],
    specialization: ["Sherwani", "Bespoke Suits", "Traditional Wear", "Hand Embroidery"],
    services: [
      { id: "s1", name: "Premium Sherwani Stitching", price: 8500, deliveryTime: "7-10 Days", fabricSupport: "Silk, Velvet, Jamawar", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200", isPopular: true },
      { id: "s2", name: "Bespoke 3-Piece Suit", price: 5000, deliveryTime: "5-7 Days", fabricSupport: "Wool, Linen, Cotton", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200", isPopular: true },
      { id: "s3", name: "Formal Shirt Stitching", price: 800, deliveryTime: "2-3 Days", fabricSupport: "Cotton, Linen", image: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=200" },
      { id: "s4", name: "Trouser Stitching", price: 600, deliveryTime: "2-3 Days", fabricSupport: "Cotton, Polished Cotton", image: "https://images.unsplash.com/photo-1624372333454-259f6676114e?q=80&w=200" },
      { id: "s5", name: "Kurta Pajama Set", price: 1500, deliveryTime: "3-5 Days", fabricSupport: "Cotton, Silk", image: "https://images.unsplash.com/photo-1597983073491-03462a4b868e?q=80&w=200" },
    ],
    designs: [
      { id: "d1", title: "Royal Gold Sherwani", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400", category: "Bridal", likes: 245 },
      { id: "d2", title: "Velvet Evening Suit", image: "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=400", category: "Formal", likes: 189 },
      { id: "d3", title: "Traditional Nehru Jacket", image: "https://images.unsplash.com/photo-1621335829175-95f437389d7c?q=80&w=400", category: "Traditional", likes: 132 },
      { id: "d4", title: "Embroidered Kurta", image: "https://images.unsplash.com/photo-1599032909756-5dee8c65c699?q=80&w=400", category: "Designer Wear", likes: 98 },
      { id: "d5", title: "Linen Summer Suit", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400", category: "Formal", likes: 156 },
      { id: "d6", title: "Banarasi Wedding Set", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400", category: "Bridal", likes: 312 },
    ],
    reviews: [
      { id: "r1", userName: "Aditya Sharma", userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", rating: 5, comment: "Absolutely stunning sherwani! The fit is perfect and the hand embroidery is exquisite. Truly the best in Bhopal.", date: "2 Weeks Ago", serviceUsed: "Wedding Sherwani", isVerified: true, outfitImages: ["https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200"] },
      { id: "r2", userName: "Neha Verma", userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", rating: 5, comment: "Got a suit stitched for my brother. Excellent craftsmanship and very timely delivery.", date: "1 Month Ago", serviceUsed: "Bespoke 3-Piece Suit", isVerified: true },
      { id: "r3", userName: "Vikram Malhotra", userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100", rating: 4, comment: "Quality is top-notch. Prices are slightly high but worth it for the precision.", date: "3 Months Ago", serviceUsed: "Traditional Wear", isVerified: true },
    ],
    analytics: {
      ordersCompleted: 1240,
      repeatCustomers: 450,
      onTimeDelivery: 98,
    },
    faq: [
      { question: "What is the average delivery time for a wedding sherwani?", answer: "For complex wedding wear, it typically takes 7-10 business days including two trials." },
      { question: "Do you offer home pickup and delivery?", answer: "Yes, we provide home measurement and delivery services within a 5km radius." },
      { question: "Can I provide my own fabric?", answer: "Absolutely. You can bring your fabric or choose from our premium in-house collection." },
    ],
  },
};
