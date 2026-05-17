"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { features } from "@/data/misc";

export const Features = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Why Choose <span className="text-gold">StitchConnect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're revolutionizing the way you think about custom tailoring, 
            combining traditional craftsmanship with modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-[2rem] bg-muted/30 border border-border/50 hover:border-gold/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-gold transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
