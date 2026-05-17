"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Palette, History } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Orders", value: "02", icon: ShoppingBag, color: "text-gold", bg: "bg-gold/10" },
  { label: "Saved Tailors", value: "12", icon: Heart, color: "text-red-500", bg: "bg-red-500/10" },
  { label: "Designs Saved", value: "45", icon: Palette, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Total Bookings", value: "128", icon: History, color: "text-green-500", bg: "bg-green-500/10" },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="p-6 border-border/50 hover:border-gold/30 transition-all duration-300 glass-card">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
              </div>
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-black/5", stat.bg)}>
                <stat.icon className={cn("w-6 h-6", stat.color)} />
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2">
               <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className={cn("h-full", stat.bg.replace("/10", ""))}
                  />
               </div>
               <span className="text-[10px] font-bold text-muted-foreground">+12%</span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
