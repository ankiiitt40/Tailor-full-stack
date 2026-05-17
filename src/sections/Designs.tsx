"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Bookmark, Eye } from "lucide-react";
import { designs } from "@/data/designs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Blouse", "Kurta", "Sherwani", "Lehenga", "Formal Wear"];

export const Designs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDesigns = activeTab === "All" 
    ? designs 
    : designs.filter(d => d.category === activeTab);

  return (
    <section id="designs" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trending <span className="text-gold">Fashion Designs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get inspired by the latest trends in custom fashion. 
            Select a design and get it stitched by our top tailors.
          </p>

          <Tabs defaultValue="All" className="w-full flex justify-center pt-8">
            <TabsList className="bg-background/50 backdrop-blur-md p-1 rounded-full border border-border/50 overflow-x-auto">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  onClick={() => setActiveTab(cat)}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-gold data-[state=active]:text-gold-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((design) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-lg"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-4">
                    <h3 className="text-white text-xl font-bold">{design.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          {design.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bookmark className="w-4 h-4" />
                          {design.saves}
                        </span>
                      </div>
                      <button className="bg-gold text-gold-foreground p-3 rounded-full hover:scale-110 transition-transform">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                      {design.category}
                   </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
