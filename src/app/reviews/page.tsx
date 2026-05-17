"use client";

import React, { useState } from "react";
import { 
  Star, 
  Search, 
  Filter, 
  Plus, 
  TrendingUp, 
  Award, 
  Sparkles,
  ChevronDown,
  LayoutGrid,
  Zap,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { ReviewAnalytics } from "@/components/reviews/ReviewAnalytics";
import { ReviewFeed } from "@/components/reviews/ReviewFeed";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Trusted Fashion Community
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">100% Verified Reviews</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Fashion <br />
                     <span className="text-gold">Experiences</span> <span className="inline-block animate-bounce">✨</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Discover authentic stories from our global fashion community. Real people, real fittings, real style.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                        <Plus className="w-5 h-5 mr-2" /> Write a Review
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        Upload Outfit Photos
                     </Button>
                  </div>
               </div>

               {/* Quick Insights Cards */}
               <div className="grid grid-cols-2 gap-4 w-full lg:w-[450px]">
                  {[
                    { label: "Elite Members", value: "12k+", icon: Award },
                    { label: "Design Tips", value: "2.4k", icon: Zap },
                  ].map((stat) => (
                    <div key={stat.label} className="p-8 rounded-[3.5rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-xl space-y-4 text-center group cursor-pointer hover:border-gold/30 transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <stat.icon className="w-6 h-6 text-gold" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12 space-y-20">
         {/* Analytics Section */}
         <ReviewAnalytics />

         {/* Filter & Feed Section */}
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 border-t border-border/50 pt-20">
            {/* Sidebar: Advanced Filters */}
            <aside className="xl:col-span-3 space-y-12">
               <div className="space-y-6">
                  <h3 className="text-xl font-black tracking-tight">Advanced Filters</h3>
                  <div className="space-y-4">
                     <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                        <Input 
                          placeholder="Search reviews..." 
                          className="h-12 bg-muted/30 border-none rounded-xl pl-12 font-medium focus-visible:ring-gold/30"
                        />
                     </div>
                     <Button variant="outline" className="w-full h-12 rounded-xl border-border/50 justify-between px-6 font-bold group">
                        Most Recent <ChevronDown className="w-4 h-4 group-hover:text-gold transition-colors" />
                     </Button>
                  </div>
               </div>

               <div className="space-y-6">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Rating Tier</p>
                  <div className="space-y-3">
                     {[5, 4, 3, 2, 1].map((stars) => (
                       <button key={stars} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gold/5 border border-transparent hover:border-gold/20 transition-all group">
                          <div className="flex gap-1">
                             {[...Array(stars)].map((_, i) => (
                               <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                             ))}
                             {[...Array(5 - stars)].map((_, i) => (
                               <Star key={i} className="w-3.5 h-3.5 text-muted-foreground/30" />
                             ))}
                          </div>
                          <span className="text-xs font-black text-muted-foreground group-hover:text-gold">45%</span>
                       </button>
                     ))}
                  </div>
               </div>

               <div className="p-8 rounded-[3rem] bg-foreground text-background relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/20 blur-2xl rounded-full" />
                  <div className="space-y-4 relative z-10">
                     <Sparkles className="w-6 h-6 text-gold" />
                     <h4 className="text-lg font-black tracking-tight leading-tight">Become a Fashion Influencer</h4>
                     <p className="text-xs font-bold opacity-60 leading-relaxed">Share 10 photo reviews to unlock Elite rewards and free consultations.</p>
                     <Button variant="link" className="p-0 h-auto text-gold text-[10px] font-black uppercase tracking-widest">
                        Learn More <TrendingUp className="w-3 h-3 ml-1" />
                     </Button>
                  </div>
               </div>
            </aside>

            {/* Main Feed */}
            <main className="xl:col-span-9 space-y-12">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <h2 className="text-3xl font-black tracking-tight">Review Feed</h2>
                     <Badge className="bg-gold/10 text-gold border-none">128 TOTAL</Badge>
                  </div>
                  <div className="flex gap-2">
                     <Button variant="ghost" size="icon" className="rounded-xl bg-gold text-gold-foreground"><LayoutGrid className="w-5 h-5" /></Button>
                     <Button variant="ghost" size="icon" className="rounded-xl border border-border/50"><Filter className="w-5 h-5" /></Button>
                  </div>
               </div>

               <ReviewFeed />

               <div className="flex justify-center py-12">
                  <Button variant="outline" className="h-16 px-12 rounded-[2rem] border-border/50 font-black text-[10px] uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                     Load More Reviews
                  </Button>
               </div>
            </main>
         </div>
      </div>
    </div>
  );
}
