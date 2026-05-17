"use client";

import React from "react";
import { motion } from "framer-motion";
import { brands } from "@/data/misc";

export const Brands = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-10">
          Trusted by 10,000+ Fashion Customers
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ scale: 1.1, opacity: 1, filter: "grayscale(0%)" }}
              className="grayscale transition-all duration-300 cursor-pointer"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
