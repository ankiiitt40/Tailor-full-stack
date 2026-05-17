import React from "react";
import { WelcomeBanner } from "@/components/dashboard/Home/WelcomeBanner";
import { StatsCards } from "@/components/dashboard/Home/StatsCards";
import { NearbyTailors } from "@/components/dashboard/Home/NearbyTailors";
import { ComparisonAndActivity } from "@/components/dashboard/Home/ComparisonAndActivity";
import { OrdersAndAI } from "@/components/dashboard/Home/OrdersAndAI";

export default function UserDashboard() {
  return (
    <div className="space-y-2">
      <WelcomeBanner />
      <StatsCards />
      <NearbyTailors />
      <ComparisonAndActivity />
      <OrdersAndAI />
    </div>
  );
}
