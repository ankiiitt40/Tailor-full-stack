import { Brand, Feature, Step } from "@/types";

export const brands: Brand[] = [
  { id: "b1", name: "Raymond", logo: "Raymond" },
  { id: "b2", name: "Manyavar", logo: "Manyavar" },
  { id: "b3", name: "FabIndia", logo: "FabIndia" },
  { id: "b4", name: "Louis Philippe", logo: "Louis Philippe" },
  { id: "b5", name: "Zara Fashion", logo: "Zara Fashion" },
];

export const features: Feature[] = [
  {
    id: "f1",
    title: "Nearby Tailor Discovery",
    description: "Find top-rated tailors in your vicinity with ease using our location-based search.",
    icon: "MapPin",
  },
  {
    id: "f2",
    title: "Easy Price Comparison",
    description: "Compare quotes from multiple tailors and choose the one that fits your budget.",
    icon: "BarChart3",
  },
  {
    id: "f3",
    title: "Fast Delivery",
    description: "Get your custom-stitched clothes delivered to your doorstep within the promised timeframe.",
    icon: "Zap",
  },
  {
    id: "f4",
    title: "Trusted Reviews",
    description: "Make informed decisions by reading genuine reviews and ratings from other customers.",
    icon: "Star",
  },
];

export const steps: Step[] = [
  {
    id: "1",
    title: "Search Tailor",
    description: "Browse through a curated list of expert tailors based on your location and needs.",
    icon: "Search",
  },
  {
    id: "2",
    title: "Compare Prices",
    description: "Check ratings, experience, and pricing to find the perfect match for your requirements.",
    icon: "SlidersHorizontal",
  },
  {
    id: "3",
    title: "Upload Design",
    description: "Share your design inspiration or select from our trending gallery to guide your tailor.",
    icon: "Upload",
  },
  {
    id: "4",
    title: "Get Perfect Stitching",
    description: "Relax while your garment is crafted to perfection and delivered right to your door.",
    icon: "CheckCircle2",
  },
];
