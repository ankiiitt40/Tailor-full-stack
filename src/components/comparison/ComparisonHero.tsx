"use client";

import React from "react";
import { 
  ArrowUpDown, 
  Sparkles, 
  BarChart3, 
  ShieldCheck, 
  Plus, 
  Zap,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ComparisonHero = () => {
  return (
    <div className="relative overflow-hidden pt-12 pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex items-center gap-3"
               >
                  <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                     Smart Decision Engine
                  </Badge>
                  <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                     <Zap className="w-3 h-3 text-gold" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Powered by StitchAI</span>
                  </div>
               </motion.div>

               <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]"
                  >
                     Compare Tailors <br />
                     <span className="text-gold">Smartly</span> <span className="inline-block animate-bounce">✨</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed"
                  >
                     Find your perfect match by comparing pricing, delivery speed, ratings, and artisanal quality across our elite network.
                  </motion.p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap gap-4 pt-4"
               >
                  <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                     <Plus className="w-5 h-5 mr-2" /> Add Tailor to List
                  </Button>
                  <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                     How it Works
                  </Button>
               </motion.div>
            </div>

            {/* Floating Analytics Cards */}
            <div className="relative w-full lg:w-[450px] h-[350px]">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, x: 20 }}
                 animate={{ opacity: 1, scale: 1, x: 0 }}
                 transition={{ delay: 0.4 }}
                 className="absolute top-0 right-0 w-64 bg-card/80 backdrop-blur-3xl border border-gold/20 p-6 rounded-[2.5rem] shadow-2xl z-20"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-gold" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Savings Found</p>
                        <p className="text-xl font-bold">₹2,450</p>
                     </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "75%" }}
                       transition={{ duration: 1, delay: 1 }}
                       className="h-full bg-gold" 
                     />
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, x: -20, y: 40 }}
                 animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="absolute bottom-0 left-0 w-72 bg-card/80 backdrop-blur-3xl border border-border/50 p-6 rounded-[2.5rem] shadow-2xl z-10"
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Market Insights</p>
                        <p className="text-xl font-bold">Top Value</p>
                     </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Royal Stitch House offers the best bridal expertise in Bhopal.</p>
               </motion.div>

               {/* Decorative Element */}
               <div className="absolute inset-0 bg-gold/5 rounded-[3rem] border border-gold/10 -rotate-6 scale-95" />
            </div>
         </div>
      </div>
    </div>
  );
};
