"use client";

import React, { useState } from "react";
import { 
  Settings, 
  ShieldCheck, 
  Bell, 
  Palette, 
  Smartphone, 
  Globe, 
  Eye, 
  Lock,
  ArrowRight,
  Database,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SecurityPanel } from "@/components/security/SecurityPanel";
import { NotificationSettings } from "@/components/preferences/NotificationSettings";
import { ThemeSwitcher } from "@/components/settings/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function UserSettingsPage() {
  const [activeTab, setActiveTab] = useState("security");

  const tabs = [
    { id: "security", label: "Security", icon: ShieldCheck },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "privacy", label: "Privacy", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Settings Header */}
      <div className="relative pt-12 pb-20 overflow-hidden border-b border-border/50">
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full -ml-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="space-y-6 max-w-2xl">
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">System Config</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">User Settings</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                  Account <br />
                  <span className="text-gold">Configuration</span> <span className="inline-block animate-spin-slow">⚙️</span>
               </h1>
               <p className="text-xl text-muted-foreground font-medium">
                  Manage your security protocols, notification channels, and visual interface preferences.
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="xl:col-span-3">
               <div className="sticky top-24 space-y-2 p-4 rounded-[3rem] bg-card/40 backdrop-blur-xl border border-border/50">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest group",
                        activeTab === tab.id 
                          ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" 
                          : "text-muted-foreground hover:bg-gold/5 hover:text-gold"
                      )}
                    >
                       <tab.icon className={cn("w-5 h-5", activeTab === tab.id ? "text-gold-foreground" : "text-gold")} />
                       {tab.label}
                       {activeTab === tab.id && <motion.div layoutId="tab-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-foreground" />}
                    </button>
                  ))}
                  
                  <div className="pt-8 mt-8 border-t border-border/50 space-y-2">
                     <button className="w-full flex items-center gap-4 px-6 py-4 text-red-500 hover:bg-red-500/5 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest">
                        <Trash2 className="w-5 h-5" /> Delete Account
                     </button>
                  </div>
               </div>
            </aside>

            {/* Main Content Area */}
            <main className="xl:col-span-9">
               <div className="max-w-4xl">
                  <AnimatePresence mode="wait">
                    {activeTab === "security" && (
                      <motion.div
                        key="security"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                         <SecurityPanel />
                      </motion.div>
                    )}

                    {activeTab === "notifications" && (
                      <motion.div
                        key="notifications"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                         <NotificationSettings />
                      </motion.div>
                    )}

                    {activeTab === "appearance" && (
                      <motion.div
                        key="appearance"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                         <ThemeSwitcher />
                      </motion.div>
                    )}

                    {activeTab === "privacy" && (
                      <motion.div
                        key="privacy"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                      >
                         <div className="space-y-8">
                            <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                                  <Eye className="w-6 h-6 text-gold" />
                               </div>
                               <div>
                                  <h3 className="text-xl font-black tracking-tight">Privacy & Visibility</h3>
                                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Control who can see your activity</p>
                               </div>
                            </div>
                            
                            <div className="p-10 rounded-[3.5rem] bg-card border border-border/50 space-y-6">
                               {[
                                 { label: "Public Profile", desc: "Allow other users and tailors to view your style DNA and reviews", active: true },
                                 { label: "Show Online Status", desc: "Let your tailors see when you are active to speed up communication", active: true },
                                 { label: "Anonymous Reviews", desc: "Keep your name hidden when writing feedback for tailors", active: false },
                               ].map((item) => (
                                 <div key={item.label} className="flex items-center justify-between">
                                    <div className="space-y-1">
                                       <h4 className="text-sm font-black">{item.label}</h4>
                                       <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                                    </div>
                                    <Button variant="ghost" className="text-gold font-black text-[10px] uppercase tracking-widest">
                                       {item.active ? "Enabled" : "Disabled"}
                                    </Button>
                                 </div>
                               ))}
                            </div>
                         </div>
                         
                         <div className="p-10 rounded-[4rem] bg-foreground text-background space-y-8 relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full" />
                            <div className="space-y-2 relative z-10">
                               <h3 className="text-2xl font-black tracking-tight">Data Portability</h3>
                               <p className="text-sm font-medium opacity-60">Download a complete archive of your fashion data, measurements, and transaction history.</p>
                            </div>
                            <Button className="h-14 px-10 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest relative z-10 transition-all">
                               <Database className="w-4 h-4 mr-2" /> Request Data Archive
                            </Button>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </main>
         </div>
      </div>
    </div>
  );
}
