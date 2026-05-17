"use client";

import React from "react";
import { 
  IndianRupee, 
  Clock, 
  Scissors, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TailorProfile } from "@/types/profile";

export const PricingTable = ({ profile }: { profile: TailorProfile }) => {
  return (
    <div className="space-y-10 py-12">
      <div className="flex items-center justify-between">
         <div className="space-y-2">
            <h2 className="text-4xl font-black tracking-tight">Services & Pricing</h2>
            <p className="text-muted-foreground text-lg">Choose from our curated tailoring services</p>
         </div>
         <Button variant="outline" className="rounded-2xl h-12 gap-2 border-border/50 font-bold uppercase tracking-widest text-[10px]">
            Download Full Rate Card
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {profile.services.map((service, i) => (
           <motion.div 
             key={service.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="group relative p-6 rounded-[2.5rem] bg-card border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all duration-500 overflow-hidden"
           >
              {service.isPopular && (
                <div className="absolute top-0 right-10 transform -translate-y-1/2">
                   <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-b-xl shadow-xl">
                      Most Popular
                   </Badge>
                </div>
              )}

              <div className="flex gap-6">
                 <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 border border-border/50 group-hover:border-gold/20 transition-all">
                    <img src={service.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 
                 <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                       <div className="space-y-1">
                          <h3 className="text-xl font-bold tracking-tight group-hover:text-gold transition-colors">{service.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                             <Scissors className="w-3.5 h-3.5" />
                             <span className="text-xs font-medium">{service.fabricSupport}</span>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-2xl font-black text-gold tracking-tighter">₹{service.price}</p>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Base Price</p>
                       </div>
                    </div>

                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gold" />
                          <span className="text-sm font-bold">{service.deliveryTime} Delivery</span>
                       </div>
                       <div className="h-4 w-px bg-border/50" />
                       <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-gold" />
                          <span className="text-sm font-bold">Fit Guarantee</span>
                       </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                       <Button className="flex-1 bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-12 font-bold text-[10px] uppercase tracking-widest transition-all">
                          Select Service
                       </Button>
                       <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-border/50 hover:bg-gold/10 hover:text-gold transition-all">
                          <Info className="w-4 h-4" />
                       </Button>
                    </div>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};
