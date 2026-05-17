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
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", revenue: 45000, orders: 120 },
  { month: "Feb", revenue: 52000, orders: 140 },
  { month: "Mar", revenue: 48000, orders: 130 },
  { month: "Apr", revenue: 61000, orders: 165 },
  { month: "May", revenue: 85420, orders: 190 },
  { month: "Jun", revenue: 92000, orders: 210 },
];

export const TailorRevenueChart = () => {
  return (
    <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] mb-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-1">
           <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold tracking-tight">Revenue Overview</h3>
              <Badge className="bg-green-500/10 text-green-500 border-none text-[10px] font-bold">
                 +24% Growth
              </Badge>
           </div>
           <p className="text-sm text-muted-foreground">Monthly earnings and order volume analysis.</p>
        </div>
        
        <div className="flex gap-2 bg-muted/50 p-1 rounded-xl">
           {["Revenue", "Orders"].map((tab, i) => (
             <button 
               key={tab}
               className={cn(
                 "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                 i === 0 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
               )}
             >
                {tab}
             </button>
           ))}
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "rgba(0,0,0,0.8)", 
                border: "none", 
                borderRadius: "16px",
                color: "white",
                backdropFilter: "blur(10px)"
              }}
              itemStyle={{ color: "#D4AF37", fontWeight: "bold" }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#D4AF37" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
               <TrendingUp className="w-5 h-5 text-gold" />
            </div>
            <div>
               <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Projection</p>
               <p className="text-lg font-bold">₹1.2L next month</p>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
               <ArrowUpRight className="w-5 h-5 text-blue-500" />
            </div>
            <div>
               <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Top Service</p>
               <p className="text-lg font-bold">Wedding Sherwani</p>
            </div>
         </div>
         <Button variant="ghost" className="text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold/5 h-12 rounded-xl">
            Detailed Analytics Report
         </Button>
      </div>
    </Card>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
