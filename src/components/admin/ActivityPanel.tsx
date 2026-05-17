"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  IndianRupee,
  Users,
  Scissors
} from "lucide-react";
import { adminActivities } from "@/data/admin-dashboard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export const ActivityPanel = () => {
  return (
    <aside className="hidden xl:flex flex-col w-[350px] border-l border-border bg-card/30 backdrop-blur-sm">
      <div className="p-8 border-b border-border h-20 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4 text-gold" /> Live Activity
        </h3>
        <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-none text-[8px] animate-pulse">LIVE</Badge>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-8 space-y-10">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
             <Card className="p-4 bg-muted/30 border-border/50 rounded-2xl flex flex-col gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <div>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase">Online</p>
                   <p className="text-lg font-bold">1,248</p>
                </div>
             </Card>
             <Card className="p-4 bg-muted/30 border-border/50 rounded-2xl flex flex-col gap-2">
                <Scissors className="w-4 h-4 text-gold" />
                <div>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase">Working</p>
                   <p className="text-lg font-bold">452</p>
                </div>
             </Card>
          </div>

          {/* Activity List */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recent Events</h4>
            <div className="space-y-6 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-border/50" />
              {adminActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg",
                    activity.type === "order" ? "bg-blue-500" : 
                    activity.type === "payment" ? "bg-green-500" : "bg-gold"
                  )}>
                    {activity.type === "order" ? <CheckCircle2 className="w-4 h-4 text-white" /> : 
                     activity.type === "payment" ? <IndianRupee className="w-4 h-4 text-white" /> : 
                     <AlertCircle className="w-4 h-4 text-white" />}
                  </div>
                  <div className="space-y-1 pt-1">
                    <p className="text-xs font-bold leading-tight">{activity.title}</p>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{activity.description}</p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">{activity.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Revenue Update Widget */}
          <Card className="p-6 bg-linear-to-br from-gold/10 to-transparent border-gold/10 rounded-[2rem] space-y-4">
             <div className="flex justify-between items-center">
                <div className="p-2 bg-gold/20 rounded-lg">
                   <TrendingUp className="w-4 h-4 text-gold" />
                </div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Real-time Revenue</span>
             </div>
             <div className="space-y-1">
                <p className="text-3xl font-bold tracking-tight">₹8,42,150</p>
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">+ ₹12,400 today</p>
             </div>
             <div className="h-1 bg-muted rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "84%" }}
                   className="h-full bg-gold"
                />
             </div>
          </Card>
        </div>
      </ScrollArea>
      
      <div className="p-6 border-t border-border">
         <Button variant="ghost" className="w-full text-[10px] font-bold text-gold uppercase tracking-widest hover:bg-gold/5 flex gap-2">
            View System Logs <ChevronRight className="w-3 h-3" />
         </Button>
      </div>
    </aside>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
