"use client";

import React from "react";
import { 
  CreditCard, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Crown, 
  Zap, 
  CheckCircle2, 
  Download,
  Users,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const subscriptionPlans = [
  { name: "Elite Partner", price: "₹2,499/mo", subscribers: 156, revenue: "₹3.9L", growth: "+12%", color: "text-gold bg-gold/10", icon: Crown },
  { name: "Pro Studio", price: "₹999/mo", subscribers: 212, revenue: "₹2.1L", growth: "+8%", color: "text-blue-500 bg-blue-500/10", icon: Zap },
  { name: "Starter Shop", price: "₹499/mo", subscribers: 44, revenue: "₹0.2L", growth: "+2%", color: "text-muted-foreground bg-muted", icon: CreditCard },
];

export default function AdminSubscriptionsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">SaaS Ecosystem</h1>
          <p className="text-muted-foreground">Manage partner subscription tiers, monitor MRR, and track plan adoption.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold gap-2">
            <Download className="w-4 h-4" /> Revenue Report
          </Button>
          <Button className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-11 font-bold gap-2 shadow-xl shadow-black/5 transition-all">
            <CreditCard className="w-4 h-4" /> Manage Pricing
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {subscriptionPlans.map((plan) => (
           <Card key={plan.name} className="p-8 glass-card border-border/50 rounded-[2.5rem] space-y-8 group hover:border-gold/30 transition-all duration-500 relative overflow-hidden">
              <div className="flex justify-between items-start">
                 <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", plan.color)}>
                    <plan.icon className="w-7 h-7" />
                 </div>
                 <div className="flex flex-col items-end">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-none text-[8px] font-bold tracking-[0.2em]">{plan.growth} GROWTH</Badge>
                    <p className="text-xl font-bold mt-2">{plan.price}</p>
                 </div>
              </div>

              <div className="space-y-4">
                 <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                 <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground font-bold uppercase tracking-widest text-[9px]">Active Subscriptions</span>
                    <span className="font-bold">{plan.subscribers} Partners</span>
                 </div>
                 <Progress value={65} className="h-1.5 bg-muted border-none [&>div]:bg-gold" />
              </div>

              <div className="pt-6 border-t border-border/50 flex justify-between items-center">
                 <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Monthly MRR</p>
                    <p className="text-xl font-bold text-gold">{plan.revenue}</p>
                 </div>
                 <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold hover:text-gold-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                 </Button>
              </div>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <Card className="lg:col-span-2 p-10 glass-card border-border/50 rounded-[3rem] space-y-8">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  <h3 className="text-xl font-bold">Churn & Retention Trends</h3>
               </div>
               <Badge className="bg-green-500/10 text-green-500 border-none font-bold text-xs">94.2% Retention</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { label: "New Subs", value: "+42", trend: "up" },
                 { label: "Upgrades", value: "18", trend: "up" },
                 { label: "Churned", value: "4", trend: "down" },
               ].map((stat) => (
                 <div key={stat.label} className="p-6 bg-muted/30 rounded-3xl border border-border/50 space-y-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">{stat.label}</p>
                    <p className={cn("text-2xl font-bold tracking-tight", stat.trend === "up" ? "text-green-500" : "text-red-500")}>
                       {stat.value}
                    </p>
                 </div>
               ))}
            </div>

            <div className="p-8 bg-muted/30 rounded-[2.5rem] border border-border/50 flex flex-col md:flex-row items-center gap-8">
               <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Crown className="w-8 h-8 text-gold" />
               </div>
               <div className="flex-1 text-center md:text-left space-y-1">
                  <h4 className="font-bold text-lg leading-tight">Plan Upgrade Recommendation</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                     85% of 'Pro Studio' partners are hitting their order limit. It's time to offer a 'Limited Time Elite Upgrade' discount to boost MRR.
                  </p>
               </div>
               <Button className="bg-gold text-gold-foreground rounded-2xl h-12 px-8 font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">Create Offer</Button>
            </div>
         </Card>

         <Card className="p-10 glass-card border-border/50 rounded-[3rem] space-y-8">
            <div className="flex items-center gap-3">
               <Users className="w-5 h-5 text-gold" />
               <h3 className="text-xl font-bold">Recent Signups</h3>
            </div>
            <div className="space-y-6">
               {[
                 { name: "Royal Stitch House", plan: "Elite Partner", date: "2h ago" },
                 { name: "Modern Fit Studio", plan: "Pro Studio", date: "5h ago" },
                 { name: "The Fit Masters", plan: "Pro Studio", date: "Yesterday" },
                 { name: "Elite Bespoke", plan: "Elite Partner", date: "Yesterday" },
               ].map((sub, i) => (
                 <div key={i} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex flex-col gap-0.5">
                       <span className="text-sm font-bold group-hover:text-gold transition-colors">{sub.name}</span>
                       <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{sub.plan}</span>
                    </div>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{sub.date}</span>
                 </div>
               ))}
               <Button variant="ghost" className="w-full text-[10px] font-bold text-gold uppercase tracking-widest hover:bg-gold/5 flex gap-2">
                  View Full Member List <ExternalLink className="w-3 h-3" />
               </Button>
            </div>
         </Card>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
