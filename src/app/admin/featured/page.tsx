"use client";

import React from "react";
import { 
  Star, 
  Search, 
  Plus, 
  Trash2, 
  Eye, 
  TrendingUp, 
  Calendar, 
  ChevronRight,
  Zap,
  LayoutGrid,
  Crown
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const featuredTailors = [
  { id: "F-1", name: "Royal Stitch House", city: "New Delhi", performance: "+24%", views: "12.5k", expiry: "15 May 2026", slot: "Home Banner" },
  { id: "F-2", name: "Modern Fit Studio", city: "Mumbai", performance: "+18%", views: "8.2k", expiry: "20 May 2026", slot: "Trending Section" },
  { id: "F-3", name: "Elite Bespoke", city: "Bangalore", performance: "+32%", views: "5.4k", expiry: "10 Jun 2026", slot: "Category Page" },
];

export default function AdminFeaturedPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Featured Ecosystem</h1>
          <p className="text-muted-foreground">Manage platform promotions, sponsor slots, and featured partner visibility.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-xl h-11 font-bold flex gap-2 shadow-xl shadow-gold/20">
            <Plus className="w-4 h-4" /> Create Promotion
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: "Active Promotions", value: "12", icon: Star, color: "text-gold bg-gold/10" },
           { label: "Total Ad Impressions", value: "840k", icon: Eye, color: "text-blue-500 bg-blue-500/10" },
           { label: "Avg. Conversion", value: "8.4%", icon: TrendingUp, color: "text-green-500 bg-green-500/10" },
         ].map((stat) => (
           <Card key={stat.label} className="p-8 glass-card border-border/50 rounded-[2.5rem] flex items-center gap-6 group hover:border-gold/30 transition-all">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", stat.color)}>
                 <stat.icon className="w-8 h-8" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
                 <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              </div>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
         {/* Slot Management */}
         <div className="xl:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <LayoutGrid className="w-5 h-5 text-gold" />
                  <h3 className="text-xl font-bold tracking-tight">Active Promo Slots</h3>
               </div>
               <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Filter by slot..." className="h-9 pl-9 rounded-lg bg-card border-border/50 text-xs" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {featuredTailors.map((item) => (
                  <Card key={item.id} className="p-8 glass-card border-border/50 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4">
                        <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg">
                           {item.slot}
                        </Badge>
                     </div>
                     
                     <div className="space-y-8 relative z-10">
                        <div className="flex items-center gap-4">
                           <Avatar className="h-14 w-14 rounded-2xl border-2 border-border/50 group-hover:border-gold/30 transition-all duration-500">
                              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} className="group-hover:scale-110 transition-transform" />
                              <AvatarFallback>RT</AvatarFallback>
                           </Avatar>
                           <div>
                              <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{item.name}</h4>
                              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.city}</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="p-4 bg-muted/30 rounded-2xl space-y-1">
                              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Impressions</p>
                              <p className="text-lg font-bold">{item.views}</p>
                           </div>
                           <div className="p-4 bg-muted/30 rounded-2xl space-y-1">
                              <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Growth</p>
                              <p className="text-lg font-bold text-green-500">{item.performance}</p>
                           </div>
                        </div>

                        <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3 text-gold" />
                              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Expires: {item.expiry}</span>
                           </div>
                           <div className="flex gap-2">
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                                 <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all">
                                 <Trash2 className="w-4 h-4" />
                              </Button>
                           </div>
                        </div>
                     </div>
                  </Card>
               ))}
            </div>
         </div>

         {/* Available Inventory */}
         <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Promo Inventory</h3>
            <div className="space-y-4">
               {[
                 { name: "Global Header", price: "₹5,000/day", status: "Occupied", icon: Zap, color: "text-gold" },
                 { name: "Trending List (Pos 1)", price: "₹2,500/day", status: "Occupied", icon: Star, color: "text-blue-500" },
                 { name: "Trending List (Pos 2)", price: "₹2,000/day", status: "Available", icon: Star, color: "text-green-500" },
                 { name: "Search Top 3", price: "₹1,500/day", status: "Available", icon: LayoutGrid, color: "text-purple-500" },
                 { name: "Sidebar Widget", price: "₹800/day", status: "Available", icon: Crown, color: "text-teal-500" },
               ].map((slot) => (
                 <Card key={slot.name} className="p-6 glass-card border-border/50 rounded-[2rem] flex justify-between items-center group cursor-pointer hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-4">
                       <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-muted group-hover:scale-110 transition-transform", slot.color)}>
                          <slot.icon className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-sm font-bold tracking-tight group-hover:text-gold transition-colors">{slot.name}</p>
                          <p className="text-[10px] text-muted-foreground font-bold tracking-widest">{slot.price}</p>
                       </div>
                    </div>
                    <Badge variant="secondary" className={cn(
                      "text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-lg border-none",
                      slot.status === "Occupied" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                    )}>
                       {slot.status}
                    </Badge>
                 </Card>
               ))}
            </div>
            
            <Card className="p-8 bg-gold text-gold-foreground rounded-[2.5rem] space-y-4 shadow-xl shadow-gold/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20">
                  <TrendingUp className="w-16 h-16" />
               </div>
               <h4 className="text-lg font-bold tracking-tight">Inventory Health</h4>
               <p className="text-xs font-medium leading-relaxed opacity-90">
                  Platform featured slots are currently at 65% capacity. Suggested discount of 15% for new partners to increase adoption.
               </p>
               <Button className="w-full bg-black text-white hover:bg-black/90 rounded-2xl h-11 font-bold text-[10px] uppercase tracking-[0.2em] transition-all">Optimize Yield</Button>
            </Card>
         </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
