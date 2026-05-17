"use client";

import React from "react";
import { 
  Check, 
  X, 
  Star, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Award,
  ChevronRight,
  TrendingUp,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { TailorComparison } from "@/types/comparison";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  tailors: TailorComparison[];
}

export const ComparisonTable = ({ tailors }: ComparisonTableProps) => {
  const rows = [
    { label: "Starting Price", key: "startingPrice", type: "price" },
    { label: "Delivery Time", key: "deliveryTime", type: "text" },
    { label: "Rating", key: "rating", type: "rating" },
    { label: "Experience", key: "experience", type: "text" },
    { label: "Distance", key: "distance", type: "text" },
    { label: "Urgent Delivery", key: "hasUrgentDelivery", type: "boolean" },
    { label: "Home Pickup", key: "hasHomePickup", type: "boolean" },
    { label: "Design Expertise", key: "designExpertise", type: "progress" },
    { label: "Bridal Wear Expertise", key: "bridalExpertise", type: "progress" },
    { label: "On-time Delivery %", key: "onTimeDeliveryRate", type: "percentage" },
    { label: "Repeat Customers", key: "repeatCustomerRate", type: "percentage" },
    { label: "Alteration Support", key: "alterationSupport", type: "boolean" },
  ];

  return (
    <div className="w-full overflow-x-auto pb-8 no-scrollbar">
      <div className="min-w-[1000px] bg-card/40 backdrop-blur-xl border border-border/50 rounded-[3rem] overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              <th className="sticky left-0 z-20 bg-card/90 backdrop-blur-3xl p-10 text-left w-64 border-r border-border/50">
                 <div className="space-y-1">
                    <p className="text-xl font-black tracking-tight">Comparison Matrix</p>
                    <p className="text-[10px] font-black text-gold uppercase tracking-widest">Decision Factors</p>
                 </div>
              </th>
              {tailors.map((tailor, i) => (
                <th key={tailor.id} className="p-8 text-left min-w-[240px]">
                   <div className="space-y-4">
                      <div className="relative group/img w-full h-32 rounded-2xl overflow-hidden border border-border/50">
                         <img src={tailor.image} className="w-full h-full object-cover transition-transform group-hover/img:scale-110" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         {tailor.isVerified && (
                            <div className="absolute top-2 right-2 p-1 bg-green-500 rounded-lg shadow-lg">
                               <ShieldCheck className="w-3 h-3 text-white" />
                            </div>
                         )}
                      </div>
                      <div className="space-y-1">
                         <h3 className="text-lg font-black tracking-tight">{tailor.shopName}</h3>
                         <p className="text-xs font-bold text-muted-foreground">{tailor.name}</p>
                      </div>
                      <Button className="w-full bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-10 font-bold text-[10px] uppercase tracking-widest transition-all">
                         Book Now
                      </Button>
                   </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.key} className={cn(
                "group hover:bg-gold/5 transition-colors border-b border-border/50 last:border-none",
                rowIndex % 2 === 0 ? "bg-muted/10" : ""
              )}>
                <td className="sticky left-0 z-20 bg-card/90 backdrop-blur-3xl p-6 px-10 border-r border-border/50">
                   <span className="text-xs font-black text-muted-foreground uppercase tracking-widest">{row.label}</span>
                </td>
                {tailors.map((tailor) => {
                  const value = (tailor as any)[row.key];
                  return (
                    <td key={`${tailor.id}-${row.key}`} className="p-6 px-8">
                       {row.type === "price" && (
                          <div className="flex items-baseline gap-1">
                             <span className="text-xl font-black text-foreground tracking-tighter">₹{value}</span>
                             <span className="text-[10px] font-bold text-muted-foreground">starting</span>
                          </div>
                       )}
                       {row.type === "text" && (
                          <span className="text-sm font-bold text-foreground">{value}</span>
                       )}
                       {row.type === "rating" && (
                          <div className="flex items-center gap-2">
                             <div className="flex items-center gap-1 bg-gold/10 px-2 py-0.5 rounded-lg border border-gold/20">
                                <Star className="w-3 h-3 fill-gold text-gold" />
                                <span className="text-xs font-bold text-gold">{value}</span>
                             </div>
                             <span className="text-[10px] font-medium text-muted-foreground">({tailor.reviewsCount})</span>
                          </div>
                       )}
                       {row.type === "boolean" && (
                          <div className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center",
                            value ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                          )}>
                             {value ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                          </div>
                       )}
                       {row.type === "progress" && (
                          <div className="space-y-1.5 w-full">
                             <div className="flex justify-between items-center px-0.5">
                                <span className="text-[10px] font-black text-muted-foreground">{value}/10</span>
                             </div>
                             <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${value * 10}%` }}
                                  className={cn(
                                    "h-full rounded-full",
                                    value > 8.5 ? "bg-gold" : "bg-foreground/40"
                                  )}
                                />
                             </div>
                          </div>
                       )}
                       {row.type === "percentage" && (
                          <div className="flex items-center gap-3">
                             <span className="text-sm font-black text-foreground">{value}%</span>
                             {value > 90 && (
                                <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] font-black uppercase px-2 py-0.5 rounded-md">
                                   Top Tier
                                </Badge>
                             )}
                          </div>
                       )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
