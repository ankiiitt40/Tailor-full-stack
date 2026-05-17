"use client";

import React from "react";
import { 
  Zap, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Star, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { mockActivities } from "@/data/notification-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ActivityTimeline = () => {
  return (
    <div className="p-8 rounded-[3.5rem] bg-card border border-border/50 space-y-10 relative overflow-hidden group">
       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
       
       <div className="flex items-center justify-between relative z-10">
          <div className="space-y-1">
             <h3 className="text-xl font-black tracking-tight">Realtime Activity</h3>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Live Updates</span>
             </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
             <TrendingUp className="w-5 h-5" />
          </Button>
       </div>

       <div className="space-y-8 relative z-10">
          {mockActivities.map((act, i) => (
            <div key={act.id} className="flex gap-4 relative group/item">
               {i < mockActivities.length - 1 && (
                 <div className="absolute left-[19px] top-10 bottom-[-20px] w-0.5 bg-border/50 group-hover/item:bg-gold/30 transition-colors" />
               )}
               <div className="w-10 h-10 rounded-xl bg-muted group-hover/item:bg-gold/10 flex items-center justify-center shrink-0 transition-all group-hover/item:scale-110">
                  {act.type === "order" ? <ShoppingBag className="w-4 h-4 text-gold" /> : 
                   act.type === "review" ? <Star className="w-4 h-4 text-gold" /> : <Sparkles className="w-4 h-4 text-gold" />}
               </div>
               <div className="space-y-1">
                  <p className="text-[11px] leading-relaxed">
                     <span className="font-black text-foreground">{act.user}</span>{" "}
                     <span className="text-muted-foreground font-medium">{act.action}</span>{" "}
                     <span className="font-black text-gold">{act.target}</span>
                  </p>
                  <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-widest">{act.timestamp}</p>
               </div>
            </div>
          ))}
       </div>

       <Button variant="outline" className="w-full h-12 rounded-xl border-border/50 font-black text-[10px] uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all relative z-10">
          View Platform Insights <ArrowUpRight className="w-4 h-4 ml-2" />
       </Button>
    </div>
  );
};
