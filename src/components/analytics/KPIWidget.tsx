"use client";

import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingBag, 
  Star, 
  CheckCircle,
  Wallet
} from "lucide-react";
import { motion } from "framer-motion";
import { KPIStats } from "@/types/analytics";
import { cn } from "@/lib/utils";

const iconMap: any = {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  Wallet,
  CheckCircle,
  Star
};

interface KPIWidgetProps {
  stats: KPIStats;
  delay?: number;
}

export const KPIWidget = ({ stats, delay = 0 }: KPIWidgetProps) => {
  const Icon = iconMap[stats.icon] || TrendingUp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-[3rem] bg-card border border-border/50 hover:border-gold/30 transition-all group relative overflow-hidden shadow-xl"
    >
       <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-gold/10 transition-colors" />
       
       <div className="space-y-6 relative z-10">
          <div className="flex justify-between items-start">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-gold" />
             </div>
             <div className={cn(
               "flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
               stats.trend >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
             )}>
                {stats.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {Math.abs(stats.trend)}%
             </div>
          </div>

          <div className="space-y-1">
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stats.label}</p>
             <h3 className="text-4xl font-black tracking-tighter">{stats.value}</h3>
          </div>

          <p className="text-[10px] font-bold text-muted-foreground leading-relaxed group-hover:text-foreground/60 transition-colors">
             {stats.description}
          </p>
       </div>
    </motion.div>
  );
};
