"use client";

import React, { useState } from "react";
import { 
  Heart, 
  Eye, 
  Maximize2, 
  Filter, 
  Sparkles,
  Camera
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TailorProfile, Design } from "@/types/profile";
import { cn } from "@/lib/utils";

const categories = ["All", "Bridal", "Party Wear", "Formal", "Traditional", "Designer Wear"];

export const PortfolioGallery = ({ profile }: { profile: TailorProfile }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDesigns = activeCategory === "All" 
    ? profile.designs 
    : profile.designs.filter(d => d.category === activeCategory);

  return (
    <div className="space-y-10 py-12 border-t border-border/50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Design Portfolio</h2>
            <p className="text-muted-foreground text-lg">Visual inspiration from our recent masterpieces</p>
         </div>
         <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-widest border",
                  activeCategory === cat 
                    ? "bg-gold border-gold text-gold-foreground shadow-lg shadow-gold/20" 
                    : "bg-card border-border/50 text-muted-foreground hover:border-gold/30 hover:text-gold"
                )}
              >
                 {cat}
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design, i) => (
              <motion.div 
                layout
                key={design.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-muted cursor-pointer"
              >
                 <img 
                   src={design.image} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                 
                 {/* Design Details Overlay */}
                 <div className="absolute inset-0 p-8 flex flex-col justify-between transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <div className="flex justify-end">
                       <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-gold hover:text-gold-foreground transition-all">
                          <Heart className="w-5 h-5" />
                       </Button>
                    </div>
                    
                    <div className="space-y-4">
                       <Badge className="bg-gold/20 backdrop-blur-md text-gold border border-gold/30 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1">
                          {design.category}
                       </Badge>
                       <h3 className="text-2xl font-bold text-white tracking-tight">{design.title}</h3>
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-2 text-white/80">
                                <Heart className="w-4 h-4 fill-gold text-gold" />
                                <span className="text-sm font-bold">{design.likes}</span>
                             </div>
                             <div className="flex items-center gap-2 text-white/80">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-bold">1.2k</span>
                             </div>
                          </div>
                          <Button className="h-12 w-12 rounded-2xl bg-white text-black hover:bg-gold hover:text-gold-foreground p-0">
                             <Maximize2 className="w-5 h-5" />
                          </Button>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
         </AnimatePresence>
      </div>

      <div className="flex justify-center pt-8">
         <Button variant="outline" className="h-14 px-12 rounded-2xl border-border/50 font-black uppercase tracking-[0.2em] text-[10px] hover:border-gold/30 hover:text-gold transition-all">
            Load More Designs <Camera className="w-4 h-4 ml-3" />
         </Button>
      </div>
    </div>
  );
};

