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
  ShoppingBag,
  Star,
  Sparkles,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { RevenueChart } from "@/components/analytics/RevenueChart";
import { CategoryDistribution } from "@/components/analytics/CategoryDistribution";
import { KPIWidget } from "@/components/analytics/KPIWidget";
import { AIInsightCard } from "@/components/analytics/AIInsightCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function UserAnalyticsPage() {
  const userKPIs = [
    { label: "Total Spending", value: "₹45,200", trend: 12.4, description: "Your investment in fashion", icon: "Wallet" },
    { label: "Completed Bookings", value: "12", trend: 20.0, description: "Successful fittings", icon: "CheckCircle" },
    { label: "Elite Points", value: "2,450", trend: 15.2, description: "Loyalty rewards earned", icon: "Award" },
    { label: "Style Score", value: "92/100", trend: 5.0, description: "Based on fashion metrics", icon: "Star" },
  ];

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
                        Personal Style Insights
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <Sparkles className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Fashionista</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Your Style <br />
                     <span className="text-gold">Intelligence</span> <span className="inline-block animate-bounce">✨</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Discover your fashion DNA. Track your tailoring investments, analyze your style preferences, and get AI recommendations.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                        View Style Profile
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        Download Fashion Report
                     </Button>
                  </div>
               </div>

               {/* Style Pulse Card */}
               <div className="p-10 rounded-[4rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-2xl w-full lg:w-[450px] space-y-8 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
                  <div className="flex justify-between items-start">
                     <div className="space-y-1">
                        <h3 className="text-xl font-black tracking-tight">Your Style Pulse</h3>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Trending for you</p>
                     </div>
                     <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-gold" />
                     </div>
                  </div>
                  <div className="space-y-6">
                     {[
                       { label: "Ethnic Wear", value: "65%", status: "High Demand" },
                       { label: "Bridal Wear", value: "25%", status: "Next Target" },
                       { label: "Formals", value: "10%", status: "Maintaining" },
                     ].map((stat) => (
                       <div key={stat.label} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                             <span>{stat.label}</span>
                             <span className="text-gold">{stat.status}</span>
                          </div>
                          <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                             <div className="h-full bg-gold rounded-full" style={{ width: stat.value }} />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12 space-y-12">
         {/* KPI Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userKPIs.map((kpi, i) => (
              <KPIWidget key={kpi.label} stats={kpi as any} delay={i * 0.1} />
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
              title="Style Prediction" 
              description="Based on your history, you'll likely need a new Sherwani by October. Booking now saves you 20% on express delivery." 
              icon="zap"
              badge="AI Style Forecast"
              delay={0.1}
            />
            <AIInsightCard 
              title="Category Mastery" 
              description="You are in the top 1% of Ethnic Wear enthusiasts on StitchConnect. You've earned the 'Ethnic Icon' badge!" 
              icon="award"
              badge="Milestone Reached"
              delay={0.2}
            />
            <AIInsightCard 
              title="Smart Savings" 
              description="Booking with 'Royal Stitch House' on weekdays saves you ₹500 on average. Try scheduling your next fitting for a Tuesday." 
              icon="trending"
              badge="Financial Tip"
              delay={0.3}
            />
         </div>
      </div>
    </div>
  );
}
