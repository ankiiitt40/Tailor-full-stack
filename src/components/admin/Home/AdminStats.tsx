"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Scissors, 
  ShoppingBag, 
  IndianRupee, 
  ShieldCheck, 
  TrendingUp, 
  CreditCard, 
  Heart,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { platformStats } from "@/data/admin-dashboard";
import { cn } from "@/lib/utils";

const icons = [Users, Scissors, ShoppingBag, IndianRupee, ShieldCheck, TrendingUp, CreditCard, Heart];
const colors = [
  "text-blue-500 bg-blue-500/10",
  "text-gold bg-gold/10",
  "text-green-500 bg-green-500/10",
  "text-purple-500 bg-purple-500/10",
  "text-red-500 bg-red-500/10",
  "text-teal-500 bg-teal-500/10",
  "text-orange-500 bg-orange-500/10",
  "text-pink-500 bg-pink-500/10"
];

export const AdminStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {platformStats.map((stat, i) => {
        const Icon = icons[i];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-8 glass-card border-border/50 hover:border-gold/30 transition-all duration-500 relative overflow-hidden group h-full">
              {/* Decorative mini chart background */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gold/5 rounded-full group-hover:scale-125 transition-transform duration-700" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm", colors[i])}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                    stat.trend === "up" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.growth}
                  </div>
                </div>

                <div className="space-y-1">
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                   <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
                </div>
                
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "70%" }}
                     transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                     className={cn("h-full", colors[i].split(" ")[0].replace("text", "bg"))}
                   />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};
