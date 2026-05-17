"use client";

import React from "react";
import { 
  Settings, 
  Shield, 
  Bell, 
  Globe, 
  Database, 
  Zap, 
  ShieldAlert, 
  Code,
  Smartphone,
  Server,
  Lock,
  IndianRupee,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Global Control Panel</h1>
          <p className="text-muted-foreground">Adjust platform parameters, security protocols, and system-wide configurations.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold">
            Audit Logs
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold px-8 shadow-xl shadow-gold/20">
            Apply Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
         {/* Navigation Sidebar */}
         <div className="space-y-4">
            {[
              { label: "Platform Essentials", icon: Globe, active: true },
              { label: "Financial Rules", icon: IndianRupee },
              { label: "Trust & Safety", icon: Shield },
              { label: "Notifications Hub", icon: Bell },
              { label: "Developer API", icon: Code },
              { label: "System Health", icon: Server },
              { label: "Advanced Security", icon: Lock },
            ].map((item) => (
              <button 
                key={item.label}
                className={cn(
                  "w-full flex items-center justify-between px-6 py-4 rounded-[1.5rem] transition-all duration-300 group",
                  item.active ? "bg-foreground text-background shadow-xl shadow-black/10" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                 <div className="flex items-center gap-4">
                    <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", item.active ? "text-gold" : "text-muted-foreground")} />
                    <span className="text-sm font-bold tracking-tight">{item.label}</span>
                 </div>
                 <ChevronRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-1", item.active ? "text-gold" : "text-muted-foreground/30")} />
              </button>
            ))}
         </div>

         {/* Settings Content */}
         <div className="lg:col-span-3 space-y-10 pb-32">
            <Card className="p-10 glass-card border-border/50 rounded-[3rem] space-y-12">
               {/* Platform Configuration */}
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-gold/10 rounded-2xl">
                        <Sparkles className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold tracking-tight">Ecosystem Intelligence</h3>
                        <p className="text-xs text-muted-foreground">Configure AI-driven matching and moderation algorithms.</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                     <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[2rem] border border-border/50 group hover:border-gold/30 transition-all">
                        <div className="space-y-1">
                           <p className="font-bold text-sm">Auto-Verification</p>
                           <p className="text-[10px] text-muted-foreground max-w-[200px]">Use AI to pre-screen tailor identity documents.</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                     <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[2rem] border border-border/50 group hover:border-gold/30 transition-all">
                        <div className="space-y-1">
                           <p className="font-bold text-sm">Smart Pricing Recs</p>
                           <p className="text-[10px] text-muted-foreground max-w-[200px]">Suggest competitive rates to tailors based on location.</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                     <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[2rem] border border-border/50 group hover:border-gold/30 transition-all">
                        <div className="space-y-1">
                           <p className="font-bold text-sm">Platform Maintenance</p>
                           <p className="text-[10px] text-muted-foreground max-w-[200px]">Enable global maintenance mode (God Mode).</p>
                        </div>
                        <Switch />
                     </div>
                     <div className="flex items-center justify-between p-6 bg-muted/30 rounded-[2rem] border border-border/50 group hover:border-gold/30 transition-all">
                        <div className="space-y-1">
                           <p className="font-bold text-sm">Force Dark Mode</p>
                           <p className="text-[10px] text-muted-foreground max-w-[200px]">Enforce luxury theme across all dashboards.</p>
                        </div>
                        <Switch defaultChecked />
                     </div>
                  </div>
               </div>

               {/* Financial Parameters */}
               <div className="space-y-8 pt-10 border-t border-border/50">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-gold/10 rounded-2xl">
                        <IndianRupee className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold tracking-tight">Economic Parameters</h3>
                        <p className="text-xs text-muted-foreground">Adjust commission rates and platform-wide tax settings.</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Platform Commission (%)</Label>
                        <Input defaultValue="15" className="h-12 bg-muted/30 border-none rounded-xl font-bold focus-visible:ring-gold" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Partner GST Threshold (₹)</Label>
                        <Input defaultValue="20,00,000" className="h-12 bg-muted/30 border-none rounded-xl font-bold focus-visible:ring-gold" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Min. Withdrawal Amount (₹)</Label>
                        <Input defaultValue="5,000" className="h-12 bg-muted/30 border-none rounded-xl font-bold focus-visible:ring-gold" />
                     </div>
                     <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Platform Transaction Fee (₹)</Label>
                        <Input defaultValue="49" className="h-12 bg-muted/30 border-none rounded-xl font-bold focus-visible:ring-gold" />
                     </div>
                  </div>
               </div>

               {/* Danger Zone */}
               <div className="pt-10 border-t border-border/50">
                  <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-[3rem] space-y-6">
                     <div className="flex items-center gap-3">
                        <ShieldAlert className="w-6 h-6 text-red-500" />
                        <h4 className="text-lg font-bold text-red-500">Security Danger Zone</h4>
                     </div>
                     <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                        Actions in this section have platform-wide consequences. These include resetting the production database, terminating all active sessions, or freezing global transactions. Use with extreme caution.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="rounded-xl h-11 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white font-bold transition-all px-8">
                           Terminate Global Sessions
                        </Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-xl h-11 font-bold px-8 shadow-xl shadow-red-500/20">
                           Wipe System Cache
                        </Button>
                     </div>
                  </div>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
