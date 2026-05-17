"use client";

import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShoppingBag, 
  Download, 
  Share2,
  Sparkles,
  Award,
  ShieldCheck,
  Calendar,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CheckoutSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="container max-w-4xl relative z-10">
         <div className="flex flex-col items-center text-center space-y-10">
            
            {/* Success Icon */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative"
            >
               <div className="w-40 h-40 rounded-[3rem] bg-gold flex items-center justify-center shadow-[0_0_100px_rgba(212,175,55,0.3)]">
                  <CheckCircle2 className="w-20 h-20 text-gold-foreground" />
               </div>
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute -inset-4 border-2 border-dashed border-gold/40 rounded-[3.5rem]"
               />
               <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-gold animate-bounce" />
            </motion.div>

            <div className="space-y-4">
               <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  Stitching Confirmed! <br />
                  <span className="text-gold">Payment Successful</span>
               </h1>
               <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                  Your order <span className="text-foreground font-bold">#BK-8821</span> has been placed. Our master tailor is ready to bring your vision to life.
               </p>
            </div>

            {/* Order Quick Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
               {[
                 { label: "Delivery Est.", value: "June 15, 2024", icon: Calendar },
                 { label: "Payment ID", value: "TXN-99821", icon: ShieldCheck },
                 { label: "Points Earned", value: "850 Elite", icon: Award },
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 + (i * 0.1) }}
                   className="p-6 rounded-[2.5rem] bg-card border border-border/50 space-y-2"
                 >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-2">
                       <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-black tracking-tight">{item.value}</p>
                 </motion.div>
               ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl pt-8">
               <Button 
                 onClick={() => router.push("/dashboard/orders")}
                 className="flex-1 h-16 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all group"
               >
                  Track Your Booking <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
               <Button 
                 variant="outline"
                 className="flex-1 h-16 rounded-2xl border-border/50 font-black text-[10px] uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all"
               >
                  <Download className="w-4 h-4 mr-2" /> Download Invoice
               </Button>
            </div>

            <Button 
              variant="link" 
              onClick={() => router.push("/dashboard")}
              className="text-muted-foreground font-bold text-xs uppercase tracking-widest hover:text-gold"
            >
               Return to Dashboard
            </Button>
         </div>
      </div>
    </div>
  );
}
