"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  ChevronDown, 
  MessageSquare, 
  Zap,
  Info,
  ShieldCheck,
  CreditCard,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { TailorProfile } from "@/types/profile";

export const BookingCard = ({ profile }: { profile: TailorProfile }) => {
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <Card className="sticky top-28 p-8 glass-card border-gold/20 rounded-[3.5rem] shadow-[0_0_50px_rgba(212,175,55,0.05)] space-y-8 overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
      
      <div className="flex justify-between items-end">
         <div className="space-y-1">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Stitching Starts At</p>
            <h3 className="text-4xl font-black text-foreground tracking-tighter">₹{profile.services[2].price} <span className="text-lg font-bold text-muted-foreground">/ outfit</span></h3>
         </div>
         <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
            Fair Pricing
         </Badge>
      </div>

      <div className="space-y-6">
         <div className="space-y-3">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Select Service Type</label>
            <Select>
               <SelectTrigger className="h-14 rounded-2xl bg-muted/30 border-border/50 font-bold focus:ring-gold/30">
                  <SelectValue placeholder="Choose a service" />
               </SelectTrigger>
               <SelectContent className="glass border-gold/20 rounded-2xl">
                  {profile.services.map(s => (
                    <SelectItem key={s.id} value={s.id} className="p-3 font-medium cursor-pointer">
                       <div className="flex justify-between w-full gap-8">
                          <span>{s.name}</span>
                          <span className="text-gold font-bold">₹{s.price}</span>
                       </div>
                    </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>

         <div className="space-y-3">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Expected Delivery Date</label>
            <div className="relative">
               <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
               <Input 
                 type="date" 
                 className="h-14 pl-12 rounded-2xl bg-muted/30 border-border/50 font-bold focus-visible:ring-gold/30"
               />
            </div>
         </div>

         <div className="p-5 rounded-3xl bg-gold/5 border border-gold/10 space-y-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gold flex items-center justify-center">
                     <Zap className="w-4 h-4 text-gold-foreground" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-gold uppercase tracking-widest leading-none">Flash Delivery</p>
                     <p className="text-xs font-bold text-muted-foreground">24-48 Hours Express</p>
                  </div>
               </div>
               <Switch 
                 checked={isUrgent} 
                 onCheckedChange={setIsUrgent}
                 className="data-[state=checked]:bg-gold" 
               />
            </div>
            {isUrgent && (
               <motion.p 
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: "auto" }}
                 className="text-[10px] font-bold text-gold/80 italic pl-11"
               >
                  * An express fee of ₹499 will be applied to your total.
               </motion.p>
            )}
         </div>
      </div>

      <div className="space-y-4">
         <Link href={`/booking?tailor=${profile.id}`} className="w-full">
            <Button className="w-full h-16 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-black/5">
               Book Appointment
            </Button>
         </Link>
         <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all">
               <MessageSquare className="w-4 h-4" />
               <span>Chat</span>
            </Button>
            <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all">
               <PhoneCall className="w-4 h-4" />
               <span>Call</span>
            </Button>
         </div>
      </div>

      <div className="pt-6 border-t border-border/50 space-y-4">
         <div className="flex items-center justify-between text-muted-foreground">
            <div className="flex items-center gap-2">
               <ShieldCheck className="w-4 h-4 text-green-500" />
               <span className="text-xs font-bold">100% Secure Booking</span>
            </div>
            <Info className="w-4 h-4 cursor-pointer hover:text-gold" />
         </div>
         <p className="text-[9px] text-center text-muted-foreground font-medium uppercase tracking-[0.1em]">
            No payment required today. Pay at the studio after trials.
         </p>
      </div>
    </Card>
  );
};

import { Badge } from "@/components/ui/badge";
