"use client";

import React from "react";
import { 
  Sparkles, 
  TrendingDown, 
  Zap, 
  Crown, 
  ShieldCheck,
  ChevronRight,
  Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";
import { TailorComparison } from "@/types/comparison";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const AIRecommendations = ({ tailors }: { tailors: TailorComparison[] }) => {
  // Simple "AI" logic
  const bestValue = [...tailors].sort((a, b) => a.startingPrice - b.startingPrice)[0];
  const topRated = [...tailors].sort((a, b) => b.rating - a.rating)[0];
  const fastest = [...tailors].sort((a, b) => {
    const timeA = parseInt(a.deliveryTime.split("-")[0]);
    const timeB = parseInt(b.deliveryTime.split("-")[0]);
    return timeA - timeB;
  })[0];

  const insights = [
    {
      title: "Best Value Choice",
      tailor: bestValue,
      description: "Highest quality-to-price ratio in your current selection.",
      icon: TrendingDown,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
    {
      title: "StitchAI Pick",
      tailor: topRated,
      description: "Based on 200+ data points including fit precision and fabric care.",
      icon: Crown,
      color: "text-gold",
      bg: "bg-gold/10",
      border: "border-gold/20"
    },
    {
      title: "Fastest Delivery",
      tailor: fastest,
      description: "Consistent 48-hour delivery record with 98% on-time performance.",
      icon: Zap,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <div className="space-y-10 py-16 border-t border-border/50">
      <div className="flex items-center gap-4">
         <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gold" />
         </div>
         <div className="space-y-1">
            <h2 className="text-3xl font-black tracking-tight">AI Comparison Insights</h2>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Data-driven recommendations for your needs</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {insights.map((insight, i) => (
           <motion.div 
             key={insight.title}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className={`p-8 rounded-[2.5rem] bg-card border ${insight.border} hover:scale-[1.02] transition-all relative overflow-hidden group`}
           >
              <div className={`absolute top-0 right-0 w-32 h-32 ${insight.bg} blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`} />
              
              <div className="space-y-6 relative z-10">
                 <div className={`w-12 h-12 rounded-2xl ${insight.bg} flex items-center justify-center`}>
                    <insight.icon className={`w-6 h-6 ${insight.color}`} />
                 </div>
                 
                 <div className="space-y-2">
                    <h3 className="text-xl font-black tracking-tight">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                 </div>

                 <div className="pt-4 flex items-center gap-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-border/50">
                       <img src={insight.tailor.image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-xs font-black tracking-tight">{insight.tailor.shopName}</p>
                       <p className="text-[10px] font-bold text-gold uppercase">Recommended</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto rounded-full hover:bg-gold hover:text-gold-foreground">
                       <ChevronRight className="w-4 h-4" />
                    </Button>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>

      {/* Value Tip */}
      <Card className="p-6 rounded-3xl bg-muted/30 border-border/50 border-dashed flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
               <Lightbulb className="w-5 h-5 text-gold" />
            </div>
            <p className="text-sm font-medium">
               <span className="font-black">Smart Savings Tip:</span> Booking <span className="font-black">{bestValue.shopName}</span> for casual wear and <span className="font-black">{topRated.shopName}</span> for bridal could save you up to <span className="text-gold font-bold">₹1,200</span>.
            </p>
         </div>
         <Button className="rounded-xl h-12 bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest shrink-0">
            Apply Combined Strategy
         </Button>
      </Card>
    </div>
  );
};
