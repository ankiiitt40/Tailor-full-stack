"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Clock,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { bookingServices } from "@/data/booking-data";
import { BookingService } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceSelectionProps {
  selectedService: BookingService | null;
  onSelect: (service: BookingService) => void;
}

export const ServiceSelection = ({ selectedService, onSelect }: ServiceSelectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bookingServices.map((service, i) => {
        const isSelected = selectedService?.id === service.id;

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onSelect(service)}
            className={cn(
              "group relative bg-card rounded-[2.5rem] p-6 border-2 transition-all cursor-pointer overflow-hidden",
              isSelected ? "border-gold shadow-2xl shadow-gold/10" : "border-border/50 hover:border-gold/30"
            )}
          >
            {/* Background Glow */}
            <div className={cn(
              "absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full transition-colors",
              isSelected ? "bg-gold/20" : "bg-gold/5 group-hover:bg-gold/10"
            )} />

            <div className="space-y-6 relative z-10">
               <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
                  <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {service.isPopular && (
                    <div className="absolute top-3 left-3">
                       <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase px-2 py-1 rounded-md shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1" /> Most Booked
                       </Badge>
                    </div>
                  )}
               </div>

               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                     <h3 className="text-xl font-black tracking-tight">{service.name}</h3>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                           <Clock className="w-3.5 h-3.5 text-gold" /> {service.deliveryEst}
                        </div>
                     </div>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                    isSelected ? "bg-gold text-gold-foreground" : "bg-muted group-hover:bg-gold/10 text-muted-foreground"
                  )}>
                    {isSelected ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
               </div>

               <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Starts from</p>
                  <p className="text-xl font-black text-gold">₹{service.basePrice}</p>
               </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
