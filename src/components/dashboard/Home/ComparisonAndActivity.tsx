"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  History, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  ShoppingBag,
  Heart,
  Palette,
  Star
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { activities } from "@/data/dashboard";
import { tailors } from "@/data/tailors";

export const ComparisonAndActivity = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Price Comparison Widget */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold tracking-tight">Price Comparison</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-gold font-bold text-xs">Full Compare <ArrowRight className="w-3 h-3 ml-1" /></Button>
        </div>

        <Card className="glass-card border-border/50 overflow-hidden rounded-[2rem]">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="font-bold text-xs uppercase tracking-widest pl-8">Tailor</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-widest text-center">Starting At</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-widest text-center">Delivery</TableHead>
                <TableHead className="font-bold text-xs uppercase tracking-widest text-right pr-8">Deal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tailors.slice(0, 4).map((tailor, i) => (
                <TableRow key={tailor.id} className="border-border/50 hover:bg-gold/5 transition-colors">
                  <TableCell className="font-medium py-4 pl-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-border/50">
                        <img src={tailor.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <span className="text-sm font-bold truncate max-w-[120px]">{tailor.shopName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-bold text-sm">₹{tailor.startingPrice}</TableCell>
                  <TableCell className="text-center text-xs text-muted-foreground">{tailor.deliveryTime}</TableCell>
                  <TableCell className="text-right pr-8">
                    {i === 0 && <Badge className="bg-green-500/10 text-green-500 border-none text-[10px] font-bold">Best Deal</Badge>}
                    {i === 1 && <Badge className="bg-gold/10 text-gold border-none text-[10px] font-bold">Fastest</Badge>}
                    {i > 1 && <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase">Compare</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Recent Activity Feed */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-gold" />
          <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
        </div>

        <Card className="glass-card border-border/50 p-6 rounded-[2rem] h-[340px] flex flex-col">
          <div className="space-y-6 flex-1 overflow-y-auto no-scrollbar pr-2">
            {activities.map((activity, index) => (
              <div key={activity.id} className="relative pl-8 pb-6 last:pb-0">
                {/* Timeline Line */}
                {index !== activities.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-border/50" />
                )}
                
                {/* Icon Circle */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center border-2 border-background z-10">
                   {activity.type === "order" && <ShoppingBag className="w-3 h-3 text-gold" />}
                   {activity.type === "shortlist" && <Heart className="w-3 h-3 text-red-500" />}
                   {activity.type === "design" && <Palette className="w-3 h-3 text-blue-500" />}
                   {activity.type === "review" && <Star className="w-3 h-3 text-gold fill-gold" />}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold">{activity.title}</h4>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{activity.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full text-xs font-bold text-muted-foreground hover:text-gold mt-4">
            View All Activity
          </Button>
        </Card>
      </div>
    </div>
  );
};
