"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ShoppingBag, Palette, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TailorWelcome = () => {
  return (
    <div className="relative rounded-[3rem] bg-foreground text-background p-10 md:p-12 overflow-hidden mb-12 shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-12 translate-x-32" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-gold/20 rounded-full blur-[100px]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Premium Partner Studio</span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Welcome back, <span className="text-gold">Royal Stitch House ✨</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              You have <span className="text-white font-bold">12 pending</span> orders for delivery this week. Let's get stitching!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl h-12 px-8 font-bold flex gap-2">
              <Plus className="w-4 h-4" /> Add New Design
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-12 px-8 font-bold flex gap-2">
              <ShoppingBag className="w-4 h-4" /> View Orders
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative"
           >
              <div className="w-[340px] h-[220px] glass-card rounded-3xl border-white/20 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-3xl">
                 <div className="flex justify-between items-start">
                    <div className="p-3 bg-green-500/20 rounded-2xl">
                       <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Earnings this month</p>
                       <p className="text-3xl font-bold text-white">₹85,420</p>
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold text-white/80 uppercase tracking-widest">
                       <span>Monthly Goal</span>
                       <span>₹1,00,000</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "85.4%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                       />
                    </div>
                 </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-foreground transform rotate-12">
                 <span className="text-[10px] font-bold text-gold-foreground uppercase">Top</span>
                 <span className="text-xs font-bold text-gold-foreground">1%</span>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};
