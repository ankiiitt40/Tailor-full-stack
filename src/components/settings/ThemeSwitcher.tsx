"use client";

import React from "react";
import { 
  Sun, 
  Moon, 
  Monitor, 
  Palette, 
  Check,
  Layout,
  Type
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "light", label: "Pure Light", icon: Sun, color: "bg-white border-black/10" },
    { name: "dark", label: "Luxury Dark", icon: Moon, color: "bg-black border-white/10" },
    { name: "system", label: "Dynamic", icon: Monitor, color: "bg-zinc-800 border-white/5" },
  ];

  return (
    <div className="space-y-12">
       <div className="space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Palette className="w-6 h-6 text-gold" />
             </div>
             <div>
                <h3 className="text-xl font-black tracking-tight">Appearance & Theme</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Choose your preferred fashion workspace aesthetic</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {themes.map((t) => (
               <motion.div
                 key={t.name}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => setTheme(t.name)}
                 className={cn(
                   "p-8 rounded-[3rem] border-2 cursor-pointer transition-all relative overflow-hidden",
                   theme === t.name ? "border-gold bg-gold/5 shadow-xl" : "border-border/50 bg-card hover:border-gold/30"
                 )}
               >
                  <div className="flex flex-col items-center gap-6 relative z-10">
                     <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg", t.color)}>
                        <t.icon className={cn("w-8 h-8", t.name === "light" ? "text-black" : "text-gold")} />
                     </div>
                     <div className="text-center space-y-1">
                        <h4 className="text-sm font-black uppercase tracking-widest">{t.label}</h4>
                        <p className="text-[10px] font-medium text-muted-foreground">Select for {t.name} experience</p>
                     </div>
                     {theme === t.name && (
                       <motion.div 
                         initial={{ scale: 0 }}
                         animate={{ scale: 1 }}
                         className="absolute top-4 right-4 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                       >
                          <Check className="w-3 h-3 text-gold-foreground" />
                       </motion.div>
                     )}
                  </div>
               </motion.div>
             ))}
          </div>
       </div>

       {/* Accent Colors */}
       <div className="space-y-6">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <Layout className="w-5 h-5 text-gold" />
             </div>
             <h4 className="text-lg font-black tracking-tight uppercase tracking-widest text-sm">Accent Color</h4>
          </div>
          <div className="flex flex-wrap gap-4">
             {["#D4AF37", "#E5E5E5", "#000000", "#FF4D4D", "#4D94FF"].map((color) => (
               <button
                 key={color}
                 className={cn(
                   "w-12 h-12 rounded-2xl border-2 transition-all hover:scale-110",
                   color === "#D4AF37" ? "border-gold shadow-lg shadow-gold/20" : "border-border/50"
                 )}
                 style={{ backgroundColor: color }}
               />
             ))}
          </div>
       </div>

       {/* Typography Scaling */}
       <div className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Type className="w-5 h-5 text-gold" />
             </div>
             <h4 className="text-lg font-black tracking-tight uppercase tracking-widest text-sm">Interface Density</h4>
          </div>
          <div className="space-y-4">
             <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <span>Compact</span>
                <span>Comfortable</span>
                <span>Spacious</span>
             </div>
             <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden relative">
                <div className="absolute left-[50%] -translate-x-1/2 w-4 h-4 bg-gold rounded-full -top-1.5 shadow-lg border-2 border-background cursor-pointer" />
                <div className="h-full bg-gold/20 w-full" />
             </div>
          </div>
       </div>
    </div>
  );
};
