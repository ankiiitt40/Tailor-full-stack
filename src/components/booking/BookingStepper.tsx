"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BookingStepperProps {
  steps: string[];
  currentStep: number;
}

export const BookingStepper = ({ steps, currentStep }: BookingStepperProps) => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-between relative max-w-4xl mx-auto px-4">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          className="absolute top-1/2 left-0 h-0.5 bg-gold -translate-y-1/2 -z-10 transition-all duration-500"
        />

        {steps.map((step, i) => {
          const isCompleted = i < currentStep;
          const isActive = i === currentStep;

          return (
            <div key={step} className="flex flex-col items-center gap-3 relative">
              <motion.div 
                animate={{ 
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isCompleted || isActive ? "var(--gold)" : "var(--card)",
                  borderColor: isCompleted || isActive ? "var(--gold)" : "var(--border)"
                }}
                className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-black transition-all shadow-xl",
                  isCompleted || isActive ? "text-gold-foreground" : "text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : i + 1}
              </motion.div>
              <div className="absolute top-12 whitespace-nowrap text-center">
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest transition-colors",
                  isActive ? "text-gold" : "text-muted-foreground"
                )}>
                  {step}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
