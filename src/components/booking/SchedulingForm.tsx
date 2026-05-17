"use client";

import React, { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Truck, 
  Zap,
  Info,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { timeSlots } from "@/data/booking-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface SchedulingFormProps {
  date: string;
  timeSlot: string;
  isUrgent: boolean;
  hasHomePickup: boolean;
  onUpdate: (data: any) => void;
}

export const SchedulingForm = ({ date, timeSlot, isUrgent, hasHomePickup, onUpdate }: SchedulingFormProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-12">
         {/* Date Selection */}
         <div className="space-y-6">
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">Delivery Schedule</h3>
               <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Select your preferred delivery date</p>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
               {[...Array(7)].map((_, i) => {
                 const d = new Date();
                 d.setDate(d.getDate() + i + 5); // Minimum 5 days out
                 const isSelected = date === d.toISOString().split("T")[0];
                 
                 return (
                   <button
                     key={i}
                     onClick={() => onUpdate({ date: d.toISOString().split("T")[0] })}
                     className={cn(
                       "flex flex-col items-center gap-1 p-4 rounded-2xl border-2 transition-all group",
                       isSelected ? "bg-gold border-gold text-gold-foreground shadow-xl shadow-gold/20" : "bg-card border-border/50 hover:border-gold/30"
                     )}
                   >
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                        {d.toLocaleDateString("en-US", { weekday: "short" })}
                      </span>
                      <span className="text-lg font-black tracking-tighter">
                        {d.getDate()}
                      </span>
                   </button>
                 );
               })}
            </div>
         </div>

         {/* Time Slots */}
         <div className="space-y-6">
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">Preferred Time Slot</h3>
               <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Choose a time for delivery or pickup</p>
            </div>
            
            <div className="space-y-3">
               {timeSlots.map((slot) => {
                 const isSelected = timeSlot === slot;
                 return (
                   <button
                     key={slot}
                     onClick={() => onUpdate({ timeSlot: slot })}
                     className={cn(
                       "w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all group",
                       isSelected ? "bg-gold/10 border-gold shadow-lg" : "bg-card border-border/50 hover:border-gold/30"
                     )}
                   >
                      <div className="flex items-center gap-4">
                         <div className={cn(
                           "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                           isSelected ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground group-hover:bg-gold/10"
                         )}>
                            <Clock className="w-5 h-5" />
                         </div>
                         <span className="text-sm font-bold">{slot}</span>
                      </div>
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center",
                        isSelected ? "border-gold bg-gold text-gold-foreground" : "border-border/50"
                      )}>
                         {isSelected && <div className="w-2 h-2 bg-current rounded-full" />}
                      </div>
                   </button>
                 );
               })}
            </div>
         </div>
      </div>

      <div className="space-y-12">
         {/* Premium Options */}
         <div className="space-y-6">
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">Service Add-ons</h3>
               <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Enhance your tailoring experience</p>
            </div>

            <div className="space-y-4">
               {/* Urgent Delivery */}
               <div className={cn(
                 "p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group",
                 isUrgent ? "bg-red-500/5 border-red-500/20" : "bg-card border-border/50"
               )}>
                  <div className="flex items-center gap-5">
                     <div className={cn(
                       "w-14 h-14 rounded-2xl flex items-center justify-center transition-all",
                       isUrgent ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"
                     )}>
                        <Zap className="w-7 h-7" />
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <h4 className="text-lg font-black tracking-tight">Express Delivery</h4>
                           <Badge className="bg-red-500/10 text-red-500 border-none text-[8px] font-black uppercase">+ ₹500</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Get your outfit ready in 48 hours guaranteed.</p>
                     </div>
                  </div>
                  <Switch 
                    checked={isUrgent} 
                    onCheckedChange={(checked) => onUpdate({ isUrgent: checked })} 
                  />
               </div>

               {/* Home Pickup */}
               <div className={cn(
                 "p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group",
                 hasHomePickup ? "bg-gold/5 border-gold/20" : "bg-card border-border/50"
               )}>
                  <div className="flex items-center gap-5">
                     <div className={cn(
                       "w-14 h-14 rounded-2xl flex items-center justify-center transition-all",
                       hasHomePickup ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground"
                     )}>
                        <Truck className="w-7 h-7" />
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <h4 className="text-lg font-black tracking-tight">Home Pickup</h4>
                           <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black uppercase">Free</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Expert arrives at your doorstep for measurements.</p>
                     </div>
                  </div>
                  <Switch 
                    checked={hasHomePickup} 
                    onCheckedChange={(checked) => onUpdate({ hasHomePickup: checked })} 
                  />
               </div>
            </div>
         </div>

         {/* Delivery Info */}
         <div className="p-8 rounded-[3rem] bg-foreground/5 border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
            <div className="space-y-6 relative z-10">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <h4 className="text-sm font-black uppercase tracking-widest">Safe Stitch Guarantee</h4>
               </div>
               <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Your fabric is insured up to ₹50,000 against damage or loss during pickup and transit. We use premium tamper-proof packaging.
               </p>
               <Button variant="link" className="p-0 text-gold font-black text-[10px] uppercase tracking-widest h-auto">
                  Learn about our safety protocols <ChevronRight className="w-4 h-4 ml-1" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
};
