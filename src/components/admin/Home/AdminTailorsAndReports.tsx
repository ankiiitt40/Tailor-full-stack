"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  AlertTriangle, 
  Star, 
  TrendingUp, 
  ChevronRight, 
  ExternalLink,
  ShieldAlert,
  ArrowUpRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { platformReports } from "@/data/admin-dashboard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const topTailors = [
  { id: "T-1", name: "Royal Stitch House", revenue: "₹2.4L", orders: 156, rating: 4.9, growth: "+12%" },
  { id: "T-2", name: "Modern Fit Studio", revenue: "₹1.8L", orders: 124, rating: 4.7, growth: "+8%" },
  { id: "T-3", name: "Elite Bespoke", revenue: "₹1.5L", orders: 98, rating: 4.8, growth: "+15%" },
];

export const AdminTailorsAndReports = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Top Performing Tailors */}
      <div className="lg:col-span-2 space-y-8">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-bold">Top Performing Studios</h3>
           </div>
           <Button variant="ghost" size="sm" className="text-gold font-bold text-xs uppercase tracking-widest">Full Leaderboard <ChevronRight className="w-3 h-3 ml-1" /></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {topTailors.map((tailor, index) => (
             <Card key={tailor.id} className="p-8 glass-card border-border/50 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-gold/5 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                   <span className="text-3xl font-black text-gold/20 italic">#{index + 1}</span>
                </div>
                
                <div className="space-y-6 relative z-10">
                   <div className="space-y-1">
                      <h4 className="font-bold text-lg leading-tight group-hover:text-gold transition-colors">{tailor.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{tailor.id}</p>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                         <span className="text-muted-foreground">Revenue</span>
                         <span className="font-bold text-gold">{tailor.revenue}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                         <span className="text-muted-foreground">Orders</span>
                         <span className="font-bold">{tailor.orders}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                         <span className="text-muted-foreground">Rating</span>
                         <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-gold text-gold" />
                            <span className="font-bold">{tailor.rating}</span>
                         </div>
                      </div>
                   </div>

                   <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <div className="flex items-center gap-1.5 text-green-500 font-bold text-[10px]">
                         <ArrowUpRight className="w-3 h-3" /> {tailor.growth}
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-gold hover:text-gold-foreground transition-all">
                         <ExternalLink className="w-4 h-4" />
                      </Button>
                   </div>
                </div>
             </Card>
           ))}
        </div>
      </div>

      {/* Reports & Issues */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold">Platform Reports</h3>
           </div>
           <Badge variant="secondary" className="bg-red-500/10 text-red-500 border-none font-bold text-xs">3 Urgent</Badge>
        </div>

        <div className="space-y-4">
           {platformReports.map((report, index) => (
             <Card key={report.id} className="p-6 glass-card border-border/50 rounded-[2rem] space-y-4 group hover:border-red-500/30 transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{report.type}</p>
                      <h4 className="font-bold text-sm">Against: {report.targetName}</h4>
                   </div>
                   <Badge className={cn(
                     "text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 border-none",
                     report.priority === "High" ? "bg-red-500 text-white" : "bg-gold text-gold-foreground"
                   )}>
                      {report.priority}
                   </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2 italic">"{report.description}"</p>
                
                <div className="flex justify-between items-center pt-2 border-t border-border/50">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{report.status}</span>
                   </div>
                   <Button variant="ghost" size="sm" className="h-7 text-[9px] font-bold text-red-500 uppercase tracking-widest hover:bg-red-500/10">Take Action</Button>
                </div>
             </Card>
           ))}
           
           <Button variant="outline" className="w-full h-12 rounded-2xl border-border/50 font-bold text-[10px] uppercase tracking-widest hover:bg-muted transition-all">Review All Reports</Button>
        </div>
      </div>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
