"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { tailorOrders } from "@/data/tailor-dashboard";

const insights = [
  { title: "Trending", message: "Your blouse designs are trending! 🔥", desc: "+35% more views this week", icon: TrendingUp, color: "text-gold", bg: "bg-gold/10" },
  { title: "Efficiency", message: "Fast delivery increased bookings by 24%", desc: "Maintain 3-day turnaround", icon: Zap, color: "text-green-500", bg: "bg-green-500/10" },
  { title: "Opportunity", message: "Wedding tailoring demand is increasing", desc: "List new sherwani designs", icon: Sparkles, color: "text-blue-500", bg: "bg-blue-500/10" },
];

export const TailorOrdersAndAI = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Today's Orders */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold tracking-tight">Pending Orders</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-gold font-bold text-xs uppercase tracking-widest">
            Manage All <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tailorOrders.map((order) => (
            <Card key={order.id} className="glass-card border-border/50 p-6 rounded-3xl space-y-6 group hover:border-gold/30 transition-all duration-500">
               <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-gold/20">
                        <img src={order.customerAvatar} alt="" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h4 className="font-bold text-sm">{order.customerName}</h4>
                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{order.id}</p>
                     </div>
                  </div>
                  <Badge variant="secondary" className="bg-muted text-[10px] font-bold border-none px-2 py-0.5">
                     {order.status}
                  </Badge>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                     <span className="text-muted-foreground">{order.service}</span>
                     <span className="text-gold">₹{order.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-bold uppercase">
                       <span className="text-muted-foreground">Progress</span>
                       <span>{order.progress}%</span>
                    </div>
                    <Progress value={order.progress} className="h-1 bg-muted border-none [&>div]:bg-gold" />
                  </div>
               </div>

               <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                     <Clock className="w-3 h-3 text-red-500" />
                     <span className="text-[10px] text-muted-foreground font-bold uppercase">Due {order.deliveryDate}</span>
                  </div>
                  <div className="flex gap-2">
                     <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg bg-muted/50 hover:text-gold">
                        <MessageSquare className="w-4 h-4" />
                     </Button>
                     <Button size="sm" className="h-8 rounded-lg bg-gold text-gold-foreground text-[10px] font-bold uppercase px-3">
                        Accept
                     </Button>
                  </div>
               </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold" />
          <h2 className="text-xl font-bold tracking-tight">Partner Insights</h2>
        </div>

        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="p-5 glass-card rounded-[2rem] border-border/50 flex items-start gap-4 cursor-pointer hover:border-gold/30 transition-all group"
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm", insight.bg)}>
                <insight.icon className={cn("w-5 h-5", insight.color)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{insight.title}</span>
                  <Badge className="bg-gold/10 text-gold text-[8px] border-none px-1 h-3 rounded-sm font-bold">AI</Badge>
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1 leading-tight">{insight.message}</h4>
                <p className="text-[10px] text-muted-foreground font-medium">{insight.desc}</p>
              </div>
            </motion.div>
          ))}

          <Card className="p-6 bg-linear-to-br from-gold/10 to-transparent border-gold/10 rounded-[2rem] space-y-4">
             <div className="flex items-center gap-2">
                <div className="p-2 bg-gold/20 rounded-lg">
                   <TrendingUp className="w-4 h-4 text-gold" />
                </div>
                <h4 className="text-sm font-bold">Market Demand</h4>
             </div>
             <p className="text-[10px] text-muted-foreground leading-relaxed">
                Customers in <b>Hauz Khas</b> are searching for <b>"Indo-Western Wedding Wear"</b> 45% more than last week. Consider updating your catalog.
             </p>
             <Button variant="ghost" className="w-full text-[10px] font-bold text-gold uppercase tracking-widest hover:bg-gold/5 h-8">Analyze Trend</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
