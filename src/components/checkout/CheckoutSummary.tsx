"use client";

import React from "react";
import { 
  ShoppingBag, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Info
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CheckoutSummaryProps {
  amount: number;
  discount: number;
  tax: number;
}

export const CheckoutSummary = ({ amount, discount, tax }: CheckoutSummaryProps) => {
  const total = amount - discount + tax;

  return (
    <div className="sticky top-28 space-y-6">
       <div className="p-10 glass-card border-gold/20 rounded-[3.5rem] shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-3xl rounded-full -mr-24 -mt-24" />
          
          <div className="space-y-2">
             <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h3 className="text-2xl font-black tracking-tight">Order Summary</h3>
             </div>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Confirm your tailoring details</p>
          </div>

          {/* Selected Item Preview */}
          <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold/20">
                   <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                   <h4 className="text-lg font-black tracking-tight leading-tight">Royal Emerald Sherwani</h4>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">by Royal Stitch House</p>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                   <Clock className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Est: 15 June</span>
                </div>
                <div className="flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Home Fitting</span>
                </div>
             </div>
          </div>

          {/* Pricing Grid */}
          <div className="space-y-4">
             <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold">₹{amount}</span>
             </div>
             <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-muted-foreground">Processing Fee</span>
                <span className="text-green-500 font-bold">FREE</span>
             </div>
             <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-muted-foreground">Tax (GST 18%)</span>
                <span className="font-bold">₹{tax}</span>
             </div>
             {discount > 0 && (
               <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-gold font-bold">- ₹{discount}</span>
               </div>
             )}
             
             <Separator className="bg-border/50" />
             
             <div className="flex justify-between items-end pt-2">
                <div>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Grand Total</p>
                   <p className="text-4xl font-black tracking-tighter">₹{total}</p>
                </div>
                <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black uppercase px-3 py-1 mb-1">
                   100% SECURE
                </Badge>
             </div>
          </div>

          <div className="p-4 rounded-2xl bg-gold/5 border border-gold/20 flex items-start gap-3">
             <Info className="w-4 h-4 text-gold mt-0.5 shrink-0" />
             <p className="text-[10px] font-bold text-muted-foreground leading-relaxed">
                By completing this payment, you agree to our <span className="text-gold">Tailoring Service Agreement</span> and Fitting Satisfaction Guarantee.
             </p>
          </div>

          <div className="flex items-center justify-center gap-2 opacity-60">
             <ShieldCheck className="w-5 h-5 text-gold" />
             <span className="text-[10px] font-black uppercase tracking-widest">SSL Encrypted Checkout</span>
          </div>
       </div>
    </div>
  );
};
