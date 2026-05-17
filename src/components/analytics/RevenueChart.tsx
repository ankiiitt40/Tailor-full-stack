"use client";

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from "recharts";
import { revenueData } from "@/data/analytics-data";

export const RevenueChart = () => {
  return (
    <div className="w-full h-[400px] p-8 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden">
       <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-3xl rounded-full" />
       
       <div className="space-y-1 mb-8 relative z-10">
          <h3 className="text-2xl font-black tracking-tight">Revenue Performance</h3>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Year-to-date financial growth</p>
       </div>

       <div className="h-[280px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                   <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                   </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#666", fontSize: 10, fontWeight: "bold" }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#666", fontSize: 10, fontWeight: "bold" }}
                  tickFormatter={(val) => `₹${val / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#000", 
                    border: "1px solid #D4AF3740", 
                    borderRadius: "16px",
                    padding: "12px"
                  }}
                  itemStyle={{ color: "#D4AF37", fontSize: "12px", fontWeight: "bold" }}
                  labelStyle={{ color: "#fff", marginBottom: "4px", fontSize: "10px", fontWeight: "900", textTransform: "uppercase" }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#D4AF37" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
             </AreaChart>
          </ResponsiveContainer>
       </div>
    </div>
  );
};
