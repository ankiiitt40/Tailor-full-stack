import { Order, ShopCustomer, EarningTransaction, ServicePricing, Activity, Notification } from "@/types";

export const tailorOrders: Order[] = [
  {
    id: "SC-9821",
    customerName: "Aryan Sharma",
    customerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan",
    service: "Wedding Sherwani",
    status: "Stitching",
    deliveryDate: "15 May 2026",
    progress: 65,
    price: 15000,
    time: "2h ago",
  },
  {
    id: "SC-9822",
    customerName: "Priya Patel",
    customerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    service: "Embroidered Blouse",
    status: "Pending",
    deliveryDate: "12 May 2026",
    progress: 0,
    price: 3500,
    time: "4h ago",
  },
  {
    id: "SC-9823",
    customerName: "Rahul Verma",
    customerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    service: "Slim Fit Suit",
    status: "Accepted",
    deliveryDate: "20 May 2026",
    progress: 20,
    price: 8500,
    time: "1d ago",
  },
];

export const shopCustomers: ShopCustomer[] = [
  {
    id: "cust-1",
    name: "Aryan Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan",
    ordersCount: 5,
    totalSpent: 45000,
    favoriteService: "Sherwani",
    lastOrder: "2 days ago",
  },
  {
    id: "cust-2",
    name: "Meera Reddy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    ordersCount: 3,
    totalSpent: 12000,
    favoriteService: "Blouse",
    lastOrder: "1 week ago",
  },
];

export const earningsHistory: EarningTransaction[] = [
  { id: "TX-101", orderId: "SC-9800", amount: 12000, date: "08 May 2026", status: "Credited" },
  { id: "TX-102", orderId: "SC-9801", amount: 3500, date: "07 May 2026", status: "Credited" },
  { id: "TX-103", orderId: "SC-9802", amount: 8500, date: "06 May 2026", status: "Withdrawn" },
];

export const servicePricing: ServicePricing[] = [
  { id: "ser-1", name: "Custom Blouse", basePrice: 2500, deliveryDays: 4, category: "Ladies", isPopular: true },
  { id: "ser-2", name: "Wedding Sherwani", basePrice: 15000, deliveryDays: 15, category: "Gents", isPopular: true },
  { id: "ser-3", name: "Formal Suit", basePrice: 8500, deliveryDays: 7, category: "Gents" },
  { id: "ser-4", name: "Anarkali Suit", basePrice: 4500, deliveryDays: 6, category: "Ladies" },
];

export const tailorActivities: Activity[] = [
  { id: "ta-1", title: "New Order", description: "Priya Patel booked 'Embroidered Blouse'.", time: "4h ago", type: "order" },
  { id: "ta-2", title: "Payment Credited", description: "₹12,000 credited for Order #SC-9800.", time: "1d ago", type: "payment" },
  { id: "ta-3", title: "Review Received", description: "Meera Reddy gave you 5 stars! ⭐", time: "2d ago", type: "review" },
];

export const tailorNotifications: Notification[] = [
  { id: "tn-1", title: "Pending Order", message: "You have 3 orders due for delivery tomorrow.", time: "10m ago", type: "order", isRead: false },
  { id: "tn-2", title: "Subscription", message: "Your Premium plan expires in 5 days.", time: "2h ago", type: "subscription", isRead: false },
];
