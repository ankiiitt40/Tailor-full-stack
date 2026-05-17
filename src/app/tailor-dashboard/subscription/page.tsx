"use client";

import React from "react";
import { 
  Check, 
  Zap, 
  Crown, 
  Star, 
  Rocket, 
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "Free",
    desc: "For small independent tailors just starting out.",
    icon: Star,
    features: [
      "Up to 10 Active Orders",
      "Basic Analytics",
      "StitchConnect Listing",
      "Standard Payout (T+3)",
    ],
    color: "bg-muted/50",
    text: "text-muted-foreground",
    button: "variant-outline"
  },
  {
    name: "Professional",
    price: "₹1,499",
    sub: "/ month",
    desc: "For growing studios handling multiple daily orders.",
    icon: Rocket,
    features: [
      "Unlimited Orders",
      "Advanced AI Insights",
      "Priority Listing in Search",
      "Express Payout (T+1)",
      "Discount Management",
      "Inventory Tracking"
    ],
    color: "bg-gold/10",
    text: "text-gold",
    button: "bg-gold",
    recommended: true
  },
  {
    name: "Elite",
    price: "₹4,999",
    sub: "/ month",
    desc: "The ultimate solution for high-end boutique houses.",
    icon: Crown,
    features: [
      "Everything in Professional",
      "Verified Master Badge",
      "Dedicated Account Manager",
      "Zero Platform Commissions",
      "Featured on Homepage",
      "Custom Studio URL"
    ],
    color: "bg-foreground",
    text: "text-white",
    button: "bg-gold",
    elite: true
  }
];

export default function TailorSubscriptionPage() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Grow your Craft with <span className="text-gold">TailorHub Pro</span></h1>
        <p className="text-muted-foreground">Unlock powerful business tools, increase your visibility, and scale your tailoring studio with our premium plans.</p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
           <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Monthly</span>
           <div className="w-12 h-6 bg-gold/10 rounded-full border border-gold/20 flex items-center px-1">
              <div className="w-4 h-4 bg-gold rounded-full" />
           </div>
           <span className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center gap-2">
              Yearly <Badge className="bg-green-500 text-white text-[8px] h-4 border-none">20% OFF</Badge>
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <Card className={cn(
              "h-full p-10 rounded-[3rem] border-border/50 flex flex-col justify-between space-y-10 transition-all duration-500 hover:border-gold/30 relative overflow-hidden",
              plan.elite ? "bg-foreground text-background shadow-2xl shadow-black/20" : "glass-card",
              plan.recommended && "border-gold/30 shadow-xl shadow-gold/5"
            )}>
               {plan.recommended && (
                 <div className="absolute top-6 right-6">
                    <Badge className="bg-gold text-gold-foreground border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1">Recommended</Badge>
                 </div>
               )}

               <div className="space-y-6">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", plan.color)}>
                     <plan.icon className={cn("w-8 h-8", plan.text)} />
                  </div>
                  <div className="space-y-2">
                     <h3 className={cn("text-2xl font-bold tracking-tight", plan.elite && "text-white")}>{plan.name}</h3>
                     <div className="flex items-baseline gap-1">
                        <span className={cn("text-4xl font-bold tracking-tight", plan.elite && "text-white")}>{plan.price}</span>
                        {plan.sub && <span className={cn("text-sm font-bold opacity-60", plan.elite ? "text-white" : "text-muted-foreground")}>{plan.sub}</span>}
                     </div>
                     <p className={cn("text-xs leading-relaxed", plan.elite ? "text-white/60" : "text-muted-foreground")}>{plan.desc}</p>
                  </div>
               </div>

               <div className="space-y-6 flex-1">
                  <div className={cn("h-px w-full", plan.elite ? "bg-white/10" : "bg-border/50")} />
                  <ul className="space-y-4">
                     {plan.features.map((feature) => (
                       <li key={feature} className="flex items-center gap-3">
                          <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.elite ? "bg-gold/20" : "bg-gold/10")}>
                             <Check className={cn("w-3 h-3", plan.elite ? "text-gold" : "text-gold")} />
                          </div>
                          <span className={cn("text-xs font-medium", plan.elite && "text-white/80")}>{feature}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               <Button className={cn(
                 "w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 active:scale-95",
                 plan.elite ? "bg-gold text-gold-foreground hover:bg-gold/90" : 
                 plan.recommended ? "bg-gold text-gold-foreground hover:bg-gold/90" : 
                 "bg-muted/50 text-foreground hover:bg-muted"
               )}>
                  {plan.price === "Free" ? "Current Plan" : "Upgrade Now"}
               </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Comparison Preview */}
      <Card className="p-12 glass-card border-border/50 rounded-[3.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
         <div className="space-y-4">
            <div className="p-3 bg-gold/10 rounded-2xl w-fit mx-auto md:mx-0">
               <TrendingUp className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-bold">45% Growth</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">Average growth reported by Professional partners in their first quarter.</p>
         </div>
         <div className="space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl w-fit mx-auto md:mx-0">
               <ShieldCheck className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-bold">Master Badge</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">A verified badge increases customer trust and order volume by up to 30%.</p>
         </div>
         <div className="space-y-4">
            <div className="p-3 bg-green-500/10 rounded-2xl w-fit mx-auto md:mx-0">
               <BarChart3 className="w-6 h-6 text-green-500" />
            </div>
            <h4 className="font-bold">AI Analytics</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">Get deep insights into what designs are trending in your specific locality.</p>
         </div>
         <div className="space-y-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl w-fit mx-auto md:mx-0">
               <Award className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-bold">Featured Listing</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">Appear at the top of search results and on the customer home feed.</p>
         </div>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
