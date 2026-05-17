"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Heart, ChevronRight } from "lucide-react";
import { tailors } from "@/data/tailors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const NearbyTailors = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Nearby Tailors</h2>
          <p className="text-sm text-muted-foreground">Expert masters within 5km of your location.</p>
        </div>
        <Link href="/dashboard/tailors">
          <Button variant="ghost" className="text-gold hover:text-gold hover:bg-gold/5 flex gap-2 font-bold group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="relative group">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory">
          {tailors.map((tailor, index) => (
            <motion.div
              key={tailor.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[320px] snap-start"
            >
              <Card className="group/card overflow-hidden rounded-3xl border-border/50 hover:border-gold/30 glass-card transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tailor.image}
                    alt={tailor.shopName}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-3 py-1 text-[10px]">
                      {tailor.experience}
                    </Badge>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span className="text-sm font-bold">{tailor.rating}</span>
                      <span className="text-[10px] text-white/70">({tailor.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold group-hover/card:text-gold transition-colors truncate max-w-[180px]">
                        {tailor.shopName}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-[10px] mt-1">
                        <MapPin className="w-3 h-3 mr-1 text-gold" />
                        {tailor.location.split(",")[0]} • 1.2 km
                      </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[9px] uppercase font-bold text-muted-foreground">Starts at</p>
                       <p className="text-sm font-bold text-gold">₹{tailor.startingPrice}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tailor.specialties.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-[9px] font-bold rounded-lg px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-10 text-xs font-bold transition-all">
                      Profile
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl h-10 text-xs font-bold border-border/50 hover:border-gold/50">
                      Compare
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Gradient Fades */}
        <div className="absolute right-0 top-0 bottom-6 w-20 bg-linear-to-l from-background to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};
