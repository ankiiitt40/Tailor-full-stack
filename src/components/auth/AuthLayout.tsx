"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden px-6 py-12">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      {/* Floating Particles (CSS only) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/20 rounded-full animate-bounce" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gold/30 rounded-full animate-bounce delay-500" />
        <div className="absolute top-1/2 right-1/2 w-1.5 h-1.5 bg-gold/10 rounded-full animate-pulse" />
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="p-3 bg-gold rounded-2xl mb-4 shadow-xl shadow-gold/20"
          >
            <Scissors className="w-8 h-8 text-gold-foreground" />
          </motion.div>
          <h1 className="text-2xl font-bold tracking-tight">
            Stitch<span className="text-gold">Connect</span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
