"use client";

import React from "react";
import { 
  SlidersHorizontal, 
  Star, 
  MapPin, 
  IndianRupee, 
  Clock, 
  ShieldCheck, 
  Scissors,
  Check
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "gents", label: "Gents Tailor", icon: Scissors },
  { id: "ladies", label: "Ladies Tailor", icon: Scissors },
  { id: "wedding", label: "Wedding Specialist", icon: ShieldCheck },
  { id: "boutique", label: "Boutique", icon: Star },
  { id: "kids", label: "Kids Wear", icon: Clock },
];

export const FilterSidebar = () => {
  return (
    <div className="w-full space-y-10 py-6 pr-4 border-r border-border/50 h-full overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
           <SlidersHorizontal className="w-5 h-5 text-gold" />
           <h3 className="text-xl font-bold">Filters</h3>
        </div>
        <Button variant="ghost" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-gold transition-colors">Reset All</Button>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Specialization</p>
        <div className="flex flex-wrap gap-2">
           {categories.map((cat) => (
             <button 
               key={cat.id}
               className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all group"
             >
                <cat.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                <span className="text-xs font-bold whitespace-nowrap">{cat.label}</span>
             </button>
           ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="space-y-8">
        <div className="flex justify-between items-center ml-1">
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Budget Range</p>
           <span className="text-xs font-bold text-gold">₹500 - ₹5,000+</span>
        </div>
        <Slider defaultValue={[500, 3000]} max={5000} step={100} className="[&>span]:bg-gold" />
      </div>

      {/* Distance */}
      <div className="space-y-8">
        <div className="flex justify-between items-center ml-1">
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Max Distance</p>
           <span className="text-xs font-bold text-gold">5.0 km</span>
        </div>
        <Slider defaultValue={[2]} max={10} step={0.5} className="[&>span]:bg-gold" />
      </div>

      {/* Ratings */}
      <div className="space-y-6">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Minimum Rating</p>
        <div className="grid grid-cols-2 gap-2">
           {[4.5, 4.0, 3.5, 3.0].map((rating) => (
             <button 
               key={rating}
               className="flex items-center justify-center gap-2 py-3 rounded-xl bg-card border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all group"
             >
                <Star className="w-3 h-3 fill-gold text-gold" />
                <span className="text-sm font-bold">{rating}+</span>
             </button>
           ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-6 pt-6 border-t border-border/50">
         {[
           { label: "Verified Partners Only", icon: ShieldCheck },
           { label: "Urgent Delivery (24h)", icon: Clock },
           { label: "Top Rated This Month", icon: Star },
           { label: "Eco-Friendly Studios", icon: MapPin },
         ].map((toggle) => (
           <div key={toggle.label} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-gold/20 transition-all">
              <div className="flex items-center gap-3">
                 <toggle.icon className="w-4 h-4 text-gold" />
                 <span className="text-xs font-bold leading-none">{toggle.label}</span>
              </div>
              <Switch className="data-[state=checked]:bg-gold" />
           </div>
         ))}
      </div>

      <Button className="w-full h-14 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-bold text-sm shadow-xl shadow-black/5 transition-all">
         Apply Filters
      </Button>
    </div>
  );
};
