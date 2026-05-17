"use client";

import React from "react";
import { 
  BarChart as BarChartIcon, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Wallet,
  CheckCircle,
  Users,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { tailorKPIs } from "@/data/analytics-data";
import { RevenueChart } from "@/components/analytics/RevenueChart";
import { CategoryDistribution } from "@/components/analytics/CategoryDistribution";
import { KPIWidget } from "@/components/analytics/KPIWidget";
import { AIInsightCard } from "@/components/analytics/AIInsightCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TailorAnalyticsPage() {
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
                        Business Intelligence
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <Wallet className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Earning Hub</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Your Business <br />
                     <span className="text-gold">Insights</span> <span className="inline-block animate-bounce">📊</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Track your studio's revenue growth, customer retention, and service popularity with real-time analytics.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all">
                        <Download className="w-5 h-5 mr-2" /> Download Monthly Earnings
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        Manage Pricing
                     </Button>
                  </div>
               </div>

               {/* Growth Card */}
               <div className="p-10 rounded-[4rem] bg-foreground text-background shadow-2xl w-full lg:w-[450px] space-y-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex justify-between items-start relative z-10">
                     <div className="space-y-1">
                        <p className="text-[10px] font-black text-gold uppercase tracking-widest">Growth vs Last Month</p>
                        <h3 className="text-5xl font-black tracking-tighter">+24.5%</h3>
                     </div>
                     <div className="w-14 h-14 rounded-2xl bg-gold text-gold-foreground flex items-center justify-center shadow-xl">
                        <TrendingUp className="w-8 h-8" />
                     </div>
                  </div>
                  <div className="space-y-4 relative z-10">
                     <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-60">
                        <span>Projected Earnings</span>
                        <span>₹1.2L</span>
                     </div>
                     <div className="h-2 bg-background/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-gold rounded-full"
                        />
                     </div>
                  </div>
                  <Button className="w-full h-14 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                     View Payout History
                  </Button>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12 space-y-12">
         {/* KPI Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tailorKPIs.map((kpi, i) => (
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
              title="Optimize for Ethinc Wear" 
              description="Your Ethnic Wear services have a 95% satisfaction rate. Consider adding 'Express Delivery' to increase revenue by 15%." 
              icon="zap"
              badge="Growth Hack"
              delay={0.1}
            />
            <AIInsightCard 
              title="Peak Booking Hours" 
              description="Most of your orders come between 6PM - 9PM. Being active during this time could improve customer reply speed." 
              icon="trending"
              badge="Behavior Insight"
              delay={0.2}
            />
            <AIInsightCard 
              title="Customer Loyalty" 
              description="You have 12 repeat customers this month. Offering them a small discount could turn them into permanent clients." 
              icon="users"
              badge="Retention Tip"
              delay={0.3}
            />
         </div>
      </div>
    </div>
  );
}
