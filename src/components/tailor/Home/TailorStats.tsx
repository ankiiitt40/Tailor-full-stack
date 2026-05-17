"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IndianRupee, 
  ShoppingBag, 
  CheckCircle2, 
  Users, 
  Star, 
  Palette,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Earnings", value: "₹2,45,000", sub: "+12.5% vs last month", icon: IndianRupee, color: "text-gold", bg: "bg-gold/10", positive: true },
  { label: "Pending Orders", value: "12", sub: "3 due by tomorrow", icon: ShoppingBag, color: "text-blue-500", bg: "bg-blue-500/10", positive: false },
  { label: "Active Designs", value: "48", sub: "5 trending now", icon: Palette, color: "text-purple-500", bg: "bg-purple-500/10", positive: true },
  { label: "Monthly Customers", value: "156", sub: "+8 new this week", icon: Users, color: "text-green-500", bg: "bg-green-500/10", positive: true },
  { label: "Avg. Rating", value: "4.9", sub: "Based on 1.2k reviews", icon: Star, color: "text-gold", bg: "bg-gold/10", positive: true },
  { label: "Completed Orders", value: "842", sub: "99% success rate", icon: CheckCircle2, color: "text-teal-500", bg: "bg-teal-500/10", positive: true },
];

export const TailorStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="p-6 border-border/50 hover:border-gold/30 transition-all duration-300 glass-card h-full">
            <div className="flex flex-col gap-4">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-sm", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
              </div>
              <div className="flex items-center gap-1.5">
                 {stat.positive ? (
                   <TrendingUp className="w-3 h-3 text-green-500" />
                 ) : (
                   <TrendingDown className="w-3 h-3 text-blue-500" />
                 )}
                 <span className={cn("text-[10px] font-bold", stat.positive ? "text-green-500" : "text-blue-500")}>
                    {stat.sub}
                 </span>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
