"use client";

import React from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Award,
  Users
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AIInsightCardProps {
  title: string;
  description: string;
  icon: "trending" | "zap" | "award" | "users";
  badge: string;
  delay?: number;
}

const icons = {
  trending: TrendingUp,
  zap: Zap,
  award: Award,
  users: Users
};

export const AIInsightCard = ({ title, description, icon, badge, delay = 0 }: AIInsightCardProps) => {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-[3rem] bg-foreground text-background relative overflow-hidden group cursor-pointer"
    >
       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/30 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
       
       <div className="space-y-6 relative z-10">
          <div className="flex items-center justify-between">
             <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
                <Icon className="w-6 h-6" />
             </div>
             <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gold">{badge}</span>
             </div>
          </div>

          <div className="space-y-2">
             <h4 className="text-xl font-black tracking-tight leading-tight">{title}</h4>
             <p className="text-sm font-medium opacity-60 leading-relaxed">{description}</p>
          </div>

          <Button variant="link" className="p-0 h-auto text-gold text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all">
             Take Action <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
       </div>
    </motion.div>
  );
};
