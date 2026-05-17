"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Design } from "@/types/designs";
import { DesignCard } from "./DesignCard";
import { DesignModal } from "./DesignModal";

export const MasonryGallery = ({ designs }: { designs: Design[] }) => {
  const [selectedDesign, setSelectedDesign] = React.useState<Design | null>(null);

  return (
    <div className="relative">
      {/* 2-column or 3-column masonry grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
         {designs.map((design, i) => (
           <DesignCard 
             key={design.id} 
             design={design} 
             onView={(d) => setSelectedDesign(d)} 
           />
         ))}
      </div>

      <DesignModal 
        design={selectedDesign}
        isOpen={!!selectedDesign}
        onClose={() => setSelectedDesign(null)}
      />
    </div>
  );
};
