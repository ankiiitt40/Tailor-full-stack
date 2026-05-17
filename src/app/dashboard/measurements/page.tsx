"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  History, 
  User, 
  Edit3, 
  Trash2, 
  Copy,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Award,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { savedProfiles } from "@/data/booking-data";
import { MeasurementProfile } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function MeasurementsDashboard() {
  const [activeProfileId, setActiveProfileId] = useState(savedProfiles[0].id);
  const activeProfile = savedProfiles.find(p => p.id === activeProfileId) || savedProfiles[0];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full -ml-24 -mb-24" />
         
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Premium Profile Manager
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Smart Sizing Active</span>
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                     Manage Your Perfect <br />
                     <span className="text-gold">Measurements</span> <span className="inline-block animate-bounce">✨</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium max-w-xl">
                     Save accurate body metrics for flawless stitching. Create profiles for family and track fit changes over time.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                        <Plus className="w-5 h-5 mr-2" /> Add New Profile
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        Digital Body Scan
                     </Button>
                  </div>
               </div>

               {/* Quick Stats */}
               <div className="grid grid-cols-2 gap-4 w-full lg:w-[400px]">
                  {[
                    { label: "Active Profiles", value: "05", icon: User },
                    { label: "Accuracy Score", value: "98%", icon: Award },
                  ].map((stat) => (
                    <div key={stat.label} className="p-6 rounded-[2.5rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-xl space-y-2">
                       <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-gold" />
                       </div>
                       <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                       <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Left: Profile List */}
            <aside className="xl:col-span-4 space-y-8">
               <div className="space-y-4">
                  <div className="flex items-center justify-between px-2">
                     <h3 className="text-xl font-black tracking-tight">Family Profiles</h3>
                     <History className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-gold transition-colors" />
                  </div>
                  <div className="relative group">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                     <Input 
                       placeholder="Search profiles..." 
                       className="h-12 bg-muted/30 border-none rounded-xl pl-12 font-medium focus-visible:ring-gold/30"
                     />
                  </div>
               </div>

               <div className="space-y-4">
                  {savedProfiles.map((p) => (
                    <motion.div
                      key={p.id}
                      onClick={() => setActiveProfileId(p.id)}
                      className={cn(
                        "p-6 rounded-[2.5rem] border-2 transition-all cursor-pointer group flex items-center justify-between",
                        activeProfileId === p.id ? "bg-gold/10 border-gold shadow-xl" : "bg-card border-border/50 hover:border-gold/30"
                      )}
                    >
                       <div className="flex items-center gap-5">
                          <div className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center transition-all",
                            activeProfileId === p.id ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground group-hover:bg-gold/10"
                          )}>
                             <User className="w-8 h-8" />
                          </div>
                          <div className="space-y-1">
                             <h4 className="text-lg font-black tracking-tight">{p.name}</h4>
                             <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-[8px] border-gold/30 text-gold uppercase tracking-widest">{p.relationship}</Badge>
                                <span className="text-[10px] font-bold text-muted-foreground">{p.completionPercentage}% Complete</span>
                             </div>
                          </div>
                       </div>
                       <ChevronRight className={cn(
                         "w-5 h-5 transition-all",
                         activeProfileId === p.id ? "text-gold translate-x-1" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                       )} />
                    </motion.div>
                  ))}
               </div>

               <Button className="w-full h-16 rounded-[2rem] border-2 border-dashed border-border/50 bg-transparent text-muted-foreground hover:bg-gold/5 hover:text-gold hover:border-gold/30 transition-all font-black text-[10px] uppercase tracking-widest">
                  <Plus className="w-5 h-5 mr-2" /> Add New Family Member
               </Button>
            </aside>

            {/* Center: Measurements Grid */}
            <main className="xl:col-span-8 space-y-12">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                     <h2 className="text-3xl font-black tracking-tight">{activeProfile.name}'s Metrics</h2>
                     <p className="text-muted-foreground font-medium">Last updated on {activeProfile.lastUpdated}</p>
                  </div>
                  <div className="flex items-center gap-3">
                     <Button variant="outline" className="rounded-xl h-12 border-border/50 px-6 font-bold hover:bg-gold/5 hover:text-gold">
                        <Edit3 className="w-4 h-4 mr-2" /> Edit All
                     </Button>
                     <Button className="rounded-xl h-12 bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest px-8">
                        Use For Booking
                     </Button>
                  </div>
               </div>

               {/* Metrics Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { label: "Chest", value: activeProfile.chest, unit: "in", icon: "📏" },
                    { label: "Waist", value: activeProfile.waist, unit: "in", icon: "📐" },
                    { label: "Shoulder", value: activeProfile.shoulder, unit: "in", icon: "👔" },
                    { label: "Sleeve", value: activeProfile.sleeve, unit: "in", icon: "🧥" },
                    { label: "Neck", value: activeProfile.neck, unit: "in", icon: "🧣" },
                    { label: "Height", value: activeProfile.height, unit: "in", icon: "🕴️" },
                    { label: "Hip", value: activeProfile.hip, unit: "in", icon: "👖" },
                    { label: "Thigh", value: activeProfile.thigh, unit: "in", icon: "🦵" },
                    { label: "Wrist", value: activeProfile.wrist, unit: "in", icon: "⌚" },
                  ].map((m) => (
                    <motion.div 
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all group relative overflow-hidden"
                    >
                       <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full -mr-12 -mt-12" />
                       <div className="space-y-6 relative z-10">
                          <div className="flex items-center justify-between">
                             <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                {m.icon}
                             </div>
                             <Badge variant="outline" className="text-[8px] border-border/50 text-muted-foreground uppercase tracking-widest">Verified</Badge>
                          </div>
                          <div className="space-y-1">
                             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</p>
                             <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black tracking-tighter">{m.value}</span>
                                <span className="text-xs font-bold text-muted-foreground">{m.unit}</span>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* AI Suggestions & Analytics */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-10 rounded-[3rem] bg-gold/5 border-gold/20 space-y-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full" />
                     <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                           <Zap className="w-6 h-6 text-gold" />
                           <h3 className="text-2xl font-black tracking-tight">AI Fit Analysis</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                           Based on your {activeProfile.chest}in chest and {activeProfile.height}in height, we recommend a <span className="text-gold font-bold">Slim Fit</span> for formal shirts and a <span className="text-gold font-bold">Regular Fit</span> for sherwanis.
                        </p>
                        <div className="pt-4 flex gap-3">
                           <Badge className="bg-gold text-gold-foreground">Premium Choice</Badge>
                           <Badge variant="outline" className="border-gold/30 text-gold">Tailored Fit</Badge>
                        </div>
                     </div>
                  </Card>

                  <Card className="p-10 rounded-[3rem] bg-foreground text-background space-y-8 overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
                     <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3">
                           <Award className="w-6 h-6 text-gold" />
                           <h3 className="text-2xl font-black tracking-tight">Style Recommendation</h3>
                        </div>
                        <p className="text-background/60 text-sm font-medium leading-relaxed">
                           Your athletic silhouette is perfect for our new "Elite Royal" collection launching next week.
                        </p>
                        <Button className="w-full h-14 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                           Preview Collection <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                     </div>
                  </Card>
               </div>

               {/* Measurement History Preview */}
               <section className="space-y-8 py-12 border-t border-border/50">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <h2 className="text-3xl font-black tracking-tight">Measurement History</h2>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Track your physical changes</p>
                     </div>
                     <Button variant="ghost" className="text-gold font-bold text-xs uppercase tracking-widest gap-2">
                        View Full Logs <ChevronRight className="w-4 h-4" />
                     </Button>
                  </div>
                  
                  <div className="space-y-4">
                     {activeProfile.history.map((log) => (
                       <div key={log.id} className="p-6 rounded-2xl bg-card border border-border/50 flex items-center justify-between group hover:border-gold/30 transition-all">
                          <div className="flex items-center gap-6">
                             <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center font-black text-gold">
                                {log.date.split("-")[2]}
                             </div>
                             <div>
                                <p className="text-sm font-bold tracking-tight">{log.field} Updated</p>
                                <p className="text-xs text-muted-foreground">{log.date}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-6">
                             <div className="text-right">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Growth</p>
                                <p className="text-lg font-black text-green-500">+{log.newValue - log.oldValue} in</p>
                             </div>
                             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                <TrendingUp className="w-5 h-5" />
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </section>
            </main>
         </div>
      </div>
    </div>
  );
}
