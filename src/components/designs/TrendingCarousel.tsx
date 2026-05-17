"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Flame,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Design } from "@/types/designs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const TrendingCarousel = ({ designs }: { designs: Design[] }) => {
  const trending = designs.filter(d => d.isTrending);

  return (
    <div className="space-y-8 py-12 border-t border-border/50">
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Flame className="w-6 h-6 text-gold" />
             </div>
             <div className="space-y-1">
                <h2 className="text-3xl font-black tracking-tight">Viral Trends</h2>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">What everyone's pinning right now</p>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="icon" className="rounded-full border border-border/50 hover:bg-gold/10 hover:text-gold">
                <ChevronLeft className="w-5 h-5" />
             </Button>
             <Button variant="ghost" size="icon" className="rounded-full border border-border/50 hover:bg-gold/10 hover:text-gold">
                <ChevronRight className="w-5 h-5" />
             </Button>
          </div>
       </div>

       <div className="flex gap-8 overflow-x-auto no-scrollbar pb-8 -mx-8 px-8">
          {trending.map((design, i) => (
            <motion.div 
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative min-w-[400px] h-[300px] rounded-[3rem] overflow-hidden group cursor-pointer border border-border/50"
            >
               <img src={design.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               
               <div className="absolute top-6 left-6">
                  <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                     #{i + 1} Trending
                  </Badge>
               </div>

               <div className="absolute bottom-8 left-8 right-8 space-y-2">
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none">{design.title}</h3>
                  <div className="flex items-center justify-between">
                     <p className="text-white/60 text-xs font-bold uppercase tracking-widest">by {design.tailorShop}</p>
                     <div className="flex items-center gap-1.5 text-white/80">
                        <Flame className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-black">{Math.floor(design.likes / 10)}+ Hot</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};
