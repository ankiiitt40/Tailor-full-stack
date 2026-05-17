"use client";

import React from "react";
import { 
  TrendingUp, 
  MapPin, 
  Sparkles, 
  ArrowUpRight,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import { FashionTrend } from "@/types/ai";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TrendPredictionCardProps {
  trend: FashionTrend;
  delay?: number;
}

export const TrendPredictionCard = ({ trend, delay = 0 }: TrendPredictionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-[3.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all group relative overflow-hidden flex flex-col md:flex-row gap-8"
    >
       <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
       
       {/* Trend Image */}
       <div className="w-full md:w-48 aspect-square rounded-3xl overflow-hidden border-2 border-gold/10 shrink-0 relative">
          <img src={trend.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-border/50 px-3 py-1 rounded-full flex items-center gap-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Rising Trend</span>
          </div>
       </div>

       {/* Info Content */}
       <div className="flex-1 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
             <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                   {trend.region}
                </Badge>
                <div className="flex items-center gap-1.5 text-green-500 text-[10px] font-black">
                   <TrendingUp className="w-3.5 h-3.5" /> +{trend.growth}% Growth
                </div>
             </div>
             
             <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight">{trend.label}</h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                   {trend.description}
                </p>
             </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border/50">
             <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Trending in your area</span>
             </div>
             <Button variant="ghost" className="h-10 px-6 rounded-xl gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all text-[10px] uppercase tracking-widest">
                Explore Styles <ArrowUpRight className="w-4 h-4" />
             </Button>
          </div>
       </div>
    </motion.div>
  );
};
