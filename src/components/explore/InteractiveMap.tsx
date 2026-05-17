"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  Navigation, 
  Maximize2, 
  MapPin, 
  Star, 
  Clock, 
  IndianRupee,
  ShieldCheck,
  ChevronRight,
  Layers,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { USER_LOCATION } from "@/data/location-discovery";
import { TailorLocation } from "@/types/location";
import { cn } from "@/lib/utils";

interface InteractiveMapProps {
  tailors: TailorLocation[];
  activeTailorId: string | null;
  onMarkerClick: (id: string) => void;
}

export const InteractiveMap = ({ tailors, activeTailorId, onMarkerClick }: InteractiveMapProps) => {
  const [zoom, setZoom] = useState(1);
  const [showPreview, setShowPreview] = useState<string | null>(null);

  useEffect(() => {
    if (activeTailorId) {
      setShowPreview(activeTailorId);
    }
  }, [activeTailorId]);

  const activeTailor = tailors.find(t => t.id === showPreview);

  return (
    <div className="w-full h-full relative bg-[#0a0a0a] overflow-hidden select-none">
      {/* Fake Map Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(212,175,55,0.1) 1px, transparent 0),
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
          transform: `scale(${zoom})`,
          transition: "background-size 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      />

      {/* Decorative Map Elements (Fake roads/areas) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[20%] left-[-10%] w-[120%] h-[2px] bg-white/5 -rotate-12" />
         <div className="absolute top-[40%] left-[-10%] w-[120%] h-[2px] bg-white/5 rotate-6" />
         <div className="absolute top-[70%] left-[-10%] w-[120%] h-[1px] bg-white/5 -rotate-45" />
         <div className="absolute top-[10%] left-[30%] w-[1px] h-[120%] bg-white/5 rotate-12" />
         <div className="absolute top-[10%] left-[60%] w-[2px] h-[120%] bg-white/5 -rotate-6" />
         
         {/* Green areas */}
         <div className="absolute top-[15%] left-[70%] w-32 h-48 bg-green-900/10 rounded-[4rem] blur-3xl rotate-12" />
         <div className="absolute bottom-[20%] left-[10%] w-48 h-32 bg-blue-900/10 rounded-[4rem] blur-3xl" />
      </div>

      {/* Map Content (Markers) */}
      <div className="relative w-full h-full">
         {/* User Location Marker */}
         <div 
           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
         >
            <div className="relative">
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute inset-0 bg-blue-500 rounded-full blur-md"
               />
               <div className="relative w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-white fill-white rotate-45" />
               </div>
               <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">You are here</span>
               </div>
            </div>
         </div>

         {/* Tailor Markers */}
         {tailors.map((tailor) => {
            // Calculate relative position from Bhopal center
            const x = 50 + (tailor.lng - USER_LOCATION.lng) * 1000;
            const y = 50 - (tailor.lat - USER_LOCATION.lat) * 1000;
            const isHovered = activeTailorId === tailor.id;
            const isActive = showPreview === tailor.id;

            return (
               <div 
                 key={tailor.id}
                 className="absolute z-10 transition-all duration-500"
                 style={{ left: `${x}%`, top: `${y}%` }}
               >
                  <button 
                    onClick={() => {
                      onMarkerClick(tailor.id);
                      setShowPreview(tailor.id);
                    }}
                    className="relative group"
                  >
                     <AnimatePresence>
                        {(isHovered || isActive) && (
                          <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -inset-4 bg-gold/20 rounded-full blur-lg"
                          />
                        )}
                     </AnimatePresence>
                     
                     <motion.div 
                       animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                       className={cn(
                         "relative w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xl border-2 transition-all duration-300",
                         isActive ? "bg-gold border-white text-gold-foreground rotate-0" : 
                         isHovered ? "bg-gold/80 border-gold text-gold-foreground rotate-12" :
                         "bg-black border-gold/50 text-gold rotate-45 group-hover:rotate-0"
                       )}
                     >
                        <MapPin className={cn("w-5 h-5", isActive ? "fill-current" : "")} />
                        
                        {/* Price Tag Badge */}
                        <div className={cn(
                          "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white transition-all",
                          tailor.isVerified ? "bg-green-500" : "bg-gold"
                        )} />
                     </motion.div>

                     {/* Miniature label */}
                     <AnimatePresence>
                        {(isHovered || isActive) && (
                           <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: 10 }}
                             className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl z-[30]"
                           >
                              {tailor.shopName}
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </button>
               </div>
            );
         })}
      </div>

      {/* Map Controls */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
         <div className="flex flex-col bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setZoom(Math.min(zoom + 0.2, 2))}
              className="h-12 w-12 hover:bg-gold/10 hover:text-gold rounded-none"
            >
               <Plus className="w-5 h-5" />
            </Button>
            <div className="h-px bg-white/10 w-8 mx-auto" />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setZoom(Math.max(zoom - 0.2, 0.5))}
              className="h-12 w-12 hover:bg-gold/10 hover:text-gold rounded-none"
            >
               <Minus className="w-5 h-5" />
            </Button>
         </div>
         <Button variant="ghost" size="icon" className="h-12 w-12 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-gold/10 hover:text-gold shadow-2xl">
            <Compass className="w-5 h-5" />
         </Button>
         <Button variant="ghost" size="icon" className="h-12 w-12 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl hover:bg-gold/10 hover:text-gold shadow-2xl">
            <Layers className="w-5 h-5" />
         </Button>
      </div>

      {/* Tailor Preview Card (Bottom Left) */}
      <AnimatePresence>
         {activeTailor && (
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-[400px] z-[50]"
            >
               <Card className="p-6 glass-card border-gold/30 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="flex gap-6">
                     <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gold/20">
                        <img src={activeTailor.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                     </div>
                     <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                           <div className="space-y-0.5">
                              <h4 className="text-xl font-bold tracking-tight text-white">{activeTailor.shopName}</h4>
                              <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{activeTailor.name}</p>
                           </div>
                           <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg">
                              {activeTailor.rating} <Star className="w-2 h-2 fill-current ml-1" />
                           </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4">
                           <div className="flex items-center gap-1.5 text-white/60">
                              <MapPin className="w-3.5 h-3.5 text-gold" />
                              <span className="text-xs font-bold">{activeTailor.distance} km</span>
                           </div>
                           <div className="flex items-center gap-1.5 text-white/60">
                              <IndianRupee className="w-3.5 h-3.5 text-gold" />
                              <span className="text-xs font-bold">₹{activeTailor.startingPrice}</span>
                           </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                           <Button className="flex-1 bg-gold text-gold-foreground hover:bg-gold/90 rounded-xl h-10 font-bold text-[9px] uppercase tracking-widest transition-all">
                              View Profile
                           </Button>
                           <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 rounded-xl h-10 font-bold text-[9px] uppercase tracking-widest transition-all">
                              Compare
                           </Button>
                           <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl border-white/20 text-white hover:bg-white/10 shrink-0">
                              <ChevronRight className="w-4 h-4" />
                           </Button>
                        </div>
                     </div>
                  </div>
                  
                  {/* Close Button */}
                  <button 
                    onClick={() => setShowPreview(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all"
                  >
                     <Maximize2 className="w-4 h-4 rotate-45" />
                  </button>
               </Card>
            </motion.div>
         )}
      </AnimatePresence>

      {/* Map Footer Overlay */}
      <div className="absolute bottom-8 right-8 px-6 py-3 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full z-[50]">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Platform Sync Active</span>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Satellite View</span>
         </div>
      </div>
    </div>
  );
};

