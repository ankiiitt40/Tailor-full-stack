"use client";

import React from "react";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AppCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-foreground text-background p-12 md:p-24">
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-12 translate-x-24" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
                  Book Tailors <br />
                  <span className="text-gold">Anytime, Anywhere</span>
                </h2>
                <p className="text-white/60 text-lg max-w-md leading-relaxed">
                  Download the StitchConnect app to browse 500+ master tailors, 
                  track your orders in real-time, and get exclusive fashion tips.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-2xl h-16 px-8 flex gap-3">
                  <PlayCircle className="w-8 h-8 fill-black" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none">Get it on</p>
                    <p className="text-lg font-bold leading-tight">Google Play</p>
                  </div>
                </Button>
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-2xl h-16 px-8 flex gap-3">
                  <Apple className="w-8 h-8 fill-black" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none">Download on the</p>
                    <p className="text-lg font-bold leading-tight">App Store</p>
                  </div>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    <span className="text-sm text-white/80">Secure Payments</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gold" />
                    <span className="text-sm text-white/80">Fast Delivery</span>
                 </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Simplified Phone Mockup */}
                <div className="w-[300px] h-[600px] bg-background rounded-[3.5rem] border-[12px] border-zinc-800 shadow-2xl mx-auto overflow-hidden relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-800 rounded-b-2xl z-20" />
                   
                   {/* App Content Placeholder */}
                   <div className="p-6 pt-12 space-y-6">
                      <div className="flex justify-between items-center">
                         <div className="w-10 h-10 bg-gold rounded-xl" />
                         <div className="w-10 h-10 bg-muted rounded-full" />
                      </div>
                      <div className="space-y-2">
                         <div className="w-3/4 h-6 bg-muted rounded-lg" />
                         <div className="w-1/2 h-4 bg-muted/60 rounded-lg" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="aspect-[3/4] bg-muted rounded-2xl" />
                         <div className="aspect-[3/4] bg-muted rounded-2xl" />
                      </div>
                      <div className="w-full h-12 bg-gold rounded-xl" />
                   </div>
                </div>

                {/* Floating elements around phone */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/4 -right-10 bg-gold text-gold-foreground p-4 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">4.9 App Rating</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-1/4 -left-10 bg-white text-black p-4 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold">100+ Live Tailors</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
