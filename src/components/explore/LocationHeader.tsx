"use client";

import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Target, 
  SlidersHorizontal, 
  ArrowUpDown,
  Navigation,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { USER_LOCATION } from "@/data/location-discovery";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LocationHeader = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleDetectLocation = () => {
    setIsDetecting(true);
    setTimeout(() => {
      setIsDetecting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 relative z-50">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Explore Nearby</h1>
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">{USER_LOCATION.city}, {USER_LOCATION.state}</span>
            <Badge variant="secondary" className="bg-gold/10 text-gold border-none text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
               Active Location
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-3">
           <Button 
             variant="outline" 
             onClick={handleDetectLocation}
             className="rounded-2xl h-12 gap-2 border-border/50 font-bold hover:bg-gold hover:text-gold-foreground transition-all duration-500 overflow-hidden relative"
             disabled={isDetecting}
           >
              {isDetecting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Detecting...</span>
                </>
              ) : showSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Located!</span>
                </>
              ) : (
                <>
                  <Target className="w-4 h-4" />
                  <span>Auto Detect</span>
                </>
              )}
              {isDetecting && (
                <motion.div 
                  layoutId="detect-bg"
                  className="absolute inset-0 bg-gold/10 pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}
           </Button>

           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="outline" className="rounded-2xl h-12 gap-2 border-border/50 font-bold">
                    <ArrowUpDown className="w-4 h-4" />
                    <span className="hidden sm:inline">Sort By</span>
                 </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass border-gold/20 p-2 mt-2 w-48">
                 {["Nearest", "Highest Rated", "Price: Low to High", "Price: High to Low", "Fastest Delivery"].map((opt) => (
                   <DropdownMenuItem key={opt} className="p-3 gap-3 rounded-xl cursor-pointer">
                      {opt}
                   </DropdownMenuItem>
                 ))}
              </DropdownMenuContent>
           </DropdownMenu>

           <Button className="rounded-2xl h-12 w-12 p-0 lg:hidden border-border/50" variant="outline">
              <SlidersHorizontal className="w-5 h-5" />
           </Button>
        </div>
      </div>

      <div className="relative group max-w-4xl">
        <div className="absolute inset-0 bg-gold/20 rounded-[2rem] blur-2xl group-focus-within:bg-gold/30 transition-all opacity-0 group-focus-within:opacity-100" />
        <div className="relative flex items-center bg-card/80 backdrop-blur-3xl border border-border/50 rounded-[2rem] p-1.5 shadow-2xl transition-all group-focus-within:border-gold/50">
          <div className="pl-6 flex items-center gap-3">
             <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />
             <div className="h-6 w-px bg-border/50" />
          </div>
          <Input 
            placeholder="Search tailors near Bhopal, Indore, Delhi..." 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border-none bg-transparent focus-visible:ring-0 h-12 text-lg font-medium placeholder:text-muted-foreground/50"
          />
          <Button className="rounded-[1.5rem] h-12 px-8 bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-bold transition-all shadow-xl shadow-black/10">
             Find Studios
          </Button>
        </div>

        <AnimatePresence>
          {searchValue && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 glass-card border-border/50 rounded-[2rem] shadow-2xl z-[60]"
            >
               <div className="space-y-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-4">Suggested Locations</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                     {["Bhopal", "Indore", "Delhi", "Mumbai"].map((city) => (
                       <button key={city} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gold/10 transition-all text-left">
                          <MapPin className="w-4 h-4 text-gold" />
                          <span className="text-sm font-medium">{city}</span>
                       </button>
                     ))}
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Detecting Animation Overlay */}
      <AnimatePresence>
        {isDetecting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-sm z-[100] flex items-center justify-center"
          >
             <Card className="p-10 glass-card border-gold/30 rounded-[3rem] text-center space-y-6 shadow-[0_0_100px_rgba(212,175,55,0.2)]">
                <div className="relative w-24 h-24 mx-auto">
                   <motion.div 
                     animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 border-4 border-t-gold border-r-gold/30 border-b-gold/10 border-l-gold/50 rounded-full"
                   />
                   <Navigation className="absolute inset-0 m-auto w-10 h-10 text-gold animate-bounce" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-2xl font-bold tracking-tight">Syncing Coordinates</h3>
                   <p className="text-sm text-muted-foreground">Accessing secure geolocation nodes...</p>
                </div>
             </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { Card } from "@/components/ui/card";
