"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdminWelcome = () => {
  return (
    <div className="relative rounded-[3rem] bg-foreground text-background p-10 md:p-16 overflow-hidden mb-12 shadow-2xl">
      {/* Background Animated Gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-gold rounded-full blur-[150px]" 
      />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Platform Intelligence Active</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Welcome Back, <br />
              <span className="text-gold italic">Admin 👑</span>
            </h2>
            <p className="text-white/60 text-xl max-w-lg leading-relaxed">
              StitchConnect is scaling fast. You have <span className="text-white font-bold">18 pending verifications</span> and <span className="text-white font-bold">3 critical reports</span> that need your attention today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-2xl h-14 px-10 font-bold flex gap-3 text-sm shadow-xl shadow-gold/20 transition-all hover:scale-105">
              <Zap className="w-5 h-5" /> Verify Tailors
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-2xl h-14 px-10 font-bold flex gap-3 text-sm">
              <AlertTriangle className="w-5 h-5" /> View Reports
            </Button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-6">
           {[
             { label: "Platform Health", value: "Optimal", color: "text-green-500", icon: ShieldCheck },
             { label: "Active Nodes", value: "24/24", color: "text-blue-500", icon: Zap },
             { label: "Pending Tasks", value: "42", color: "text-gold", icon: Sparkles },
             { label: "Security Status", value: "Encrypted", color: "text-purple-500", icon: ShieldCheck },
           ].map((widget, i) => (
             <motion.div
               key={widget.label}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 + i * 0.1 }}
               className="p-6 glass-card rounded-3xl border-white/10 backdrop-blur-3xl space-y-3 hover:bg-white/5 transition-all cursor-pointer"
             >
                <widget.icon className={cn("w-6 h-6", widget.color)} />
                <div>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{widget.label}</p>
                   <p className="text-xl font-bold text-white">{widget.value}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
