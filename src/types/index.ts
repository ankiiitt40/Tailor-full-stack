export interface Tailor {
  id: string;
  name: string;
  shopName: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
  startingPrice: number;
  deliveryTime: string;
  location: string;
  distance?: string;
  specialties: string[];
}

export interface Design {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  saves: number;
  views?: number;
  orders?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  feedback: string;
  tailorName: string;
}

export interface Order {
  id: string;
  customerName?: string;
  customerAvatar?: string;
  tailorName?: string;
  tailorAvatar?: string;
  service: string;
  status: "Pending" | "Accepted" | "Stitching" | "Ready" | "Delivered" | "Cancelled";
  deliveryDate: string;
  progress: number;
  price: number;
  time?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "order" | "shortlist" | "design" | "review" | "payment";
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "order" | "message" | "offer" | "payment" | "subscription";
  isRead: boolean;
}

export interface MeasurementProfile {
  id: string;
  name: string;
  relation: string;
  chest: number;
  waist: number;
  shoulder: number;
  sleeve: number;
  neck: number;
  height: number;
}

export interface ShopCustomer {
  id: string;
  name: string;
  avatar: string;
  ordersCount: number;
  totalSpent: number;
  favoriteService: string;
  lastOrder: string;
}

export interface EarningTransaction {
  id: string;
  orderId: string;
  amount: number;
  date: string;
  status: "Credited" | "Pending" | "Withdrawn";
}

export interface ServicePricing {
  id: string;
  name: string;
  basePrice: number;
  deliveryDays: number;
  category: string;
  isPopular?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Report {
  id: string;
  reporterName: string;
  targetName: string;
  type: "Fraud" | "Late Delivery" | "Poor Quality" | "Spam" | "Payment Dispute";
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Resolved" | "Rejected";
  date: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  ordersCount: number;
  joinDate: string;
  status: "Active" | "Banned" | "Suspended";
  avatar?: string;
}

export interface PlatformAnalytics {
  revenue: number[];
  users: number[];
  tailors: number[];
  orders: number[];
  months: string[];
}
