import { Report, User, Order, Tailor, Activity, Notification } from "@/types";

export const adminUsers: User[] = [
  { id: "USR-101", name: "Amit Kumar", email: "amit@example.com", ordersCount: 12, joinDate: "12 Jan 2026", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit" },
  { id: "USR-102", name: "Sanya Malhotra", email: "sanya@example.com", ordersCount: 8, joinDate: "15 Jan 2026", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya" },
  { id: "USR-103", name: "Vikram Singh", email: "vikram@example.com", ordersCount: 0, joinDate: "20 Jan 2026", status: "Suspended", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" },
  { id: "USR-104", name: "Neha Sharma", email: "neha@example.com", ordersCount: 5, joinDate: "02 Feb 2026", status: "Active", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha" },
];

export const platformReports: Report[] = [
  { id: "REP-001", reporterName: "Amit Kumar", targetName: "Royal Stitch House", type: "Late Delivery", priority: "High", status: "Pending", date: "08 May 2026", description: "Order was delayed by 10 days without notice." },
  { id: "REP-002", reporterName: "Sanya Malhotra", targetName: "Modern Fit Studio", type: "Poor Quality", priority: "Medium", status: "Resolved", date: "05 May 2026", description: "The fabric used was different from what was shown." },
  { id: "REP-003", reporterName: "System AI", targetName: "Newbie Tailor", type: "Fraud", priority: "High", status: "Pending", date: "09 May 2026", description: "Suspicious login activity and multiple fake reviews detected." },
];

export const adminActivities: Activity[] = [
  { id: "AA-1", title: "New Tailor Registered", description: "Elite Bespoke has applied for verification.", time: "10m ago", type: "order" },
  { id: "AA-2", title: "Revenue Milestone", description: "Platform reached ₹5,00,000 in monthly revenue!", time: "2h ago", type: "payment" },
  { id: "AA-3", title: "Fraud Alert", description: "Suspicious activity detected in User #USR-103.", time: "5h ago", type: "review" },
  { id: "AA-4", title: "Subscription Upgrade", description: "Royal Stitch House upgraded to Elite Plan.", time: "1d ago", type: "shortlist" },
];

export const adminNotifications: Notification[] = [
  { id: "AN-1", title: "Pending Verifications", message: "5 new tailors are waiting for document approval.", time: "5m ago", type: "order", isRead: false },
  { id: "AN-2", title: "System Alert", message: "Server load is high (85%). Optimize resources.", time: "1h ago", type: "offer", isRead: false },
];

export const platformStats = [
  { label: "Total Users", value: "12.5k", growth: "+12%", trend: "up" },
  { label: "Total Tailors", value: "854", growth: "+5%", trend: "up" },
  { label: "Active Orders", value: "3,240", growth: "+18%", trend: "up" },
  { label: "Monthly Revenue", value: "₹8.4L", growth: "+24%", trend: "up" },
  { label: "Pending Verifications", value: "18", growth: "-2", trend: "down" },
  { label: "Platform Growth", value: "32%", growth: "+4%", trend: "up" },
  { label: "Active Subscriptions", value: "412", growth: "+15%", trend: "up" },
  { label: "Customer Satisfaction", value: "94%", growth: "+2%", trend: "up" },
];
