import { Order, Activity, Notification, MeasurementProfile } from "@/types";

export const orders: Order[] = [
  {
    id: "ORD-001",
    tailorName: "Royal Stitch House",
    service: "Wedding Sherwani",
    status: "Stitching",
    deliveryDate: "15 May 2026",
    progress: 65,
    price: 15000,
  },
  {
    id: "ORD-002",
    tailorName: "Modern Fit Studio",
    service: "Slim Fit Suit",
    status: "Accepted",
    deliveryDate: "20 May 2026",
    progress: 20,
    price: 8500,
  },
];

export const activities: Activity[] = [
  {
    id: "act-1",
    title: "Order Placed",
    description: "You placed an order for Wedding Sherwani with Royal Stitch House.",
    time: "2 hours ago",
    type: "order",
  },
  {
    id: "act-2",
    title: "Tailor Shortlisted",
    description: "You added Elegance Tailors to your favorites.",
    time: "5 hours ago",
    type: "shortlist",
  },
  {
    id: "act-3",
    title: "Design Saved",
    description: "You saved 'Embroidered Silk Blouse' to your gallery.",
    time: "Yesterday",
    type: "design",
  },
];

export const notifications: Notification[] = [
  {
    id: "not-1",
    title: "Order Update",
    message: "Your order #ORD-001 is now being stitched.",
    time: "10m ago",
    type: "order",
    isRead: false,
  },
  {
    id: "not-2",
    title: "New Offer",
    message: "Get 20% off on your first festive booking!",
    time: "1h ago",
    type: "offer",
    isRead: false,
  },
  {
    id: "not-3",
    title: "Message from Amit",
    message: "We've received your measurements. Everything looks good.",
    time: "3h ago",
    type: "message",
    isRead: true,
  },
];

export const measurements: MeasurementProfile[] = [
  {
    id: "m-1",
    name: "Aryan (Self)",
    relation: "Self",
    chest: 40,
    waist: 32,
    shoulder: 18,
    sleeve: 24,
    neck: 15,
    height: 180,
  },
  {
    id: "m-2",
    name: "Rahul",
    relation: "Brother",
    chest: 38,
    waist: 30,
    shoulder: 17,
    sleeve: 23,
    neck: 14.5,
    height: 175,
  },
];
