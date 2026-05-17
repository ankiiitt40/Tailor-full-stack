"use client";

import React, { useState } from "react";
import { 
  User, 
  Ruler, 
  ChevronRight, 
  Plus, 
  Check,
  Sparkles,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { savedProfiles } from "@/data/booking-data";
import { MeasurementProfile } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MeasurementFormProps {
  profile: MeasurementProfile | null;
  onUpdate: (profile: MeasurementProfile) => void;
}

export const MeasurementForm = ({ profile, onUpdate }: MeasurementFormProps) => {
  const [activeProfileId, setActiveProfileId] = useState(profile?.id || "");

  const handleProfileSelect = (p: MeasurementProfile) => {
    setActiveProfileId(p.id);
    onUpdate(p);
  };

  const fields = [
    { label: "Chest", key: "chest", icon: "📏" },
    { label: "Waist", key: "waist", icon: "📐" },
    { label: "Shoulder", key: "shoulder", icon: "👔" },
    { label: "Sleeve", key: "sleeve", icon: "🧥" },
    { label: "Neck", key: "neck", icon: "🧣" },
    { label: "Height", key: "height", icon: "🕴️" },
    { label: "Hip", key: "hip", icon: "👖" },
    { label: "Inseam", key: "inseam", icon: "🩳" },
  ];

  return (
    <div className="space-y-12">
      {/* Profile Selector */}
      <div className="space-y-6">
         <div className="flex items-center justify-between">
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">Select Measurement Profile</h3>
               <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Use a saved profile or create a new one</p>
            </div>
            <Button variant="outline" className="rounded-xl border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold">
               <Plus className="w-4 h-4" /> Add Profile
            </Button>
         </div>

         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
            {savedProfiles.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProfileSelect(p)}
                className={cn(
                  "relative min-w-[240px] p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-4 text-left group",
                  activeProfileId === p.id ? "bg-gold/10 border-gold shadow-xl shadow-gold/10" : "bg-card border-border/50 hover:border-gold/30"
                )}
              >
                 <div className={cn(
                   "w-12 h-12 rounded-2xl flex items-center justify-center transition-all",
                   activeProfileId === p.id ? "bg-gold text-gold-foreground" : "bg-muted group-hover:bg-gold/10 text-muted-foreground"
                 )}>
                    <User className="w-6 h-6" />
                 </div>
                 <div className="space-y-0.5">
                    <p className="text-sm font-black tracking-tight">{p.name}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{p.relationship}</p>
                 </div>
                 {activeProfileId === p.id && (
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gold flex items-center justify-center text-gold-foreground">
                       <Check className="w-3.5 h-3.5" />
                    </div>
                 )}
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 border-t border-border/50 pt-12">
         {/* Manual Inputs */}
         <div className="xl:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {fields.map((field) => (
                 <div key={field.key} className="space-y-2 group">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2 group-focus-within:text-gold transition-colors">
                       {field.label} (inches)
                    </label>
                    <div className="relative">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl grayscale group-focus-within:grayscale-0 transition-all">
                          {field.icon}
                       </div>
                       <Input 
                         type="number"
                         value={(profile as any)?.[field.key] || ""}
                         onChange={(e) => onUpdate({ ...profile!, [field.key]: parseFloat(e.target.value) })}
                         className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-bold text-lg focus-visible:ring-gold/30"
                         placeholder="0.0"
                       />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Visual Body Diagram Placeholder */}
         <div className="xl:col-span-5 relative">
            <div className="sticky top-0 p-10 rounded-[3rem] bg-foreground/5 border border-border/50 flex flex-col items-center gap-10 overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
               
               <div className="text-center space-y-2">
                  <h4 className="text-xl font-black tracking-tight">Body Diagram Guide</h4>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Visual reference for measurements</p>
               </div>

               {/* Simple SVG Silhouette */}
               <div className="relative w-64 h-96 flex items-center justify-center">
                  <svg viewBox="0 0 200 500" className="w-full h-full text-foreground/20 fill-current opacity-40">
                     <path d="M100,50c-15,0-27,12-27,27s12,27,27,27s27-12,27-27S115,50,100,50z M100,120c-40,0-70,30-70,70v100h20V190c0-27.6,22.4-50,50-50s50,22.4,50,50v100h20V190C170,150,140,120,100,120z M60,300v150h30V300H60z M110,300v150h30V300H110z" />
                  </svg>
                  
                  {/* Highlighted Markers */}
                  <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gold/30 border-t border-dashed border-gold animate-pulse">
                     <Badge className="absolute -right-16 -top-2 bg-gold/10 text-gold border-none text-[8px] font-black uppercase">Chest Measure</Badge>
                  </div>
               </div>

               <div className="p-4 rounded-2xl bg-gold/5 border border-gold/20 flex items-start gap-3">
                  <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-[10px] font-bold text-muted-foreground leading-relaxed">
                     <span className="text-gold font-black">Pro Tip:</span> Stand straight but relaxed. Keep the tape measure level and snug, but not tight.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
