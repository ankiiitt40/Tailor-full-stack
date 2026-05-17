"use client";

import React from "react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from "recharts";
import { userCategoryData } from "@/data/analytics-data";

const COLORS = ["#D4AF37", "#FFFFFF", "#666666", "#333333"];

export const CategoryDistribution = () => {
  return (
    <div className="w-full h-[400px] p-8 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden">
       <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 blur-3xl rounded-full" />
       
       <div className="space-y-1 mb-8 relative z-10 text-center">
          <h3 className="text-2xl font-black tracking-tight">Style Distribution</h3>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Most booked tailoring categories</p>
       </div>

       <div className="h-[280px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
             <PieChart>
                <Pie
                  data={userCategoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                   {userCategoryData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#000", 
                    border: "1px solid #D4AF3740", 
                    borderRadius: "16px",
                    padding: "12px"
                  }}
                  itemStyle={{ fontSize: "12px", fontWeight: "bold" }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{value}</span>}
                />
             </PieChart>
          </ResponsiveContainer>
       </div>
    </div>
  );
};
