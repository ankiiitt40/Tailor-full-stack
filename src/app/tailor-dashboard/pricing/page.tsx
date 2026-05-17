"use client";

import React from "react";
import { 
  Plus, 
  IndianRupee, 
  Clock, 
  Trash2, 
  Edit3, 
  HelpCircle,
  CheckCircle2,
  Zap,
  TrendingUp,
  Tag
} from "lucide-react";
import { servicePricing } from "@/data/tailor-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TailorPricingPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Service Pricing</h1>
          <p className="text-muted-foreground">Manage your tailoring services, base prices, and delivery times.</p>
        </div>
        
        <Button className="bg-gold text-gold-foreground rounded-xl h-12 px-8 font-bold flex gap-2 shadow-xl shadow-gold/20 transition-all hover:scale-105 active:scale-95">
          <Plus className="w-4 h-4" /> Add New Service
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pricing Analytics Summary */}
        <Card className="p-8 glass-card border-gold/10 bg-gold/5 rounded-[2.5rem] flex flex-col justify-between space-y-8">
           <div className="space-y-6">
              <div className="p-4 bg-gold rounded-2xl w-fit shadow-xl shadow-gold/20">
                 <TrendingUp className="w-8 h-8 text-gold-foreground" />
              </div>
              <div className="space-y-2">
                 <h3 className="text-2xl font-bold">Pricing Strategy</h3>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                    Your current prices are <span className="text-gold font-bold">15% higher</span> than the local average, but your conversion rate remains top-tier (4.8%).
                 </p>
              </div>
           </div>
           
           <div className="space-y-4 pt-6 border-t border-gold/10">
              <div className="flex justify-between items-center text-sm">
                 <span className="text-muted-foreground">Market Position</span>
                 <span className="font-bold text-gold">Premium</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-muted-foreground">Active Coupons</span>
                 <span className="font-bold">2 Active</span>
              </div>
              <Button variant="outline" className="w-full border-gold/20 text-gold hover:bg-gold/10 rounded-xl font-bold h-11">Manage Discounts</Button>
           </div>
        </Card>

        {/* Global Delivery Settings */}
        <Card className="lg:col-span-2 p-8 glass-card border-border/50 rounded-[2.5rem] relative overflow-hidden">
           <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-bold">Global Delivery Setup</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-muted/30 rounded-3xl border border-border/50">
                 <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm">Express Delivery</h4>
                    <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] h-4">ENABLED</Badge>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Extra Charge (₹)</label>
                    <Input defaultValue="500" className="h-11 rounded-xl bg-background border-none" />
                 </div>
              </div>

              <div className="space-y-4 p-6 bg-muted/30 rounded-3xl border border-border/50">
                 <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm">Fabric Sourcing</h4>
                    <Badge className="bg-gold/10 text-gold border-none text-[8px] h-4">ENABLED</Badge>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Procurement Fee (₹)</label>
                    <Input defaultValue="250" className="h-11 rounded-xl bg-background border-none" />
                 </div>
              </div>
           </div>
           
           <div className="mt-8 pt-6 border-t border-border/50 flex justify-end">
              <Button className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl px-8 font-bold h-11 transition-all">Save Global Settings</Button>
           </div>
        </Card>
      </div>

      {/* Services Table */}
      <Card className="glass-card border-border/50 rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-border/50 flex justify-between items-center bg-muted/30">
           <div className="space-y-1">
              <h3 className="text-xl font-bold">Service Catalog</h3>
              <p className="text-xs text-muted-foreground">Update individual stitching and alteration costs.</p>
           </div>
           <div className="relative w-64">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Filter by category..." className="pl-12 rounded-xl bg-background h-10 border-none" />
           </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="w-[300px] pl-8 font-bold text-[10px] uppercase tracking-[0.2em]">Service Name</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Category</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Base Price</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Delivery Days</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Popularity</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-[0.2em]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {servicePricing.map((service) => (
              <TableRow key={service.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                <TableCell className="py-6 pl-8">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg group-hover:bg-gold/20 transition-colors">
                         <Zap className="w-4 h-4 text-muted-foreground group-hover:text-gold" />
                      </div>
                      <span className="font-bold text-sm">{service.name}</span>
                   </div>
                </TableCell>
                <TableCell className="text-center font-medium text-xs">
                   <Badge variant="secondary" className="bg-muted text-[10px] font-bold px-2 py-0.5 border-none">
                      {service.category}
                   </Badge>
                </TableCell>
                <TableCell className="text-center font-bold text-sm text-gold">₹{service.basePrice.toLocaleString()}</TableCell>
                <TableCell className="text-center font-medium text-xs">
                   <div className="flex items-center justify-center gap-1.5">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      {service.deliveryDays} Days
                   </div>
                </TableCell>
                <TableCell className="text-center">
                   {service.isPopular ? (
                     <Badge className="bg-gold/10 text-gold border-none text-[10px] font-bold px-3 py-1">Trending 🔥</Badge>
                   ) : (
                     <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-40">Stable</span>
                   )}
                </TableCell>
                <TableCell className="text-right pr-8">
                   <div className="flex justify-end gap-2">
                      <TooltipProvider>
                         <Tooltip>
                            <TooltipTrigger>
                               <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-muted">
                                  <Edit3 className="w-4 h-4" />
                               </Button>
                            </TooltipTrigger>
                            <TooltipContent>Edit Price</TooltipContent>
                         </Tooltip>
                      </TooltipProvider>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-red-500/10 hover:text-red-500">
                         <Trash2 className="w-4 h-4" />
                      </Button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
