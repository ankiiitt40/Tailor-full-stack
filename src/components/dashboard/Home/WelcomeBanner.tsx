"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";

export const WelcomeBanner = () => {
  const { user } = useAuth();

  return (
    <div className="relative rounded-[2.5rem] bg-foreground text-background p-10 md:p-14 overflow-hidden mb-12 shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/10 skew-x-12 translate-x-24 -z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-gold/20 rounded-full blur-[100px] -z-0" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">StitchConnect Premium</span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Welcome Back, <span className="text-gold">{user?.fullName?.split(" ")[0] || "Aryan"} 👋</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Discover the best master tailors in Hauz Khas and book your custom fit today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl h-12 px-8 font-bold flex gap-2">
              <Search className="w-4 h-4" /> Explore Tailors
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-xl h-12 px-8 font-bold flex gap-2">
              <Palette className="w-4 h-4" /> Upload Design
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end">
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative"
           >
              <div className="w-[320px] h-[200px] glass-card rounded-3xl border-white/20 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-2xl">
                 <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                       <Star className="w-6 h-6 text-gold fill-gold" />
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] uppercase font-bold text-white/50">Your Rank</p>
                       <p className="text-xl font-bold text-white">#12 in Delhi</p>
                    </div>
                 </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-white/80">
                       <span>Loyalty Points</span>
                       <span>2,450 / 3,000</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "80%" }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="h-full bg-gold"
                       />
                    </div>
                 </div>
              </div>
              
              {/* Decorative floating circle */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg border-4 border-foreground">
                 <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};
