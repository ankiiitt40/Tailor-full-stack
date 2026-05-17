"use client";

import React from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Star, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import { Recommendation } from "@/types/ai";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AIMatchCardProps {
  rec: Recommendation;
  delay?: number;
}

export const AIMatchCard = ({ rec, delay = 0 }: AIMatchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-[3.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all group relative overflow-hidden shadow-2xl"
    >
       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors" />
       
       <div className="space-y-6 relative z-10">
          {/* Header with Match Score */}
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold animate-pulse" />
                <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">AI Matching Engine</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-1.5 bg-gold text-gold-foreground rounded-full text-xs font-black shadow-lg">
                {rec.matchScore}% MATCH
             </div>
          </div>

          {/* Main Info */}
          <div className="flex gap-6">
             {rec.image && (
               <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gold/20 shrink-0">
                  <img src={rec.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
             )}
             <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight leading-none">{rec.title}</h3>
                <p className="text-sm font-medium text-muted-foreground">{rec.description}</p>
             </div>
          </div>

          {/* AI Reason Box */}
          <div className="p-5 rounded-2xl bg-gold/5 border border-gold/20 space-y-2 relative">
             <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-gold" />
                <span className="text-[9px] font-black text-gold uppercase tracking-widest">Why this recommendation?</span>
             </div>
             <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">
                "{rec.reason}"
             </p>
          </div>

          {/* Metadata Grid */}
          {rec.metadata && (
            <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-6">
               {rec.metadata.priceRange && (
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Est. Pricing</p>
                    <p className="text-xs font-black">{rec.metadata.priceRange}</p>
                 </div>
               )}
               {rec.metadata.delivery && (
                 <div className="space-y-1">
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">Delivery Speed</p>
                    <p className="text-xs font-black text-gold">{rec.metadata.delivery}</p>
                 </div>
               )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
             <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[8px] font-black">
                        {i === 3 ? "2k+" : "U"}
                     </div>
                   ))}
                </div>
                <span className="text-[10px] font-bold text-muted-foreground">Loved by many</span>
             </div>
             <Button className="h-12 px-8 rounded-xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
                Book Now <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </div>
       </div>
    </motion.div>
  );
};
