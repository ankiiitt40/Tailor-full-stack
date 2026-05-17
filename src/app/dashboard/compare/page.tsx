"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  Filter, 
  Plus, 
  History,
  LayoutGrid,
  Settings2
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComparisonHero } from "@/components/comparison/ComparisonHero";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { ComparisonCharts } from "@/components/comparison/ComparisonCharts";
import { AIRecommendations } from "@/components/comparison/AIRecommendations";
import { ComparisonSidebar } from "@/components/comparison/ComparisonSidebar";
import { comparisonTailors } from "@/data/comparison-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ComparisonPage() {
  const [selectedTailors, setSelectedTailors] = useState(comparisonTailors);

  return (
    <div className="min-h-screen bg-background pb-20">
      <ComparisonHero />

      <div className="max-w-[1600px] mx-auto px-8">
         {/* Filter & Search Bar */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50">
            <div className="flex items-center gap-6 flex-1 w-full">
               <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <Input 
                    placeholder="Search tailors to add to comparison..." 
                    className="h-14 rounded-2xl bg-muted/30 border-none pl-12 focus-visible:ring-gold/30 font-medium"
                  />
               </div>
               <Button variant="outline" className="h-14 px-6 rounded-2xl border-border/50 font-bold gap-2 hover:bg-gold/5 hover:text-gold">
                  <Filter className="w-4 h-4" /> Filters
               </Button>
            </div>
            
            <div className="flex items-center gap-3">
               <div className="flex -space-x-3 mr-4">
                  {selectedTailors.map((t, i) => (
                    <div key={t.id} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden ring-2 ring-gold/20">
                       <img src={t.image} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <button className="w-10 h-10 rounded-full bg-gold/10 border-2 border-dashed border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-gold-foreground transition-all">
                     <Plus className="w-4 h-4" />
                  </button>
               </div>
               <Badge className="bg-gold/10 text-gold border-none font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full">
                  {selectedTailors.length}/4 Slots Filled
               </Badge>
            </div>
         </div>

         {/* Main Content Layout */}
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            
            {/* Left: Table & Charts */}
            <div className="xl:col-span-8 space-y-12">
               <ComparisonTable tailors={selectedTailors} />
               
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <h2 className="text-3xl font-black tracking-tight">Advanced Analytics</h2>
                     <Button variant="ghost" className="text-gold font-bold text-xs uppercase tracking-widest gap-2">
                        View Custom Metrics <ChevronRight className="w-4 h-4" />
                     </Button>
                  </div>
                  <ComparisonCharts tailors={selectedTailors} />
               </div>

               <AIRecommendations tailors={selectedTailors} />

               {/* Quality Comparison Preview */}
               <section className="space-y-8 py-12 border-t border-border/50">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-black tracking-tight">Craftsmanship Showcase</h2>
                     <p className="text-muted-foreground font-medium">Side-by-side view of recent masterpieces from each tailor</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {selectedTailors.slice(0, 2).map((t, i) => (
                       <div key={t.id} className="space-y-4 group">
                          <div className="flex justify-between items-center px-4">
                             <h4 className="text-sm font-black tracking-widest uppercase">{t.shopName}</h4>
                             <Badge variant="outline" className="text-[8px] border-gold/30 text-gold uppercase tracking-widest">
                                {i === 0 ? "Premium Finish" : "Standard Finish"}
                             </Badge>
                          </div>
                          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-border/50 group-hover:border-gold/20 transition-all">
                             <img 
                               src={i === 0 ? "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800" : "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=800"} 
                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                             <div className="absolute bottom-6 left-8">
                                <p className="text-white text-lg font-bold tracking-tight">Luxury {i === 0 ? "Sherwani" : "Business Suit"}</p>
                                <p className="text-white/60 text-xs font-medium">Verified Customer Order • 2024</p>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </section>
            </div>

            {/* Right: Sticky Summary */}
            <div className="xl:col-span-4 relative">
               <ComparisonSidebar tailors={selectedTailors} />
            </div>
         </div>
      </div>

      {/* History / Recent Comparisons */}
      <div className="max-w-[1600px] mx-auto px-8 mt-24">
         <div className="p-12 rounded-[3.5rem] bg-foreground/5 border border-border/50 space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />
            
            <div className="flex items-center justify-between relative z-10">
               <div className="space-y-2">
                  <div className="flex items-center gap-3">
                     <History className="w-5 h-5 text-gold" />
                     <h2 className="text-3xl font-black tracking-tight">Recently Compared</h2>
                  </div>
                  <p className="text-muted-foreground font-medium">Continue your previous research sessions</p>
               </div>
               <Button variant="outline" className="rounded-xl h-12 border-border/50 font-bold px-6 hover:bg-gold/5 hover:text-gold">
                  Clear All History
               </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
               {[1, 2, 3].map((item) => (
                 <div key={item} className="p-6 rounded-[2rem] bg-card border border-border/50 hover:border-gold/20 transition-all cursor-pointer group">
                    <div className="flex -space-x-2 mb-4">
                       {[1, 2].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                             <img src={`https://images.unsplash.com/photo-159463331268${i}-425c7b97ccd1?q=80&w=100`} className="w-full h-full object-cover" />
                          </div>
                       ))}
                       <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-[10px] font-black border-2 border-card">
                          +2
                       </div>
                    </div>
                    <div className="space-y-1">
                       <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Wedding Wear Group</p>
                       <p className="text-sm font-bold text-foreground">Compared 2 days ago</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                       <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">View Results</span>
                       <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
               ))}
               <button className="p-6 rounded-[2rem] border-2 border-dashed border-border/50 flex flex-col items-center justify-center gap-4 text-muted-foreground hover:border-gold hover:text-gold hover:bg-gold/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                     <Plus className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">New Comparison</span>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
