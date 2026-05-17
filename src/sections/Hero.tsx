"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronRight, Star, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-gold/50 text-gold bg-gold/5 rounded-full">
              India’s Smart Tailor Marketplace
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
              Find The Perfect <br />
              <span className="text-gold">Tailor Near You</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Compare prices, explore designs, and book expert tailors instantly. 
              Luxury custom stitching, now at your fingertips.
            </p>
          </div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass p-2 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl border-white/20"
          >
            <div className="flex-1 flex items-center px-4 gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <Input 
                placeholder="Enter location..." 
                className="border-none bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/50 h-12" 
              />
            </div>
            <div className="h-10 w-px bg-border hidden md:block self-center" />
            <div className="flex-1 flex items-center px-4 gap-2">
              <Briefcase className="w-5 h-5 text-gold" />
              <select className="bg-transparent border-none focus:ring-0 text-foreground text-sm w-full h-12 outline-none">
                <option value="">Select Service</option>
                <option value="suits">Wedding Suits</option>
                <option value="lehenga">Lehenga</option>
                <option value="formal">Formal Wear</option>
                <option value="alterations">Alterations</option>
              </select>
            </div>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl px-8 h-12 group">
              Search
              <Search className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>

          <div className="flex items-center gap-4 pt-4">
            <Button variant="outline" className="border-gold/50 hover:bg-gold/5 rounded-xl h-12 px-8">
              Explore Tailors
            </Button>
            <Button variant="ghost" className="hover:text-gold group">
              View Designs
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-gold/10 aspect-square md:aspect-[4/5] bg-muted shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium Tailoring"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl border-gold/20 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-gold fill-gold" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Top Rated</p>
              <p className="font-bold">4.9/5 Rating</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl shadow-xl border-gold/20 flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Happy Clients</p>
              <p className="font-bold">10,000+ Served</p>
            </div>
          </motion.div>

          {/* Stats Overlay */}
          <div className="absolute bottom-10 right-10 flex gap-4">
             <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-[10px] uppercase tracking-wider text-white/70">Expert Tailors</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
