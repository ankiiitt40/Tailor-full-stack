"use client";

import React from "react";
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  Heart, 
  Plus, 
  Zap,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const DesignHero = () => {
  return (
    <div className="relative overflow-hidden pt-12 pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
         <div className="max-w-4xl space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
               <div className="flex items-center gap-3">
                  <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                     Inspiration Engine
                  </Badge>
                  <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                     <TrendingUp className="w-3 h-3 text-gold" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Bridal Season Trending</span>
                  </div>
               </div>

               <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-balance">
                     Discover Stunning <br />
                     <span className="text-gold">Tailoring Designs</span> <span className="inline-block animate-bounce">✨</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                     Browse 50,000+ premium stitching styles, bridal patterns, and ethnic collections from elite tailors across the country.
                  </p>
               </div>
            </motion.div>

            {/* Advanced Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative max-w-3xl"
            >
               <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-gold/10 blur-xl opacity-20 group-focus-within:opacity-40 transition-opacity" />
               <div className="relative flex items-center bg-card/80 backdrop-blur-3xl border border-border/50 rounded-[2.5rem] p-2 shadow-2xl overflow-hidden group">
                  <div className="flex items-center px-6 gap-4 flex-1">
                     <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />
                     <Input 
                       placeholder="Search bridal blouse, sherwani, luxury kurta..." 
                       className="bg-transparent border-none focus-visible:ring-0 text-lg font-medium h-14 p-0 placeholder:text-muted-foreground/60"
                     />
                  </div>
                  <Button className="h-14 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-xl">
                     Find Style
                  </Button>
               </div>

               {/* Trending Tags */}
               <div className="flex flex-wrap items-center gap-3 mt-6 px-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-2">Trending:</span>
                  {["Bridal Blouse", "Velvet Sherwani", "Organza Saree", "Fusion Kurta", "Slim-fit Suit"].map((tag) => (
                    <button key={tag} className="px-4 py-2 rounded-full bg-foreground/5 hover:bg-gold/10 hover:text-gold border border-border/50 text-[10px] font-bold uppercase tracking-widest transition-all">
                       {tag}
                    </button>
                  ))}
               </div>
            </motion.div>

            {/* Hero Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
               <Button className="h-16 px-10 rounded-[2rem] bg-foreground text-background hover:bg-gold hover:text-gold-foreground text-sm font-black uppercase tracking-widest shadow-2xl transition-all">
                  Explore Trends
               </Button>
               <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                  <Heart className="w-5 h-5 mr-2" /> My Moodboard
               </Button>
            </motion.div>
         </div>
      </div>
    </div>
  );
};
