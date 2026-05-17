"use client";

import React from "react";
import { 
  Heart, 
  Bookmark, 
  Maximize2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Eye,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Design } from "@/types/designs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DesignCardProps {
  design: Design;
  onView: (design: Design) => void;
}

export const DesignCard = ({ design, onView }: DesignCardProps) => {
  const [isSaved, setIsSaved] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-gold/30 transition-all cursor-pointer mb-6"
    >
      {/* Design Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
         <img 
           src={design.image} 
           alt={design.title}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
         />
         
         {/* Overlays */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
         
         {/* Top Badges */}
         <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
            {design.isTrending && (
               <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" /> Trending Style
               </Badge>
            )}
            <Badge className="bg-black/60 backdrop-blur-md text-white border-white/10 text-[8px] font-black uppercase px-3 py-1 rounded-full">
               {design.category}
            </Badge>
         </div>

         {/* Floating Actions */}
         <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <Button 
              size="icon" 
              className={cn(
                "w-10 h-10 rounded-xl transition-all",
                isLiked ? "bg-red-500 text-white" : "bg-white/10 backdrop-blur-md text-white hover:bg-red-500"
              )}
              onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
            >
               <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
            </Button>
            <Button 
              size="icon" 
              className={cn(
                "w-10 h-10 rounded-xl transition-all",
                isSaved ? "bg-gold text-gold-foreground" : "bg-white/10 backdrop-blur-md text-white hover:bg-gold"
              )}
              onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
            >
               <Bookmark className={cn("w-4 h-4", isSaved && "fill-current")} />
            </Button>
            <Button 
              size="icon" 
              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); onView(design); }}
            >
               <Maximize2 className="w-4 h-4" />
            </Button>
         </div>

         {/* Bottom Info Overlay */}
         <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="space-y-4">
               <div className="space-y-1">
                  <h3 className="text-xl font-black text-white leading-tight">{design.title}</h3>
                  <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">by {design.tailorShop}</span>
                     {design.isVerified && <ShieldCheck className="w-3 h-3 text-gold" />}
                  </div>
               </div>
               
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/60">
                     <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold">{design.likes}</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold">{design.saves}</span>
                     </div>
                  </div>
                  <Button className="h-10 px-6 rounded-xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                     View Design
                  </Button>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};
