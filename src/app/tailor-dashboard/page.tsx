import React from "react";
import { TailorWelcome } from "@/components/tailor/Home/TailorWelcome";
import { TailorStats } from "@/components/tailor/Home/TailorStats";
import { TailorRevenueChart } from "@/components/tailor/Home/TailorRevenueChart";
import { TailorOrdersAndAI } from "@/components/tailor/Home/TailorOrdersAndAI";
import { TailorCustomersAndDesigns } from "@/components/tailor/Home/TailorCustomersAndDesigns";

export default function TailorDashboard() {
  return (
    <div className="space-y-2">
      <TailorWelcome />
      <TailorStats />
      <TailorRevenueChart />
      <TailorOrdersAndAI />
      <TailorCustomersAndDesigns />
    </div>
  );
}
