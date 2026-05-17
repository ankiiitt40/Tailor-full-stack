"use client";

import React from "react";
import { 
  ArrowRight, 
  Layers, 
  Sparkles,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { DesignCollection } from "@/types/designs";
import { Badge } from "@/components/ui/badge";

export const DesignCollections = ({ collections }: { collections: DesignCollection[] }) => {
  return (
    <div className="space-y-10 py-16 border-t border-border/50">
       <div className="space-y-2">
          <h2 className="text-4xl font-black tracking-tight">Curated Moodboards</h2>
          <p className="text-muted-foreground font-medium text-lg">Expertly curated collections for every occasion</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, i) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer space-y-6"
            >
               <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-border/50 group-hover:border-gold/30 transition-all">
                  <img src={collection.coverImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  
                  {collection.isTrending && (
                     <div className="absolute top-6 right-6">
                        <Badge className="bg-white text-black border-none text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-2xl">
                           Viral Collection
                        </Badge>
                     </div>
                  )}

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                     <div className="flex -space-x-4">
                        {collection.thumbnails.map((thumb, idx) => (
                           <div key={idx} className="w-12 h-12 rounded-2xl border-4 border-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
                              <img src={thumb} className="w-full h-full object-cover" />
                           </div>
                        ))}
                     </div>
                     <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </div>

               <div className="px-4 flex justify-between items-end">
                  <div className="space-y-1">
                     <h3 className="text-2xl font-black tracking-tight">{collection.title}</h3>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{collection.totalDesigns} Unique Designs</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-foreground/5 px-3 py-1.5 rounded-xl border border-border/50">
                     <Heart className="w-3 h-3 text-red-500" />
                     <span className="text-[10px] font-bold">12k</span>
                  </div>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};
