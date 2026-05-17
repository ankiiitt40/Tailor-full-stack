"use client";

import React from "react";
import { 
  CreditCard, 
  TrendingUp, 
  Award, 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  History,
  ShieldCheck,
  Zap,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { PaymentHistory } from "@/components/payment/PaymentHistory";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function PaymentsDashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
         
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Fintech Analytics
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Encrypted Data Hub</span>
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                     Secure Your <br />
                     <span className="text-gold">Transactions</span> <span className="inline-block animate-bounce">💳</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium max-w-xl">
                     Track your tailoring investments, manage invoices, and monitor your StitchWallet balance in one secure dashboard.
                  </p>
               </div>

               {/* Wallet Card */}
               <div className="w-full lg:w-[450px] p-10 rounded-[3.5rem] bg-foreground text-background shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="space-y-10 relative z-10">
                     <div className="flex justify-between items-start">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-gold uppercase tracking-widest">StitchWallet Balance</p>
                           <h2 className="text-5xl font-black tracking-tighter">₹2,450.00</h2>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-gold text-gold-foreground flex items-center justify-center shadow-xl">
                           <Wallet className="w-8 h-8" />
                        </div>
                     </div>

                     <div className="flex items-center gap-6">
                        <div className="space-y-1">
                           <p className="text-[8px] font-black opacity-40 uppercase tracking-widest">Cashback Earned</p>
                           <p className="text-sm font-black text-gold">₹450.00</p>
                        </div>
                        <div className="w-px h-8 bg-background/10" />
                        <div className="space-y-1">
                           <p className="text-[8px] font-black opacity-40 uppercase tracking-widest">Elite Points</p>
                           <p className="text-sm font-black text-gold">1,250 Pts</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <Button className="flex-1 h-14 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest shadow-xl transition-all">
                           <Plus className="w-4 h-4 mr-2" /> Top Up
                        </Button>
                        <Button variant="outline" className="flex-1 h-14 rounded-2xl border-background/20 font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                           Redeem
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Main History Feed */}
            <main className="xl:col-span-8">
               <div className="flex items-center justify-between mb-8">
                  <div className="space-y-1">
                     <h2 className="text-3xl font-black tracking-tight">Payment Activity</h2>
                     <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Realtime transaction logging</p>
                  </div>
                  <History className="w-6 h-6 text-muted-foreground" />
               </div>
               
               <PaymentHistory />
            </main>

            {/* Analytics Sidebar */}
            <aside className="xl:col-span-4 space-y-12">
               
               {/* Spending Chart Mock */}
               <div className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full" />
                  <div className="flex items-center justify-between">
                     <h3 className="text-xl font-black tracking-tight">Spending Insights</h3>
                     <TrendingUp className="w-5 h-5 text-gold" />
                  </div>
                  
                  <div className="space-y-6">
                     {[
                       { label: "Ethnic Wear", value: 65, color: "bg-gold" },
                       { label: "Formals", value: 25, color: "bg-foreground" },
                       { label: "Casuals", value: 10, color: "bg-muted-foreground" },
                     ].map((stat) => (
                       <div key={stat.label} className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                             <span>{stat.label}</span>
                             <span>{stat.value}%</span>
                          </div>
                          <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${stat.value}%` }}
                               transition={{ duration: 1, delay: 0.5 }}
                               className={cn("h-full rounded-full", stat.color)}
                             />
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="pt-4 p-6 rounded-[2rem] bg-gold/5 border border-gold/20 space-y-2">
                     <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gold" />
                        <span className="text-[10px] font-black text-gold uppercase tracking-widest">AI Financial Tip</span>
                     </div>
                     <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        You spent 15% more on ethnic wear this month. Consider upgrading to "Elite Member" to save ₹1,200 annually.
                     </p>
                  </div>
               </div>

               {/* Loyalty Card */}
               <div className="p-8 rounded-[3rem] bg-gold text-gold-foreground space-y-6 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 blur-3xl rounded-full -mb-16 -mr-16" />
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                        <Award className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Loyalty Status</p>
                        <h4 className="text-lg font-black tracking-tight">Silver Tier Elite</h4>
                     </div>
                  </div>
                  <p className="text-sm font-bold leading-relaxed">
                     Spend ₹7,550 more to unlock <span className="underline font-black">Gold Tier</span> benefits including free express delivery.
                  </p>
                  <Button className="w-full h-12 rounded-xl bg-black text-white hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest transition-all">
                     View Rewards Profile
                  </Button>
               </div>
            </aside>
         </div>
      </div>
    </div>
  );
}
