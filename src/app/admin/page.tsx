import React from "react";
import { AdminWelcome } from "@/components/admin/Home/AdminWelcome";
import { AdminStats } from "@/components/admin/Home/AdminStats";
import { AdminMainSection } from "@/components/admin/Home/AdminMainSection";
import { AdminTailorsAndReports } from "@/components/admin/Home/AdminTailorsAndReports";

export default function AdminDashboard() {
  return (
    <div className="space-y-2">
      <AdminWelcome />
      <AdminStats />
      <AdminMainSection />
      <AdminTailorsAndReports />
    </div>
  );
}
