"use client";

import React from "react";
import { motion } from "framer-motion";
import { DesignHero } from "@/components/designs/DesignHero";
import { DesignFilters } from "@/components/designs/DesignFilters";
import { MasonryGallery } from "@/components/designs/MasonryGallery";
import { TrendingCarousel } from "@/components/designs/TrendingCarousel";
import { DesignCollections } from "@/components/designs/DesignCollections";
import { designs, collections } from "@/data/design-gallery";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  LayoutGrid, 
  Plus, 
  History,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function DesignGalleryPage() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <DesignHero />

      <div className="max-w-[1600px] mx-auto px-8">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Left Sidebar: Filters */}
            <aside className="xl:col-span-3">
               <div className="sticky top-28">
                  <DesignFilters />
               </div>
            </aside>

            {/* Right Content: Gallery & Trends */}
            <main className="xl:col-span-9 space-y-16">
               
               {/* Gallery Controls */}
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <LayoutGrid className="w-5 h-5 text-gold" />
                     </div>
                     <div className="space-y-0.5">
                        <h2 className="text-2xl font-black tracking-tight">Design Discovery</h2>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Showing 50,000+ Inspirations</p>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest gap-2 hover:bg-gold/5 hover:text-gold transition-all">
                        Most Recent
                     </Button>
                     <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest gap-2 hover:bg-gold/5 hover:text-gold transition-all">
                        Popularity
                     </Button>
                     <div className="h-6 w-px bg-border/50 mx-2" />
                     <Button className="h-12 px-6 rounded-xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground text-[10px] font-black uppercase tracking-widest shadow-xl">
                        <Plus className="w-4 h-4 mr-2" /> Upload Reference
                     </Button>
                  </div>
               </div>

               {/* Masonry Grid */}
               <MasonryGallery designs={designs} />

               {/* Middle Break: Trending Carousel */}
               <TrendingCarousel designs={designs} />

               {/* Curated Collections */}
               <DesignCollections collections={collections} />

               {/* AI Stylist CTA */}
               <div className="relative p-12 rounded-[3.5rem] bg-foreground text-background overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="space-y-6 max-w-xl">
                        <div className="flex items-center gap-3">
                           <Sparkles className="w-6 h-6 text-gold" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-gold">StitchAI Design Assistant</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Can't find what you're <br /> looking for?</h2>
                        <p className="text-background/60 font-medium text-lg leading-relaxed">
                           Our AI design assistant can generate custom style recommendations based on your body measurements and preferences.
                        </p>
                        <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-white hover:text-black text-sm font-black uppercase tracking-widest transition-all">
                           Start AI Style Chat <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                     </div>
                     <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gold/10 rounded-full animate-ping" />
                        <div className="absolute inset-4 border-2 border-dashed border-gold/40 rounded-full animate-spin-slow" />
                        <div className="absolute inset-12 bg-gold flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                           <Sparkles className="w-16 h-16 text-gold-foreground" />
                        </div>
                     </div>
                  </div>
               </div>

            </main>
         </div>
      </div>
    </div>
  );
}
