"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Search, 
  Filter, 
  Plus, 
  TrendingUp, 
  Award, 
  Zap,
  LayoutGrid,
  ShieldCheck,
  Brain,
  Layers,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { aiRecommendations, trendingStyles } from "@/data/ai-data";
import { AIMatchCard } from "@/components/ai/AIMatchCard";
import { StyleRadar } from "@/components/matching/StyleRadar";
import { TrendPredictionCard } from "@/components/trends/TrendPredictionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AIRecommendationsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Futuristic AI Hero */}
      <div className="relative pt-20 pb-24 overflow-hidden border-b border-border/50">
         {/* AI Particles Background Mock */}
         <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 blur-[200px] rounded-full animate-pulse" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         </div>

         <div className="container mx-auto px-8 relative z-10 text-center">
            <div className="flex flex-col items-center space-y-10">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="p-5 rounded-[2.5rem] bg-foreground/5 backdrop-blur-3xl border border-gold/30 shadow-[0_0_100px_rgba(212,175,55,0.1)] inline-flex flex-col items-center gap-4"
               >
                  <Brain className="w-16 h-16 text-gold animate-bounce" />
                  <div className="space-y-1">
                     <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Neural Fashion engine 2.0</p>
                     <div className="flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Active & Learning</span>
                     </div>
                  </div>
               </motion.div>

               <div className="space-y-6 max-w-4xl">
                  <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
                     AI Fashion <br />
                     <span className="text-gold">Intelligence</span> <span className="inline-block animate-pulse">✨</span>
                  </h1>
                  <p className="text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                     Our neural engine analyzes your style DNA to recommend perfect tailors, trending designs, and smart pricing.
                  </p>
               </div>

               <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                  <Button className="h-20 px-12 rounded-[2.5rem] bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all group">
                     Explore Smart Matches <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="h-20 px-12 rounded-[2.5rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                     Update Style Profile
                  </Button>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-20">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Left: Recommendations Feed */}
            <main className="xl:col-span-8 space-y-16">
               <div className="space-y-10">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <h2 className="text-4xl font-black tracking-tight">Smart Matches</h2>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">98% accurate based on your history</p>
                     </div>
                     <Badge className="bg-gold/10 text-gold border-none text-[10px] font-black tracking-widest px-4 py-2 rounded-full">
                        RECOMMENDED FOR YOU
                     </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {aiRecommendations.map((rec, i) => (
                       <AIMatchCard key={rec.id} rec={rec} delay={i * 0.1} />
                     ))}
                  </div>
               </div>

               {/* Trending Section */}
               <div className="space-y-10 pt-16 border-t border-border/50">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <h2 className="text-4xl font-black tracking-tight">Style Forecast</h2>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">What's trending in your fashion circle</p>
                     </div>
                     <TrendingUp className="w-8 h-8 text-gold" />
                  </div>

                  <div className="space-y-8">
                     {trendingStyles.map((trend, i) => (
                       <TrendPredictionCard key={trend.id} trend={trend} delay={i * 0.1} />
                     ))}
                  </div>
               </div>
            </main>

            {/* Right: AI Insights Sidebar */}
            <aside className="xl:col-span-4 space-y-12">
               {/* Style DNA Radar */}
               <StyleRadar />

               {/* Smart pricing card */}
               <div className="p-10 rounded-[4rem] bg-foreground text-background space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
                  <div className="flex items-center gap-4 relative z-10">
                     <div className="w-12 h-12 rounded-2xl bg-gold text-gold-foreground flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gold uppercase tracking-widest">Pricing Intelligence</p>
                        <h4 className="text-xl font-black tracking-tight">Save on Labor</h4>
                     </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed opacity-70 relative z-10">
                     Our AI detected that booking with <span className="font-black text-gold underline">Master Cut</span> on weekdays can save you up to ₹1,500 on Sherwani labor charges.
                  </p>
                  <Button className="w-full h-14 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                     View Saving Plan
                  </Button>
               </div>

               {/* AI Tip of the day */}
               <div className="p-10 rounded-[4rem] bg-gold text-gold-foreground space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-50" />
                  <div className="flex items-center gap-3 relative z-10">
                     <Award className="w-6 h-6" />
                     <h4 className="text-xl font-black tracking-tight leading-none">Style Achievement</h4>
                  </div>
                  <p className="text-sm font-bold leading-relaxed relative z-10">
                     "Your style consistency is in the top 2% of Delhi users. You've unlocked the <span className="underline">Ethnic Icon</span> badge."
                  </p>
                  <div className="flex gap-2 relative z-10">
                     <Badge className="bg-black/10 text-gold-foreground border-none">Share Profile</Badge>
                     <Badge className="bg-black/10 text-gold-foreground border-none">Claim Reward</Badge>
                  </div>
               </div>
            </aside>
         </div>
      </div>
    </div>
  );
}
