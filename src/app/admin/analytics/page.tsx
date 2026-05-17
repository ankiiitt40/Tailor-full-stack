"use client";

import React from "react";
import { 
  BarChart as BarChartIcon, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  LayoutGrid,
  TrendingUp,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { adminKPIs } from "@/data/analytics-data";
import { RevenueChart } from "@/components/analytics/RevenueChart";
import { CategoryDistribution } from "@/components/analytics/CategoryDistribution";
import { KPIWidget } from "@/components/analytics/KPIWidget";
import { AIInsightCard } from "@/components/analytics/AIInsightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Analytics Hero */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Enterprise Intelligence
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Platform Data</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Platform <br />
                     <span className="text-gold">Intelligence</span> <span className="inline-block animate-bounce">📈</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Monitor global tailoring volume, revenue streams, and user engagement metrics with real-time fashion intelligence.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                        <Download className="w-5 h-5 mr-2" /> Export Global Report
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        <Calendar className="w-5 h-5 mr-2" /> Quarter Review
                     </Button>
                  </div>
               </div>

               {/* Live Pulse Widget */}
               <div className="p-10 rounded-[4rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-2xl w-full lg:w-[400px] space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full" />
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <h3 className="text-xl font-black tracking-tight">Live Platform Pulse</h3>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Active Now</span>
                        </div>
                     </div>
                     <BarChartIcon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="space-y-6">
                     {[
                       { label: "Bookings Today", value: "142", trend: "+12%" },
                       { label: "Active Tailors", value: "328", trend: "+5%" },
                       { label: "Revenue Today", value: "₹2.4L", trend: "+18%" },
                     ].map((stat) => (
                       <div key={stat.label} className="flex justify-between items-center">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          <div className="text-right">
                             <p className="text-lg font-black tracking-tight">{stat.value}</p>
                             <p className="text-[9px] font-bold text-green-500">{stat.trend}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12 space-y-12">
         {/* Filter Bar */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50">
            <div className="flex items-center gap-6 flex-1 w-full">
               <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <Input 
                    placeholder="Search by city, tailor, or service..." 
                    className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-medium focus-visible:ring-gold/30"
                  />
               </div>
               <Button variant="outline" className="h-14 px-8 rounded-2xl border-border/50 font-bold gap-2 hover:bg-gold/5 hover:text-gold transition-all">
                  <Filter className="w-4 h-4" /> Filters
               </Button>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
               {["Last 7 Days", "Last 30 Days", "Quarterly", "Yearly"].map((range, i) => (
                 <Button 
                   key={range}
                   variant="ghost" 
                   className={cn(
                     "h-14 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                     i === 1 ? "bg-gold text-gold-foreground" : "bg-muted/30 text-muted-foreground hover:bg-gold/10 hover:text-gold"
                   )}
                 >
                    {range}
                 </Button>
               ))}
            </div>
         </div>

         {/* KPI Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminKPIs.map((kpi, i) => (
              <KPIWidget key={kpi.label} stats={kpi} delay={i * 0.1} />
            ))}
         </div>

         {/* Charts Row */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
               <RevenueChart />
            </div>
            <div className="lg:col-span-4">
               <CategoryDistribution />
            </div>
         </div>

         {/* AI Insights & More */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AIInsightCard 
              title="Seasonal Bridal Surge" 
              description="Bridal tailoring bookings are predicted to increase by 45% in Bhopal region due to the upcoming wedding season." 
              icon="trending"
              badge="Predictive Analysis"
              delay={0.1}
            />
            <AIInsightCard 
              title="Revenue Optimization" 
              description="Implementing a premium membership for top 5% of users could increase platform retention by 22%." 
              icon="zap"
              badge="AI Suggestion"
              delay={0.2}
            />
            <AIInsightCard 
              title="Tailor Performance" 
              description="Tailors with 'Expert Fitting' badges are receiving 3.5x more bookings than non-certified partners." 
              icon="award"
              badge="Performance Insight"
              delay={0.3}
            />
         </div>
      </div>
    </div>
  );
}
