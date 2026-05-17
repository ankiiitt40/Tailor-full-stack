"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Map as MapIcon, 
  List, 
  ChevronRight, 
  Star, 
  MapPin, 
  Clock, 
  IndianRupee,
  ShieldCheck,
  Heart,
  ExternalLink,
  Flame,
  LayoutGrid
} from "lucide-react";
import { LocationHeader } from "@/components/explore/LocationHeader";
import { FilterSidebar } from "@/components/explore/FilterSidebar";
import { nearbyTailors, trendingHotspots } from "@/data/location-discovery";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InteractiveMap } from "@/components/explore/InteractiveMap";
import { cn } from "@/lib/utils";

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [activeTailorId, setActiveTailorId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      {/* Search & Header Section */}
      <div className="bg-background border-b border-border/50 shrink-0">
        <LocationHeader />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Side: Discovery & List */}
        <div className={cn(
          "flex flex-col border-r border-border/50 transition-all duration-500 overflow-hidden",
          viewMode === "list" ? "w-full lg:w-[650px] xl:w-[750px]" : "w-0 lg:w-[450px]"
        )}>
          {/* View Toggle (Mobile) */}
          <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
             <Button 
               onClick={() => setViewMode(viewMode === "list" ? "map" : "list")}
               className="rounded-full h-14 px-8 bg-foreground text-background shadow-2xl shadow-black/20 font-bold gap-3"
             >
                {viewMode === "list" ? <MapIcon className="w-5 h-5" /> : <List className="w-5 h-5" />}
                {viewMode === "list" ? "Show Map" : "Show List"}
             </Button>
          </div>

          <div className="flex flex-1 overflow-hidden">
             {/* Sub-Sidebar for Filters (Desktop Only) */}
             <div className="hidden xl:block w-[300px] shrink-0 p-8 h-full">
                <FilterSidebar />
             </div>

             {/* Tailor List Section */}
             <ScrollArea className="flex-1">
                <div className="p-8 space-y-12">
                   {/* Hotspots Section */}
                   <section className="space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500 animate-bounce" />
                            <h2 className="text-xl font-bold">Trending Hotspots</h2>
                         </div>
                         <Button variant="ghost" className="text-xs font-bold text-gold uppercase tracking-widest">Explore All</Button>
                      </div>
                      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                         {trendingHotspots.map((spot) => (
                           <motion.div 
                             key={spot.id}
                             whileHover={{ y: -5 }}
                             className="relative min-w-[200px] h-[120px] rounded-3xl overflow-hidden group cursor-pointer"
                           >
                              <img src={spot.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              <div className="absolute bottom-4 left-4">
                                 <p className="text-white font-bold text-lg">{spot.name}</p>
                                 <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{spot.count}+ Studios</p>
                              </div>
                           </motion.div>
                         ))}
                      </div>
                   </section>

                   {/* Tailor Results */}
                   <section className="space-y-8">
                      <div className="flex items-center justify-between">
                         <h2 className="text-2xl font-bold tracking-tight">Nearby Studios <span className="text-muted-foreground ml-2 text-lg font-normal">({nearbyTailors.length})</span></h2>
                         <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-border/50">
                            <LayoutGrid className="w-4 h-4" />
                         </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                         {isLoading ? (
                            Array(6).fill(0).map((_, i) => <TailorCardSkeleton key={i} />)
                         ) : (
                            nearbyTailors.map((tailor) => (
                               <TailorCard 
                                 key={tailor.id} 
                                 tailor={tailor} 
                                 isActive={activeTailorId === tailor.id}
                                 onHover={() => setActiveTailorId(tailor.id)}
                                 onLeave={() => setActiveTailorId(null)}
                               />
                            ))
                         )}
                      </div>
                   </section>
                </div>
             </ScrollArea>
          </div>
        </div>

        {/* Right Side: Interactive Map */}
        <div className={cn(
          "flex-1 bg-muted relative transition-all duration-500",
          viewMode === "map" ? "fixed inset-0 z-[90] lg:relative lg:block" : "hidden lg:block"
        )}>
          <InteractiveMap 
            tailors={nearbyTailors} 
            activeTailorId={activeTailorId}
            onMarkerClick={(id) => {
               setActiveTailorId(id);
               // If mobile, maybe stay in map view but show preview
            }}
          />
        </div>
      </div>
    </div>
  );
}

const TailorCard = ({ tailor, isActive, onHover, onLeave }: { tailor: any, isActive: boolean, onHover: () => void, onLeave: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "group relative p-4 rounded-[2.5rem] bg-card border transition-all duration-500 cursor-pointer overflow-hidden",
        isActive ? "border-gold shadow-[0_0_40px_rgba(212,175,55,0.1)] ring-1 ring-gold" : "border-border/50 hover:border-gold/30"
      )}
    >
      {/* Premium Badge Overlay */}
      {tailor.isVerified && (
        <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gold/20 flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
           <ShieldCheck className="w-3.5 h-3.5 text-gold" />
           <span className="text-[9px] font-black uppercase tracking-widest text-gold">Elite Verified</span>
        </div>
      )}

      <div className="absolute top-6 right-6 z-10">
         <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-gold hover:text-gold-foreground transition-all">
            <Heart className="w-5 h-5" />
         </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden">
           <img 
             src={tailor.image} 
             alt={tailor.shopName} 
             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
           />
           <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex justify-between items-end">
                 <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">{tailor.category} Studio</p>
                    <h3 className="text-xl font-bold text-white tracking-tight">{tailor.shopName}</h3>
                 </div>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gold rounded-xl">
                    <Star className="w-3.5 h-3.5 fill-gold-foreground text-gold-foreground" />
                    <span className="text-sm font-bold text-gold-foreground">{tailor.rating}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="px-2 space-y-4">
           <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Distance</span>
                 </div>
                 <p className="font-bold text-sm">{tailor.distance} km</p>
              </div>
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Delivery</span>
                 </div>
                 <p className="font-bold text-sm">{tailor.deliveryTime}</p>
              </div>
              <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-1.5 text-muted-foreground">
                    <IndianRupee className="w-3.5 h-3.5 text-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Starts At</span>
                 </div>
                 <p className="font-bold text-sm text-gold">₹{tailor.startingPrice}</p>
              </div>
           </div>

           <div className="flex gap-2">
              <Button className="flex-1 bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-2xl h-12 font-bold text-[10px] uppercase tracking-widest transition-all">
                 View Studio
              </Button>
              <Button variant="outline" className="flex-1 rounded-2xl h-12 border-border/50 font-bold text-[10px] uppercase tracking-widest hover:border-gold/30 hover:text-gold transition-all">
                 Compare
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-border/50 hover:border-gold/30 hover:text-gold shrink-0">
                 <ExternalLink className="w-4 h-4" />
              </Button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const TailorCardSkeleton = () => (
  <Card className="p-4 rounded-[2.5rem] border-border/50 space-y-6">
     <div className="aspect-[4/3] rounded-[1.8rem] bg-muted animate-pulse" />
     <div className="space-y-4 px-2">
        <div className="h-6 w-2/3 bg-muted animate-pulse rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
           <div className="h-10 bg-muted animate-pulse rounded-xl" />
           <div className="h-10 bg-muted animate-pulse rounded-xl" />
           <div className="h-10 bg-muted animate-pulse rounded-xl" />
        </div>
     </div>
  </Card>
);

