"use client";

import React from "react";
import { 
  MapPin, 
  Plus, 
  MoreVertical, 
  Home, 
  Briefcase, 
  Check,
  Map as MapIcon,
  Navigation
} from "lucide-react";
import { motion } from "framer-motion";
import { Address } from "@/types/settings";
import { mockAddresses } from "@/data/settings-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const AddressManager = () => {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
          <div className="space-y-1">
             <h3 className="text-2xl font-black tracking-tight">Saved Locations</h3>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Manage your delivery and fitting addresses</p>
          </div>
          <Button className="h-12 px-6 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90 font-black text-[10px] uppercase tracking-widest gap-2">
             <Plus className="w-4 h-4" /> Add Address
          </Button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockAddresses.map((addr, i) => (
            <motion.div
              key={addr.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-[3rem] border-2 transition-all group relative overflow-hidden",
                addr.isDefault ? "bg-gold/5 border-gold shadow-xl" : "bg-card border-border/50 hover:border-gold/30"
              )}
            >
               <div className="flex justify-between items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-muted group-hover:bg-gold/10 flex items-center justify-center transition-all">
                     {addr.label === "Home" ? <Home className="w-6 h-6 text-gold" /> : <Briefcase className="w-6 h-6 text-gold" />}
                  </div>
                  <div className="flex gap-2">
                     {addr.isDefault && (
                       <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase px-3 py-1 rounded-full">
                          Default
                       </Badge>
                     )}
                     <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <MoreVertical className="w-5 h-5" />
                     </Button>
                  </div>
               </div>

               <div className="mt-8 space-y-4 relative z-10">
                  <div className="space-y-1">
                     <h4 className="text-xl font-black tracking-tight">{addr.label}</h4>
                     <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                        {addr.street}, {addr.landmark && `${addr.landmark}, `} {addr.city}, {addr.state} - {addr.pincode}
                     </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                     <Button variant="link" className="p-0 h-auto text-gold text-[10px] font-black uppercase tracking-widest gap-2">
                        <Navigation className="w-3.5 h-3.5" /> View on Map
                     </Button>
                     {!addr.isDefault && (
                       <Button variant="link" className="p-0 h-auto text-muted-foreground text-[10px] font-black uppercase tracking-widest gap-2">
                          Set as Default
                       </Button>
                     )}
                  </div>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
};
