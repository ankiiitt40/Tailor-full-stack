"use client";

import React from "react";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Star,
  ShoppingBag,
  Users,
  Award,
  Sparkles,
  Search,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";
import { AIInsightCard } from "@/components/analytics/AIInsightCard";
import { StyleRadar } from "@/components/matching/StyleRadar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TailorAIInsightsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* AI Hero */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Business Intelligence
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <Brain className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">AI Business Partner</span>
                     </div>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Smart Business <br />
                     <span className="text-gold">Intelligence</span> <span className="inline-block animate-pulse">🧠</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Our AI analyzes local fashion trends and customer behavior to help you optimize pricing, delivery, and services.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                     <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20">
                        <Zap className="w-5 h-5 mr-2" /> Optimize Pricing
                     </Button>
                     <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-border/50 text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all">
                        View Trend Report
                     </Button>
                  </div>
               </div>

               {/* Growth Projection Card */}
               <div className="p-10 rounded-[4rem] bg-foreground text-background shadow-2xl w-full lg:w-[450px] space-y-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="space-y-2 relative z-10">
                     <p className="text-[10px] font-black text-gold uppercase tracking-widest">AI Projected Revenue Growth</p>
                     <h3 className="text-6xl font-black tracking-tighter text-white">+32%</h3>
                     <p className="text-sm font-bold opacity-60">Predicted for the next quarter</p>
                  </div>
                  <div className="space-y-4 relative z-10">
                     <div className="flex justify-between items-end">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Optimization Status</p>
                        <p className="text-xs font-black text-gold">Highly Optimized</p>
                     </div>
                     <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        />
                     </div>
                  </div>
                  <Button className="w-full h-14 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                     Run Business Simulation
                  </Button>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12 space-y-16">
         {/* Top Insights Row */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AIInsightCard 
              title="Demand Spike Alert" 
              description="Bridal Lehengas are trending in New Delhi area. Increasing your visibility in this category could result in 5+ new bookings." 
              icon="trending"
              badge="Local Insight"
              delay={0.1}
            />
            <AIInsightCard 
              title="Price Optimization" 
              description="Users are looking for budget-friendly ethnic wear. Reducing your starting price by ₹500 could increase profile clicks by 40%." 
              icon="zap"
              badge="Pricing Hack"
              delay={0.2}
            />
            <AIInsightCard 
              title="Customer Satisfaction" 
              description="Your delivery speed is in the top 5% of the platform. Consider highlighting this on your profile for premium clients." 
              icon="award"
              badge="Performance Tip"
              delay={0.3}
            />
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 border-t border-border/50 pt-20">
            {/* Left: Trend Analysis */}
            <div className="xl:col-span-8 space-y-12">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                     <h2 className="text-4xl font-black tracking-tight">Fashion Trend Forecasting</h2>
                     <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">What your customers are searching for</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-gold" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: "Floral Embroidery", growth: "+45%", score: 92 },
                    { label: "Velvet Sherwanis", growth: "+38%", score: 85 },
                    { label: "Minimalist Pastel", growth: "+25%", score: 78 },
                    { label: "Silk Borders", growth: "+15%", score: 65 },
                  ].map((trend, i) => (
                    <motion.div 
                      key={trend.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 rounded-[3rem] bg-card border border-border/50 hover:border-gold/30 transition-all space-y-6 group"
                    >
                       <div className="flex justify-between items-start">
                          <h4 className="text-xl font-black tracking-tight">{trend.label}</h4>
                          <span className="text-green-500 font-black text-sm">{trend.growth}</span>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-60">
                             <span>Demand Score</span>
                             <span>{trend.score}/100</span>
                          </div>
                          <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                             <div className="h-full bg-gold rounded-full" style={{ width: `${trend.score}%` }} />
                          </div>
                       </div>
                       <Button variant="link" className="p-0 h-auto text-gold text-[10px] font-black uppercase tracking-widest group-hover:gap-2 transition-all">
                          View Design Inspirations <ArrowUpRight className="w-3 h-3 ml-1" />
                       </Button>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Right: Style Pulse */}
            <div className="xl:col-span-4 space-y-12">
               <div className="space-y-4">
                  <h3 className="text-xl font-black tracking-tight">Studio Style Profile</h3>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                     Based on your recent work, our AI has mapped your studio's expertise.
                  </p>
               </div>
               <StyleRadar />
               
               <div className="p-10 rounded-[4rem] bg-gold text-gold-foreground space-y-6 relative overflow-hidden group cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-50" />
                  <div className="flex items-center gap-3 relative z-10">
                     <Sparkles className="w-6 h-6" />
                     <h4 className="text-xl font-black tracking-tight leading-none">AI Business Tip</h4>
                  </div>
                  <p className="text-sm font-bold leading-relaxed relative z-10 italic">
                     "Expanding into 'Modern Casuals' could attract 120+ new users in your locality who currently travel 5km+ for these services."
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
