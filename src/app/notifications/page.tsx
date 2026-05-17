"use client";

import React, { useState } from "react";
import { 
  Bell, 
  Search, 
  Settings, 
  Filter, 
  CheckCheck, 
  History, 
  ShieldCheck,
  Zap,
  LayoutGrid,
  TrendingUp,
  Star,
  MessageSquare,
  ShoppingBag,
  CreditCard
} from "lucide-react";
import { motion } from "framer-motion";
import { NotificationFeed } from "@/components/notifications/NotificationFeed";
import { ActivityTimeline } from "@/components/activity/ActivityTimeline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Activities", icon: Bell },
    { id: "orders", label: "Bookings", icon: ShoppingBag },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "reviews", label: "Reviews", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Realtime Insights
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Encrypted Channel</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Stitching <br />
                     <span className="text-gold">Activity Center</span> <span className="inline-block animate-bounce">🔔</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Never miss a stitch. Realtime updates on bookings, messages, and fashion trends delivered to your fingertips.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all">
                        <CheckCheck className="w-5 h-5 mr-2" /> Mark All Read
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        <Settings className="w-5 h-5 mr-2" /> Preferences
                     </Button>
                  </div>
               </div>

               {/* Activity Insights */}
               <div className="grid grid-cols-2 gap-4 w-full lg:w-[450px]">
                  {[
                    { label: "Unread Alerts", value: "04", icon: Bell },
                    { label: "Daily Interactions", value: "128", icon: TrendingUp },
                  ].map((stat) => (
                    <div key={stat.label} className="p-8 rounded-[3.5rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-xl space-y-4 text-center group cursor-pointer hover:border-gold/30 transition-all">
                       <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <stat.icon className="w-6 h-6 text-gold" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Sidebar: Categories */}
            <aside className="xl:col-span-3 space-y-12">
               <div className="space-y-6">
                  <h3 className="text-xl font-black tracking-tight px-4">Categories</h3>
                  <nav className="space-y-3">
                     {categories.map((cat) => (
                       <button
                         key={cat.id}
                         onClick={() => setActiveTab(cat.id)}
                         className={cn(
                           "w-full flex items-center justify-between p-5 rounded-[2.5rem] border-2 transition-all group",
                           activeTab === cat.id ? "bg-gold/10 border-gold shadow-xl" : "bg-card border-transparent hover:border-gold/20"
                         )}
                       >
                          <div className="flex items-center gap-4">
                             <div className={cn(
                               "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                               activeTab === cat.id ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground group-hover:bg-gold/10"
                             )}>
                                <cat.icon className="w-5 h-5" />
                             </div>
                             <span className="text-sm font-black tracking-tight">{cat.label}</span>
                          </div>
                          {activeTab === cat.id && <div className="w-2 h-2 bg-gold rounded-full" />}
                       </button>
                     ))}
                  </nav>
               </div>

               <div className="p-8 rounded-[3rem] bg-foreground text-background relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/20 blur-2xl rounded-full" />
                  <div className="space-y-4 relative z-10">
                     <Zap className="w-6 h-6 text-gold" />
                     <h4 className="text-lg font-black tracking-tight leading-tight">Priority Mode Active</h4>
                     <p className="text-xs font-bold opacity-60 leading-relaxed">We've muted non-essential alerts so you can focus on your bridal fittings.</p>
                     <Button variant="link" className="p-0 h-auto text-gold text-[10px] font-black uppercase tracking-widest">
                        Manage Quiet Hours <History className="w-3 h-3 ml-1" />
                     </Button>
                  </div>
               </div>
            </aside>

            {/* Main Feed */}
            <main className="xl:col-span-6 space-y-10">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="relative flex-1 w-full group">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                     <Input 
                       placeholder="Search through your alerts..." 
                       className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-medium focus-visible:ring-gold/30"
                     />
                  </div>
                  <Button variant="outline" className="h-14 px-8 rounded-2xl border-border/50 font-bold gap-2 hover:bg-gold/5 hover:text-gold transition-all">
                     <Filter className="w-4 h-4" /> Filters
                  </Button>
               </div>

               <NotificationFeed />

               <div className="flex justify-center py-8">
                  <Button variant="link" className="text-gold font-black text-xs uppercase tracking-[0.2em]">
                     View Older Notifications <History className="w-4 h-4 ml-2" />
                  </Button>
               </div>
            </main>

            {/* Right: Activity Sidebar */}
            <aside className="xl:col-span-3">
               <ActivityTimeline />
            </aside>
         </div>
      </div>
    </div>
  );
}
