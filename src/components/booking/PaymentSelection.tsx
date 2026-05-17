"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Smartphone, 
  Wallet, 
  Banknote,
  ShieldCheck,
  Zap,
  Ticket,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PaymentSelectionProps {
  method: string;
  onSelect: (method: string) => void;
}

export const PaymentSelection = ({ method, onSelect }: PaymentSelectionProps) => {
  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const paymentMethods = [
    { id: "upi", name: "UPI Transfer", icon: Smartphone, description: "Pay via Google Pay, PhonePe or Paytm" },
    { id: "card", name: "Credit / Debit Card", icon: CreditCard, description: "All major cards accepted" },
    { id: "cod", name: "Pay After Stitching", icon: Banknote, description: "Cash or UPI on delivery" },
    { id: "wallet", name: "StitchWallet", icon: Wallet, description: "Instant 5% Cashback" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-10">
         <div className="space-y-1">
            <h3 className="text-2xl font-black tracking-tight">Payment Method</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Choose how you'd like to pay for your order</p>
         </div>

         <div className="space-y-4">
            {paymentMethods.map((pm) => {
              const isSelected = method === pm.id;
              return (
                <button
                  key={pm.id}
                  onClick={() => onSelect(pm.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 rounded-[2.5rem] border-2 transition-all group relative overflow-hidden",
                    isSelected ? "bg-gold/5 border-gold shadow-xl" : "bg-card border-border/50 hover:border-gold/30"
                  )}
                >
                   {isSelected && <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 blur-3xl rounded-full -mr-12 -mt-12" />}
                   
                   <div className="flex items-center gap-5 relative z-10">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all",
                        isSelected ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground group-hover:bg-gold/10"
                      )}>
                         <pm.icon className="w-7 h-7" />
                      </div>
                      <div className="text-left space-y-1">
                         <h4 className="text-lg font-black tracking-tight">{pm.name}</h4>
                         <p className="text-xs text-muted-foreground font-medium">{pm.description}</p>
                      </div>
                   </div>

                   <div className={cn(
                     "w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center relative z-10",
                     isSelected ? "border-gold bg-gold text-gold-foreground" : "border-border/50"
                   )}>
                      {isSelected && <Check className="w-4 h-4" />}
                   </div>
                </button>
              );
            })}
         </div>
      </div>

      <div className="space-y-12">
         {/* Coupons & Offers */}
         <div className="space-y-6">
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">Apply Promo Code</h3>
               <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Unlock exclusive discounts on your booking</p>
            </div>

            <div className="flex gap-3">
               <div className="relative flex-1 group">
                  <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <Input 
                    placeholder="Enter Coupon Code" 
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-bold uppercase tracking-widest focus-visible:ring-gold/30"
                  />
               </div>
               <Button 
                 onClick={() => setIsCouponApplied(true)}
                 className={cn(
                   "h-14 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all",
                   isCouponApplied ? "bg-green-500 text-white" : "bg-gold text-gold-foreground hover:bg-gold/90"
                 )}
               >
                  {isCouponApplied ? <Check className="w-5 h-5" /> : "Apply"}
               </Button>
            </div>

            {isCouponApplied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-between"
              >
                 <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-bold text-green-500 uppercase tracking-widest">SAVEMORE applied!</span>
                 </div>
                 <span className="text-xs font-black text-green-500">- ₹250</span>
              </motion.div>
            )}
         </div>

         {/* Trust Factors */}
         <div className="p-8 rounded-[3.5rem] bg-foreground/5 border border-border/50 space-y-6">
            <div className="flex items-center gap-3">
               <ShieldCheck className="w-6 h-6 text-gold" />
               <h4 className="text-sm font-black uppercase tracking-widest">Secure Consultation</h4>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
               Your payment is processed through encrypted channels. StitchConnect guarantees a 100% refund if the fitting doesn't meet your satisfaction after two alterations.
            </p>
            <div className="flex gap-4 grayscale opacity-40">
               <div className="h-6 w-10 bg-muted rounded" />
               <div className="h-6 w-10 bg-muted rounded" />
               <div className="h-6 w-10 bg-muted rounded" />
            </div>
         </div>
      </div>
    </div>
  );
};
