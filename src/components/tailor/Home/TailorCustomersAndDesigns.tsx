"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Palette, 
  ChevronRight, 
  Eye, 
  Heart, 
  ShoppingBag,
  ExternalLink,
  Plus
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { shopCustomers } from "@/data/tailor-dashboard";
import { designs } from "@/data/designs";

export const TailorCustomersAndDesigns = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Top Customers */}
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold tracking-tight">Recent Customers</h2>
          </div>
          <Button variant="ghost" size="sm" className="text-gold font-bold text-xs uppercase tracking-widest">
            Directory <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-8">Customer</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Orders</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Total Spent</TableHead>
                <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-8">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shopCustomers.map((customer) => (
                <TableRow key={customer.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                  <TableCell className="font-medium py-5 pl-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-border/50">
                        <img src={customer.avatar} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-sm font-bold">{customer.name}</span>
                         <span className="text-[10px] text-muted-foreground">{customer.favoriteService} • {customer.lastOrder}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="bg-muted text-[10px] font-bold px-2 rounded-lg">
                       {customer.ordersCount} Orders
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center font-bold text-sm">₹{customer.totalSpent.toLocaleString()}</TableCell>
                  <TableCell className="text-right pr-8">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-gold hover:text-gold-foreground transition-all">
                       <ExternalLink className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* Top Designs */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-gold" />
            <h2 className="text-xl font-bold tracking-tight">Top Designs</h2>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-gold hover:text-gold-foreground">
             <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {designs.slice(0, 3).map((design, index) => (
            <motion.div
              key={design.id}
              whileHover={{ x: 5 }}
              className="p-3 glass-card rounded-2xl border-border/50 flex items-center gap-4 group cursor-pointer hover:border-gold/30 transition-all"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border/50">
                 <img src={design.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
              </div>
              <div className="flex-1 min-w-0 space-y-2">
                <div>
                   <h4 className="text-xs font-bold truncate">{design.title}</h4>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{design.category}</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span className="text-[10px] font-bold">{design.likes * 10}</span>
                   </div>
                   <div className="flex items-center gap-1 text-gold">
                      <ShoppingBag className="w-3 h-3" />
                      <span className="text-[10px] font-bold">{design.saves}</span>
                   </div>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg group-hover:text-gold">
                 <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
          
          <Button variant="outline" className="w-full h-12 rounded-2xl border-gold/20 bg-gold/5 text-gold font-bold text-[10px] uppercase tracking-widest hover:bg-gold/10 hover:border-gold/40 transition-all">
             Full Portfolio Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};
