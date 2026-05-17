"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { steps } from "@/data/misc";

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent hidden lg:block -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your perfect fit in 4 simple steps. No more multiple visits 
            or fitting issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = (Icons as any)[step.icon || "Search"];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-gold/5 group-hover:text-gold/10 transition-colors pointer-events-none">
                  0{step.id}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-20 bg-background border border-gold/20 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:border-gold/50 transition-all duration-300 group-hover:rotate-6">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed px-4">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-8 lg:hidden">
                    <Icons.ArrowDown className="text-gold/30 animate-bounce" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
