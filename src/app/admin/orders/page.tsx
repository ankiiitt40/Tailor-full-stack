"use client";

import React from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  IndianRupee, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Truck,
  ArrowRight
} from "lucide-react";
import { orders } from "@/data/dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminOrdersPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Global Orders</h1>
          <p className="text-muted-foreground">Monitor platform-wide transactions, tracking, and delivery status.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Card className="flex items-center gap-4 px-6 h-14 bg-muted/50 border-border/50 rounded-2xl">
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Total Value</span>
                <span className="text-xl font-bold tracking-tight">₹12.4L</span>
             </div>
             <div className="h-8 w-px bg-border/50" />
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Platform Fee</span>
                <span className="text-xl font-bold tracking-tight text-gold">₹1.8L</span>
             </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
           {["All Orders", "Pending", "Stitching", "Ready", "Delivered", "Cancelled"].map((status, i) => (
             <button 
               key={status}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300",
                 i === 0 ? "bg-foreground text-background shadow-lg shadow-black/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {status}
             </button>
           ))}
        </div>

        <div className="relative flex-1 lg:w-80">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search by Order ID, Tailor or Customer..." 
             className="pl-12 rounded-xl bg-card border-border/50 h-11"
           />
        </div>
      </div>

      <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="pl-8 font-bold text-[10px] uppercase tracking-[0.2em]">Order Details</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Fulfillment</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Value</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Commission</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Status</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-[0.2em]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                <TableCell className="py-6 pl-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-gold uppercase tracking-widest">{order.id}</span>
                    <span className="text-sm font-bold truncate">{order.service}</span>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                       <span>Tailor: {order.tailorName}</span>
                       <ArrowRight className="w-2 h-2" />
                       <span>Customer: Rahul S.</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                         <Clock className="w-3 h-3" /> {order.deliveryDate}
                      </div>
                      <Badge variant="secondary" className="bg-muted text-[8px] font-bold px-2 py-0.5 rounded-lg border-none">Standard</Badge>
                   </div>
                </TableCell>
                <TableCell className="text-center font-bold text-sm">₹{order.price.toLocaleString()}</TableCell>
                <TableCell className="text-center font-bold text-sm text-gold">₹{(order.price * 0.15).toLocaleString()}</TableCell>
                <TableCell className="text-center">
                   <Badge className={cn(
                     "text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-none rounded-full",
                     order.status === "Delivered" ? "bg-green-500/10 text-green-500" : 
                     order.status === "Stitching" ? "bg-blue-500/10 text-blue-500" : "bg-gold/10 text-gold"
                   )}>
                      {order.status}
                   </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end gap-2">
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <Eye className="w-4 h-4" />
                     </Button>
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <Truck className="w-4 h-4" />
                     </Button>
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all text-red-500">
                        <AlertCircle className="w-4 h-4" />
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
