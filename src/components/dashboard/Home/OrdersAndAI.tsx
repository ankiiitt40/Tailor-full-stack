"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Sparkles, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  Zap,
  ArrowUpRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { orders } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const recommendations = [
  { title: "Best Budget", tailor: "Elegance Tailors", reason: "30% cheaper than average", icon: Zap, color: "text-green-500", bg: "bg-green-500/10" },
  { title: "Fast Delivery", tailor: "Modern Fit Studio", reason: "Ready in 2 days", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Trending", tailor: "Royal Stitch House", reason: "Most booked this week", icon: Sparkles, color: "text-gold", bg: "bg-gold/10" },
];

export const OrdersAndAI = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Active Orders Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold tracking-tight">Active Orders</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-gold font-bold text-xs">Track All <ArrowUpRight className="w-3 h-3 ml-1" /></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="glass-card border-border/50 p-6 rounded-3xl space-y-6 relative overflow-hidden group">
               {/* Background Shimmer */}
               <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
               
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{order.id}</p>
                     <h4 className="font-bold">{order.service}</h4>
                     <p className="text-xs text-muted-foreground">{order.tailorName}</p>
                  </div>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-none font-bold text-[10px] px-2 py-0.5 rounded-full">
                     {order.status}
                  </Badge>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold">
                     <span className="text-muted-foreground uppercase tracking-wider">Progress</span>
                     <span>{order.progress}%</span>
                  </div>
                  <Progress value={order.progress} className="h-1.5 bg-muted border-none [&>div]:bg-gold" />
               </div>

               <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                     <Clock className="w-3 h-3 text-muted-foreground" />
                     <span className="text-[10px] text-muted-foreground font-medium">Delivery: <span className="text-foreground">{order.deliveryDate}</span></span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-8 rounded-lg text-[10px] font-bold uppercase hover:text-gold">Details</Button>
               </div>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold" />
          <h2 className="text-xl font-bold tracking-tight">AI Insights</h2>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec) => (
            <motion.div
              key={rec.title}
              whileHover={{ x: 5 }}
              className="p-4 glass-card rounded-2xl border-border/50 flex items-center gap-4 group cursor-pointer hover:border-gold/30 transition-all"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm", rec.bg)}>
                <rec.icon className={cn("w-6 h-6", rec.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{rec.title}</span>
                  <Badge className="bg-gold/5 text-gold text-[8px] border-none px-1 h-3 rounded-sm">AI</Badge>
                </div>
                <h4 className="text-sm font-bold truncate">{rec.tailor}</h4>
                <p className="text-[10px] text-muted-foreground italic truncate">{rec.reason}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </motion.div>
          ))}
          
          <Button variant="outline" className="w-full h-12 rounded-2xl border-gold/20 bg-gold/5 text-gold font-bold text-xs hover:bg-gold/10 hover:border-gold/40">
             Personalize Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};
