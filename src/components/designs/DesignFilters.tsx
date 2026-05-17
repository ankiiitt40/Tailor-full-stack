"use client";

import React from "react";
import { 
  Filter, 
  LayoutGrid, 
  Sparkles, 
  TrendingUp, 
  Check,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = [
  "All Designs",
  "Blouse Designs",
  "Kurta Designs",
  "Sherwani",
  "Lehenga",
  "Kids Wear",
  "Party Wear",
  "Formal Wear",
  "Bridal Collection",
  "Fusion Wear"
];

const filters = [
  { label: "Trending Now", icon: Sparkles },
  { label: "Most Saved", icon: LayoutGrid },
  { label: "Elite Tailors", icon: TrendingUp },
];

export const DesignFilters = () => {
  const [activeCategory, setActiveCategory] = React.useState("All Designs");

  return (
    <div className="space-y-10">
      {/* Search Result Summary */}
      <div className="space-y-2">
         <h3 className="text-2xl font-black tracking-tight">Categories</h3>
         <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Browse by outfit type</p>
      </div>

      {/* Main Categories */}
      <div className="space-y-2">
         {categories.map((cat) => (
           <button
             key={cat}
             onClick={() => setActiveCategory(cat)}
             className={cn(
               "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
               activeCategory === cat 
                ? "bg-gold/10 text-gold border border-gold/20" 
                : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
             )}
           >
              <span className="text-sm font-bold">{cat}</span>
              <div className={cn(
                "w-6 h-6 rounded-lg flex items-center justify-center transition-all",
                activeCategory === cat ? "bg-gold text-gold-foreground" : "bg-muted group-hover:bg-gold/10"
              )}>
                 {activeCategory === cat ? <Check className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
           </button>
         ))}
      </div>

      {/* Smart Filters */}
      <div className="space-y-6 pt-6 border-t border-border/50">
         <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Smart Filters</h4>
         <div className="space-y-3">
            {filters.map((f) => (
              <Button 
                key={f.label}
                variant="outline" 
                className="w-full h-14 rounded-2xl border-border/50 justify-start px-6 gap-3 font-bold hover:bg-gold/5 hover:text-gold transition-all"
              >
                 <f.icon className="w-4 h-4" /> {f.label}
              </Button>
            ))}
         </div>
      </div>

      {/* Seasonal Ad Card */}
      <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/20 relative overflow-hidden group cursor-pointer">
         <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
         <div className="space-y-4 relative z-10">
            <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase tracking-widest">Seasonal Collection</Badge>
            <h4 className="text-lg font-black tracking-tight leading-tight">Bridal Season <br /> 2024 Inspiration</h4>
            <Button variant="link" className="p-0 text-gold font-black text-[10px] uppercase tracking-widest h-auto">
               View Moodboard <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
         </div>
      </div>
    </div>
  );
};
