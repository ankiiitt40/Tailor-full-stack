import { Design, DesignCollection } from "@/types/designs";

export const designs: Design[] = [
  {
    id: "DS-001",
    title: "Royal Emerald Sherwani",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600",
    category: "Sherwani",
    tailorId: "TL-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    likes: 1240,
    saves: 450,
    isTrending: true,
    isVerified: true,
    estimatedPrice: 12500,
    description: "A majestic emerald green sherwani with hand-embroidered Zardosi work. Perfect for the royal groom.",
    fabricSuggestions: ["Silk Velvet", "Banarasi Silk"],
    tags: ["Bridal", "Luxury", "Emerald", "Groom"]
  },
  {
    id: "DS-002",
    title: "Modern Navy 3-Piece",
    image: "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=600",
    category: "Suits",
    tailorId: "TL-002",
    tailorName: "Sanjay Verma",
    tailorShop: "The Master Cut",
    likes: 850,
    saves: 310,
    isTrending: false,
    isVerified: true,
    estimatedPrice: 7500,
    description: "Sleek navy blue bespoke suit with a slim-fit silhouette and premium Italian finish.",
    fabricSuggestions: ["Italian Wool", "Terene Rayon"],
    tags: ["Formal", "Modern", "Business", "Bespoke"]
  },
  {
    id: "DS-003",
    title: "Pastel Bridal Lehenga",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600",
    category: "Lehenga",
    tailorId: "TL-003",
    tailorName: "Meera Das",
    tailorShop: "Elegance Boutique",
    likes: 2100,
    saves: 890,
    isTrending: true,
    isVerified: true,
    estimatedPrice: 45000,
    description: "Floral embroidered lehenga in dusty rose with heavy sequins work and a double-layered dupatta.",
    fabricSuggestions: ["Organza", "Raw Silk"],
    tags: ["Bridal", "Floral", "Pastel", "Wedding"]
  },
  {
    id: "DS-004",
    title: "Designer Back-Neck Blouse",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600",
    category: "Blouse",
    tailorId: "TL-003",
    tailorName: "Meera Das",
    tailorShop: "Elegance Boutique",
    likes: 3400,
    saves: 1200,
    isTrending: true,
    isVerified: true,
    estimatedPrice: 2500,
    description: "Intricate cut-out back design with mirror work and latkan details.",
    fabricSuggestions: ["Silk", "Brocade"],
    tags: ["Designer", "Traditional", "Ethnic"]
  },
  {
    id: "DS-005",
    title: "Linen Summer Kurta",
    image: "https://images.unsplash.com/photo-1597983073491-03462a4b868e?q=80&w=600",
    category: "Kurta",
    tailorId: "TL-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    likes: 420,
    saves: 150,
    isTrending: false,
    isVerified: true,
    estimatedPrice: 1800,
    description: "Breathable linen kurta with a mandarin collar and subtle pin-tuck details.",
    fabricSuggestions: ["Pure Linen", "Khadi"],
    tags: ["Summer", "Casual", "Minimal"]
  },
  {
    id: "DS-006",
    title: "Indo-Western Fusion Set",
    image: "https://images.unsplash.com/photo-1621335829175-95f437389d7c?q=80&w=600",
    category: "Fusion",
    tailorId: "TL-004",
    tailorName: "Zaid Khan",
    tailorShop: "Urban Stitch",
    likes: 670,
    saves: 220,
    isTrending: true,
    isVerified: false,
    estimatedPrice: 5500,
    description: "A trendy fusion of a long ethnic jacket with modern slim-fit trousers.",
    fabricSuggestions: ["Jute Silk", "Polished Cotton"],
    tags: ["Fusion", "Party Wear", "Urban"]
  },
  {
    id: "DS-007",
    title: "Hand-Painted Floral Saree",
    image: "https://images.unsplash.com/photo-1610030469915-9a08fa996e4a?q=80&w=600",
    category: "Traditional",
    tailorId: "TL-003",
    tailorName: "Meera Das",
    tailorShop: "Elegance Boutique",
    likes: 1500,
    saves: 600,
    isTrending: true,
    isVerified: true,
    estimatedPrice: 3500,
    description: "Exquisite hand-painted floral motifs on pure organza saree with a matching designer blouse.",
    fabricSuggestions: ["Organza", "Chiffon"],
    tags: ["Floral", "Saree", "Handmade"]
  },
  {
    id: "DS-008",
    title: "Classic Bandhgala Suit",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600",
    category: "Formal",
    tailorId: "TL-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    likes: 900,
    saves: 300,
    isTrending: false,
    isVerified: true,
    estimatedPrice: 9500,
    description: "Timeless Bandhgala in charcoal grey with antique buttons and perfect tailoring.",
    fabricSuggestions: ["Premium Wool", "Silk Blend"],
    tags: ["Royal", "Formal", "Evening Wear"]
  }
];

export const collections: DesignCollection[] = [
  {
    id: "C-001",
    title: "The Bridal Registry",
    coverImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400",
    totalDesigns: 156,
    isTrending: true,
    thumbnails: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=100",
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=100",
      "https://images.unsplash.com/photo-1610030469915-9a08fa996e4a?q=80&w=100"
    ]
  },
  {
    id: "C-002",
    title: "Modern Corporate",
    coverImage: "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=400",
    totalDesigns: 84,
    thumbnails: [
      "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=100",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=100",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=100"
    ]
  },
  {
    id: "C-003",
    title: "Festive Favorites",
    coverImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400",
    totalDesigns: 210,
    isTrending: true,
    thumbnails: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=100",
      "https://images.unsplash.com/photo-1621335829175-95f437389d7c?q=80&w=100",
      "https://images.unsplash.com/photo-1597983073491-03462a4b868e?q=80&w=100"
    ]
  }
];
