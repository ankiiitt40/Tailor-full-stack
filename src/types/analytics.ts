export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  orders: number;
}

export interface KPIStats {
  label: string;
  value: string | number;
  trend: number; // percentage growth/decline
  description: string;
  icon: string;
}

export interface AnalyticsData {
  revenueGrowth: RevenueDataPoint[];
  categoryDistribution: ChartDataPoint[];
  weeklyBookings: ChartDataPoint[];
  userGrowth: ChartDataPoint[];
}
