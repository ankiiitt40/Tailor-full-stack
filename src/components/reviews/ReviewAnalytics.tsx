"use client";

import React from "react";
import { 
  Star, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Users, 
  Zap,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { reviewStats } from "@/data/reviews-data";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const ReviewAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
       {/* Main Rating Score */}
       <div className="lg:col-span-4 p-10 rounded-[3.5rem] bg-foreground text-background shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          <div className="space-y-8 relative z-10 text-center">
             <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">Platform Average</p>
             <div className="space-y-1">
                <h2 className="text-8xl font-black tracking-tighter text-white">{reviewStats.averageRating}</h2>
                <div className="flex justify-center gap-1">
                   {[1, 2, 3, 4, 5].map((star) => (
                     <Star key={star} className={cn(
                       "w-6 h-6 fill-gold text-gold",
                       star > Math.floor(reviewStats.averageRating) && "opacity-30"
                     )} />
                   ))}
                </div>
             </div>
             <p className="text-sm font-bold text-background/60">Based on {reviewStats.totalReviews} Verified Experiences</p>
             <div className="pt-6 border-t border-background/10">
                <div className="flex items-center justify-center gap-3">
                   <TrendingUp className="w-5 h-5 text-gold" />
                   <p className="text-xl font-black text-gold">{reviewStats.recommendationRate}% Recommendation Rate</p>
                </div>
             </div>
          </div>
       </div>

       {/* Category Breakdown */}
       <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-8">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight">Performance Breakdown</h3>
                <Zap className="w-5 h-5 text-gold" />
             </div>
             <div className="space-y-6">
                {reviewStats.categories.map((cat) => (
                  <div key={cat.label} className="space-y-2">
                     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span>{cat.label}</span>
                        <span>{cat.rating} / 5.0</span>
                     </div>
                     <Progress value={(cat.rating / 5) * 100} className="h-2 bg-muted/30" />
                  </div>
                ))}
             </div>
          </div>

          <div className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-8">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight">Rating Distribution</h3>
                <Star className="w-5 h-5 text-gold" />
             </div>
             <div className="space-y-3">
                {reviewStats.distribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center gap-4">
                     <span className="text-[10px] font-black w-12">{dist.stars} Stars</span>
                     <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(dist.count / reviewStats.totalReviews) * 100}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gold rounded-full"
                        />
                     </div>
                     <span className="text-[10px] font-bold text-muted-foreground w-8">{dist.count}</span>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};
