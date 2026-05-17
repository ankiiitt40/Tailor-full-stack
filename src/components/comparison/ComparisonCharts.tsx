"use client";

import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  LineChart,
  Line
} from "recharts";
import { motion } from "framer-motion";
import { TailorComparison } from "@/types/comparison";
import { Card } from "@/components/ui/card";

export const ComparisonCharts = ({ tailors }: { tailors: TailorComparison[] }) => {
  const priceData = tailors.map(t => ({
    name: t.shopName,
    price: t.startingPrice,
  }));

  const expertiseData = tailors.map(t => ({
    name: t.shopName,
    "Design": t.designExpertise * 10,
    "Bridal": t.bridalExpertise * 10,
    "Reliability": t.onTimeDeliveryRate,
    "Loyalty": t.repeatCustomerRate,
    "Service": t.popularityScore,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-t border-border/50">
      {/* Price Comparison Bar Chart */}
      <Card className="p-8 rounded-[2.5rem] bg-card border-border/50 shadow-2xl space-y-6">
         <div className="space-y-1">
            <h3 className="text-xl font-black tracking-tight">Pricing Index</h3>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Base stitching cost (₹)</p>
         </div>
         <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={priceData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10, fontWeight: "bold" }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10, fontWeight: "bold" }} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      borderRadius: "1rem", 
                      border: "1px solid hsl(var(--border))",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}
                  />
                  <Bar dataKey="price" fill="hsl(var(--gold))" radius={[8, 8, 0, 0]} barSize={40} />
               </BarChart>
            </ResponsiveContainer>
         </div>
      </Card>

      {/* Expertise Radar Chart */}
      <Card className="p-8 rounded-[2.5rem] bg-card border-border/50 shadow-2xl space-y-6">
         <div className="space-y-1">
            <h3 className="text-xl font-black tracking-tight">Artisanal Balance</h3>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Multi-dimensional capability scoring</p>
         </div>
         <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="70%" data={expertiseData}>
                  <PolarGrid stroke="hsl(var(--border))" opacity={0.5} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10, fontWeight: "bold" }} 
                  />
                  {tailors.map((t, i) => (
                    <Radar
                      key={t.id}
                      name={t.shopName}
                      dataKey={t.shopName}
                      stroke={i === 0 ? "hsl(var(--gold))" : "hsl(var(--foreground))"}
                      fill={i === 0 ? "hsl(var(--gold))" : "hsl(var(--foreground))"}
                      fillOpacity={0.3}
                    />
                  ))}
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      borderRadius: "1rem", 
                      border: "1px solid hsl(var(--border))",
                      fontSize: "12px"
                    }}
                  />
               </RadarChart>
            </ResponsiveContainer>
         </div>
      </Card>
    </div>
  );
};
