import { Notification, Activity } from "@/types/notifications";

export const mockNotifications: Notification[] = [
  {
    id: "NOT-001",
    type: "order",
    title: "Order Accepted ✨",
    description: "Royal Stitch House has accepted your Sherwani order. Stitching starts tomorrow!",
    timestamp: "2 mins ago",
    isRead: false,
    priority: "high",
    sender: {
      name: "Royal Stitch House",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
    },
    actionUrl: "/dashboard/orders/BK-8821"
  },
  {
    id: "NOT-002",
    type: "message",
    title: "New Message from Rajesh",
    description: "Please share the measurement profile for the collar fitting.",
    timestamp: "15 mins ago",
    isRead: false,
    priority: "medium",
    sender: {
      name: "Rajesh Iyer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
    },
    actionUrl: "/messages/C-001"
  },
  {
    id: "NOT-003",
    type: "payment",
    title: "Payment Successful 💳",
    description: "Transaction of ₹9,250 confirmed for your Emerald Sherwani.",
    timestamp: "1 hour ago",
    isRead: true,
    priority: "high",
    actionUrl: "/dashboard/payments"
  },
  {
    id: "NOT-004",
    type: "review",
    title: "Review Liked ❤️",
    description: "Your review for Elegant Boutique got 15 new likes today.",
    timestamp: "3 hours ago",
    isRead: true,
    priority: "low",
    actionUrl: "/dashboard/reviews"
  }
];

export const mockActivities: Activity[] = [
  { id: "ACT-001", type: "order", user: "Aryan Verma", action: "placed a new order with", target: "Royal Stitch House", timestamp: "Just now" },
  { id: "ACT-002", type: "review", user: "Sneha Kapoor", action: "gave 5 stars to", target: "The Master Cut", timestamp: "5 mins ago" },
  { id: "ACT-003", type: "design", user: "Meera Das", action: "uploaded a new", target: "Bridal Collection", timestamp: "12 mins ago" },
];
