"use client";

import React from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Clock, 
  Package, 
  CheckCircle2, 
  Truck, 
  ExternalLink,
  ChevronRight,
  Scissors
} from "lucide-react";
import { orders } from "@/data/dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

const statuses = ["All", "Active", "Completed", "Cancelled"];

export default function OrdersPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Your Orders</h1>
          <p className="text-muted-foreground">Track and manage your tailoring bookings.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by Order ID..." 
              className="pl-12 rounded-xl bg-card border-border/50 h-11"
            />
          </div>
          <Button variant="outline" className="rounded-xl h-11 border-border/50">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border/50 pb-4">
        {statuses.map((status, i) => (
          <button 
            key={status} 
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
              i === 0 ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 gap-8">
        {orders.map((order) => (
          <Card key={order.id} className="glass-card border-border/50 p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-gold/30 transition-all duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
                {/* Info */}
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="p-3 bg-gold/10 rounded-2xl">
                         <ShoppingBag className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{order.id}</p>
                         <h3 className="text-xl font-bold">{order.service}</h3>
                      </div>
                   </div>
                   <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 bg-muted rounded-full overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${order.tailorName}`} alt="" />
                      </div>
                      <span className="text-muted-foreground font-medium">{order.tailorName}</span>
                   </div>
                </div>

                {/* Tracking */}
                <div className="lg:col-span-2 space-y-6">
                   <div className="flex justify-between items-end mb-2">
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Current Status</p>
                         <h4 className="font-bold flex items-center gap-2">
                            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                            {order.status}
                         </h4>
                      </div>
                      <span className="text-xs font-bold text-gold">{order.progress}%</span>
                   </div>
                   <Progress value={order.progress} className="h-2 bg-muted border-none [&>div]:bg-gold" />
                   
                   <div className="flex justify-between pt-2">
                      {[
                        { label: "Confirmed", icon: CheckCircle2, done: true },
                        { label: "Stitching", icon: Scissors, done: order.progress >= 20 },
                        { label: "Quality Check", icon: Package, done: order.progress >= 80 },
                        { label: "Delivered", icon: Truck, done: order.progress >= 100 },
                      ].map((step, i) => (
                        <div key={step.label} className="flex flex-col items-center gap-2">
                           <div className={cn(
                             "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                             step.done ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" : "bg-muted text-muted-foreground"
                           )}>
                              <step.icon className="w-4 h-4" />
                           </div>
                           <span className={cn(
                             "text-[9px] font-bold uppercase tracking-wider",
                             step.done ? "text-foreground" : "text-muted-foreground"
                           )}>{step.label}</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                   <div className="text-right mb-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Expected Delivery</p>
                      <p className="text-lg font-bold">{order.deliveryDate}</p>
                   </div>
                   <div className="flex gap-3">
                      <Button className="flex-1 bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-12 font-bold flex gap-2">
                         <ExternalLink className="w-4 h-4" /> Tracking
                      </Button>
                      <Button variant="outline" className="flex-1 rounded-xl h-12 border-border/50 font-bold">Details</Button>
                   </div>
                </div>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
