"use client";

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  IndianRupee, 
  ShieldCheck, 
  Clock, 
  MoreVertical, 
  ExternalLink,
  CheckCircle2,
  XCircle,
  Scissors
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data = [
  { month: "Jan", revenue: 450000 },
  { month: "Feb", revenue: 520000 },
  { month: "Mar", revenue: 480000 },
  { month: "Apr", revenue: 610000 },
  { month: "May", revenue: 840000 },
  { month: "Jun", revenue: 950000 },
];

const pendingTailors = [
  { id: "VT-001", name: "Elite Bespoke", owner: "Rajesh Iyer", exp: "12 Yrs", status: "Priority" },
  { id: "VT-002", name: "The Fit Masters", owner: "Sarah Khan", exp: "8 Yrs", status: "New" },
  { id: "VT-003", name: "Royal Cuts", owner: "Amit Verma", exp: "15 Yrs", status: "Express" },
];

export const AdminMainSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
      {/* Platform Revenue Chart */}
      <Card className="lg:col-span-2 p-10 glass-card border-border/50 rounded-[3rem] relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight">Platform Revenue Growth</h3>
            <p className="text-sm text-muted-foreground">Monthly commission and subscription earnings.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" className="rounded-xl h-10 text-xs font-bold border-border/50">Last 6 Months</Button>
             <Button className="bg-gold text-gold-foreground rounded-xl h-10 text-xs font-bold">Download PDF</Button>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenueAdmin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `₹${value / 100000}L`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(0,0,0,0.8)", 
                  border: "none", 
                  borderRadius: "16px",
                  color: "white",
                  backdropFilter: "blur(10px)"
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#D4AF37" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorRevenueAdmin)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-3 gap-8">
           <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Subscriptions</p>
              <p className="text-xl font-bold">₹2.4L</p>
           </div>
           <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Commissions</p>
              <p className="text-xl font-bold">₹5.8L</p>
           </div>
           <div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Promotions</p>
              <p className="text-xl font-bold">₹0.2L</p>
           </div>
        </div>
      </Card>

      {/* Verification Queue */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-bold">Verification Queue</h3>
           </div>
           <Badge className="bg-gold/10 text-gold border-none font-bold text-xs">{pendingTailors.length}</Badge>
        </div>

        <div className="space-y-6">
           {pendingTailors.map((tailor) => (
             <Card key={tailor.id} className="p-6 glass-card border-border/50 rounded-[2.5rem] group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-[2rem] flex items-center justify-center translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
                   <Clock className="w-4 h-4 text-gold/30" />
                </div>
                
                <div className="space-y-6 relative z-10">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center border border-border/50 group-hover:border-gold/30 transition-colors">
                            <Scissors className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg leading-tight">{tailor.name}</h4>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{tailor.owner}</p>
                         </div>
                      </div>
                      <Badge variant="secondary" className="bg-muted text-[8px] font-bold uppercase tracking-widest px-2 py-0.5">
                         {tailor.status}
                      </Badge>
                   </div>

                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-2xl">
                      <div className="space-y-0.5">
                         <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Experience</p>
                         <p className="text-xs font-bold">{tailor.exp}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 text-[9px] font-bold text-gold uppercase tracking-widest hover:bg-gold/5">View Documents</Button>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                      <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold text-xs uppercase shadow-lg shadow-gold/10">Approve</Button>
                      <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold text-xs uppercase hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20">Reject</Button>
                   </div>
                </div>
             </Card>
           ))}
           
           <Button variant="ghost" className="w-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-gold">View Full Verification Queue</Button>
        </div>
      </div>
    </div>
  );
};
