"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  ShieldCheck, 
  Zap,
  Ticket,
  Check,
  ChevronRight,
  Plus,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      router.push("/checkout/success");
    }, 3000);
  };

  const paymentMethods = [
    { id: "upi", name: "UPI Transfer", icon: Smartphone, description: "GPay, PhonePe, Paytm" },
    { id: "card", name: "Credit / Debit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" },
    { id: "cod", name: "Pay on Delivery", icon: Banknote, description: "Cash or UPI on delivery" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Checkout Hero */}
      <div className="relative pt-12 pb-16 overflow-hidden border-b border-border/50">
         <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="space-y-6 max-w-2xl">
               <div className="flex items-center gap-3">
                  <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                     Secure Checkout
                  </Badge>
                  <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                     <ShieldCheck className="w-3 h-3 text-gold" />
                     <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">PCI DSS Compliant</span>
                  </div>
               </div>
               <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                  Secure Your Perfect <br />
                  <span className="text-gold">Stitching Experience</span> <span className="inline-block animate-bounce">✨</span>
               </h1>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Left: Payment Details */}
            <div className="xl:col-span-8 space-y-12">
               
               {/* Billing Section */}
               <div className="space-y-8">
                  <div className="space-y-1">
                     <h3 className="text-2xl font-black tracking-tight">Billing Information</h3>
                     <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Verify your contact details for the invoice</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 rounded-[3rem] bg-card/40 backdrop-blur-3xl border border-border/50">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-2">Full Name</label>
                        <Input defaultValue="Aryan Verma" className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-2">Email Address</label>
                        <Input defaultValue="aryan@stitchconnect.com" className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-2">Delivery Address</label>
                        <Input defaultValue="B-24, Emerald heights, New Delhi - 110001" className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                  </div>
               </div>

               {/* Payment Methods */}
               <div className="space-y-8">
                  <div className="space-y-1">
                     <h3 className="text-2xl font-black tracking-tight">Payment Method</h3>
                     <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Select your preferred secure payment gateway</p>
                  </div>
                  
                  <div className="space-y-4">
                     {paymentMethods.map((pm) => {
                       const isSelected = paymentMethod === pm.id;
                       return (
                         <button
                           key={pm.id}
                           onClick={() => setPaymentMethod(pm.id)}
                           className={cn(
                             "w-full flex items-center justify-between p-6 rounded-[2.5rem] border-2 transition-all group relative overflow-hidden",
                             isSelected ? "bg-gold/5 border-gold shadow-xl" : "bg-card border-border/50 hover:border-gold/30"
                           )}
                         >
                            <div className="flex items-center gap-6 relative z-10">
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

               {/* Coupon Section */}
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <Ticket className="w-5 h-5 text-gold" />
                     <h3 className="text-xl font-black tracking-tight">Apply Promo Code</h3>
                  </div>
                  <div className="flex gap-4">
                     <Input 
                       placeholder="Enter Coupon Code" 
                       value={coupon}
                       onChange={(e) => setCoupon(e.target.value)}
                       className="h-14 bg-card/50 border-border/50 rounded-2xl px-6 font-bold uppercase tracking-widest focus-visible:ring-gold/30"
                     />
                     <Button 
                       onClick={() => setIsCouponApplied(true)}
                       className="h-14 px-10 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all"
                     >
                        Apply Code
                     </Button>
                  </div>
               </div>
            </div>

            {/* Right: Summary Sidebar */}
            <div className="xl:col-span-4">
               <CheckoutSummary 
                 amount={8500} 
                 discount={isCouponApplied ? 500 : 0} 
                 tax={1530} 
               />
               
               <div className="mt-8">
                  <Button 
                    onClick={handlePay}
                    disabled={isProcessing}
                    className="w-full h-20 rounded-[2.5rem] bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all relative overflow-hidden"
                  >
                     {isProcessing ? (
                        <div className="flex items-center gap-3">
                           <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                           Securing Transaction...
                        </div>
                     ) : (
                        <div className="flex items-center gap-3">
                           Pay Now & Confirm <ArrowRight className="w-6 h-6" />
                        </div>
                     )}
                  </Button>
               </div>
            </div>
         </div>
      </div>

      {/* Payment Processing Overlay */}
      <AnimatePresence>
         {isProcessing && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-2xl flex flex-col items-center justify-center p-8 text-center"
           >
              <div className="relative w-48 h-48 mb-12">
                 <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping" />
                 <div className="absolute inset-4 border-4 border-dashed border-gold/40 rounded-full animate-spin-slow" />
                 <div className="absolute inset-10 bg-gold flex items-center justify-center rounded-full shadow-[0_0_80px_rgba(212,175,55,0.4)]">
                    <ShieldCheck className="w-16 h-16 text-gold-foreground" />
                 </div>
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-4">Verifying Your Transaction</h2>
              <p className="text-xl text-muted-foreground font-medium max-w-md mx-auto">
                 We're securing your stitching experience through our encrypted fashion-tech gateway.
              </p>
              <div className="mt-12 flex gap-3">
                 {[1, 2, 3].map(i => (
                   <motion.div 
                     key={i}
                     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                     className="w-3 h-3 bg-gold rounded-full"
                   />
                 ))}
              </div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
