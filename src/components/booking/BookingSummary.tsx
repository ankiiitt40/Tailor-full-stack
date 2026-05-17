"use client";

import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Tag, 
  Receipt,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import { BookingService, MeasurementProfile } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface BookingSummaryProps {
  service: BookingService | null;
  profile: MeasurementProfile | null;
  isUrgent: boolean;
  hasHomePickup: boolean;
  onConfirm: () => void;
}

export const BookingSummary = ({ service, profile, isUrgent, hasHomePickup, onConfirm }: BookingSummaryProps) => {
  const basePrice = service?.basePrice || 0;
  const urgentFee = isUrgent ? 500 : 0;
  const pickupFee = hasHomePickup ? 0 : 0; // Free for now
  const tax = Math.round((basePrice + urgentFee) * 0.18);
  const total = basePrice + urgentFee + tax;

  return (
    <div className="sticky top-28 space-y-6">
       <div className="p-8 glass-card border-gold/20 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
          
          <div className="space-y-2">
             <h3 className="text-2xl font-black tracking-tight">Booking Summary</h3>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Review your order details</p>
          </div>

          <div className="space-y-6">
             {/* Service & Profile Selection Previews */}
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-border/50">
                   <img src={service?.image || "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=100"} className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Service</p>
                   <p className="text-sm font-bold tracking-tight">{service?.name || "No Service Selected"}</p>
                </div>
             </div>

             <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                   <Info className="w-6 h-6 text-gold" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Profile</p>
                   <p className="text-sm font-bold tracking-tight">{profile?.name || "Self (Default)"}</p>
                </div>
             </div>

             {/* Price Breakdown */}
             <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-muted-foreground">Base Stitching Fee</span>
                   <span className="font-bold">₹{basePrice}</span>
                </div>
                {isUrgent && (
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-muted-foreground">Express Delivery Fee</span>
                     <span className="text-red-500 font-bold">+ ₹{urgentFee}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-muted-foreground">Home Pickup & Delivery</span>
                   <span className="text-green-500 font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                   <span className="text-muted-foreground">GST (18%)</span>
                   <span className="font-bold">₹{tax}</span>
                </div>
                
                <Separator className="bg-border/50" />
                
                <div className="flex justify-between items-end pt-2">
                   <div>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Final Total</p>
                      <p className="text-3xl font-black tracking-tighter">₹{total}</p>
                   </div>
                   <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black uppercase px-2 py-1 mb-1">
                      Best Price
                   </Badge>
                </div>
             </div>
          </div>

          <Button 
            onClick={onConfirm}
            disabled={!service}
            className="w-full h-16 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all group"
          >
             Confirm & Pay <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex items-center justify-center gap-2 pt-4 opacity-60">
             <ShieldCheck className="w-4 h-4 text-gold" />
             <span className="text-[10px] font-black uppercase tracking-widest">Secured by StitchShield</span>
          </div>
       </div>

       <div className="p-6 rounded-[2.5rem] bg-muted/30 border border-border/50 border-dashed space-y-4">
          <div className="flex items-center gap-2">
             <Tag className="w-4 h-4 text-gold" />
             <span className="text-[10px] font-black uppercase tracking-widest">Active Offers</span>
          </div>
          <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 flex justify-between items-center">
             <span className="text-[10px] font-black text-gold">FIRST20 (applied)</span>
             <span className="text-[10px] font-black text-gold">-₹200</span>
          </div>
       </div>
    </div>
  );
};
