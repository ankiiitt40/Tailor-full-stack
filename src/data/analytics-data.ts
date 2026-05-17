import { RevenueDataPoint, ChartDataPoint, KPIStats } from "@/types/analytics";

export const revenueData: RevenueDataPoint[] = [
  { month: "Jan", revenue: 45000, orders: 120 },
  { month: "Feb", revenue: 52000, orders: 145 },
  { month: "Mar", revenue: 48000, orders: 130 },
  { month: "Apr", revenue: 61000, orders: 170 },
  { month: "May", revenue: 75000, orders: 210 },
  { month: "Jun", revenue: 89000, orders: 250 },
];

export const userCategoryData: ChartDataPoint[] = [
  { name: "Ethnic Wear", value: 45 },
  { name: "Formals", value: 30 },
  { name: "Casuals", value: 15 },
  { name: "Bridal", value: 10 },
];

export const weeklyBookingData: ChartDataPoint[] = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 18 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 25 },
  { name: "Fri", value: 35 },
  { name: "Sat", value: 45 },
  { name: "Sun", value: 20 },
];

export const adminKPIs: KPIStats[] = [
  { label: "Total Platform Revenue", value: "₹24.5L", trend: 15.4, description: "Total revenue generated this month", icon: "DollarSign" },
  { label: "Active Tailors", value: "842", trend: 8.2, description: "Total verified tailors on platform", icon: "Users" },
  { label: "Booking Volume", value: "1,240", trend: 12.5, description: "Orders placed in the last 30 days", icon: "ShoppingBag" },
  { label: "User Growth", value: "+2.4k", trend: 22.1, description: "New fashion enthusiasts joined", icon: "TrendingUp" },
];

export const tailorKPIs: KPIStats[] = [
  { label: "Monthly Earnings", value: "₹82,450", trend: 18.5, description: "Your revenue for June", icon: "Wallet" },
  { label: "Orders Completed", value: "48", trend: 5.2, description: "Stitched & Delivered", icon: "CheckCircle" },
  { label: "Repeat Customers", value: "12", trend: 15.0, description: "Customers who booked again", icon: "Users" },
  { label: "Average Rating", value: "4.9", trend: 0.1, description: "Based on 128 reviews", icon: "Star" },
];
