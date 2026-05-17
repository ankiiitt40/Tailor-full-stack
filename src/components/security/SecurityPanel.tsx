"use client";

import React from "react";
import { 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  X, 
  RefreshCw, 
  Lock, 
  ShieldAlert,
  Clock,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import { mockSessions } from "@/data/settings-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const SecurityPanel = () => {
  return (
    <div className="space-y-12">
       {/* Security Toggles */}
       <div className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-gold" />
             </div>
             <div>
                <h3 className="text-xl font-black tracking-tight">Account Security</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Strengthen your account protection</p>
             </div>
          </div>

          <div className="space-y-6">
             {[
               { label: "Two-Factor Authentication", desc: "Add an extra layer of security to your account", active: true },
               { label: "Login Notifications", desc: "Get alerted when someone logs into your account", active: true },
               { label: "Biometric Login", desc: "Use FaceID or Fingerprint on mobile devices", active: false },
             ].map((item) => (
               <div key={item.label} className="flex items-center justify-between group">
                  <div className="space-y-1">
                     <Label className="text-sm font-black group-hover:text-gold transition-colors">{item.label}</Label>
                     <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={item.active} />
               </div>
             ))}
          </div>
       </div>

       {/* Active Sessions */}
       <div className="space-y-8">
          <div className="flex items-center justify-between px-4">
             <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight">Active Sessions</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Devices currently logged into your account</p>
             </div>
             <Button variant="ghost" className="text-gold font-black text-[10px] uppercase tracking-widest gap-2">
                <LogOut className="w-4 h-4" /> Sign out all
             </Button>
          </div>

          <div className="space-y-4">
             {mockSessions.map((session, i) => (
               <motion.div
                 key={session.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="p-6 rounded-[2.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all flex items-center gap-6"
               >
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                     {session.device.includes("iPhone") ? <Smartphone className="w-6 h-6 text-gold" /> : <Laptop className="w-6 h-6 text-gold" />}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                     <div className="flex items-center gap-3">
                        <h4 className="text-lg font-black tracking-tight">{session.device}</h4>
                        {session.isCurrent && (
                          <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                             Active Now
                          </Badge>
                        )}
                     </div>
                     <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        {session.browser} • {session.location}
                     </p>
                  </div>
                  <div className="text-right space-y-1">
                     <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{session.lastActive}</p>
                     {!session.isCurrent && (
                       <Button variant="ghost" size="sm" className="h-8 px-4 rounded-xl hover:bg-red-500/10 hover:text-red-500 font-bold text-[8px] uppercase tracking-widest">
                          Revoke
                       </Button>
                     )}
                  </div>
               </motion.div>
             ))}
          </div>
       </div>

       {/* Password Section */}
       <div className="p-10 rounded-[3.5rem] bg-foreground text-background relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
             <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-black tracking-tight">Password Management</h3>
                <p className="text-sm font-medium opacity-60">Last updated 3 months ago. We recommend changing it every 6 months.</p>
             </div>
             <Button className="h-14 px-10 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                <Lock className="w-4 h-4 mr-2" /> Change Password
             </Button>
          </div>
       </div>
    </div>
  );
};
