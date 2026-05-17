"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Download,
  LayoutGrid,
  List
} from "lucide-react";
import { tailorOrders } from "@/data/tailor-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { bookingService } from "@/services/bookings.service";

const statuses = ["All Orders", "Pending", "Accepted", "Stitching", "Ready", "Delivered"];

export default function TailorOrdersPage() {
  const [view, setView] = useState<"table" | "grid">("table");
  const [activeTab, setActiveTab] = useState("All Orders");
  const [orders, setOrders] = useState(tailorOrders);

  const handleUpdateStatus = async (orderId: string, status: string) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: status as any } : o));
    toast.success(`Order ${orderId} updated to ${status}!`);
    try {
      await bookingService.updateBookingStatus(orderId, status as any);
    } catch (e) {
      console.warn("Firestore order update failed (offline/mock):", e);
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Order Management</h1>
          <p className="text-muted-foreground">Manage incoming bookings and update stitching status.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 gap-2 font-bold">
            <Download className="w-4 h-4" /> Export
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold flex gap-2">
            Add Offline Order
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
           {statuses.map((status) => (
             <button 
               key={status}
               onClick={() => setActiveTab(status)}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300",
                 activeTab === status 
                   ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" 
                   : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {status}
             </button>
           ))}
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
           <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search by ID or customer..." 
                className="pl-12 rounded-xl bg-card border-border/50 h-11"
              />
           </div>
           <div className="flex bg-muted/50 p-1 rounded-xl border border-border/50">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setView("table")}
                className={cn("h-9 w-9 rounded-lg", view === "table" ? "bg-background shadow-sm text-gold" : "text-muted-foreground")}
              >
                 <List className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setView("grid")}
                className={cn("h-9 w-9 rounded-lg", view === "grid" ? "bg-background shadow-sm text-gold" : "text-muted-foreground")}
              >
                 <LayoutGrid className="w-4 h-4" />
              </Button>
           </div>
        </div>
      </div>

      {/* Content */}
      {view === "table" ? (
        <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
           <Table>
              <TableHeader className="bg-muted/50">
                 <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-8">Order Details</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Customer</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Price</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Deadline</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Status</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-8">Actions</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {orders
                   .filter(order => activeTab === "All Orders" ? true : order.status === activeTab)
                   .map((order) => (
                    <TableRow key={order.id} className="border-border/50 hover:bg-gold/5 transition-colors">
                       <TableCell className="py-6 pl-8">
                          <div className="space-y-1">
                             <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{order.id}</span>
                             <h4 className="text-sm font-bold">{order.service}</h4>
                          </div>
                       </TableCell>
                       <TableCell>
                          <div className="flex items-center gap-3">
                             <div className="w-9 h-9 rounded-xl overflow-hidden border border-border/50">
                                <img src={order.customerAvatar} alt="" />
                             </div>
                             <span className="text-sm font-medium">{order.customerName}</span>
                          </div>
                       </TableCell>
                       <TableCell className="text-center font-bold">₹{order.price.toLocaleString()}</TableCell>
                       <TableCell className="text-center">
                          <div className="flex flex-col items-center">
                             <span className="text-xs font-medium">{order.deliveryDate}</span>
                             <span className="text-[10px] text-red-500 font-bold">{order.time}</span>
                          </div>
                       </TableCell>
                       <TableCell className="text-center">
                          <Badge variant="secondary" className={cn(
                            "bg-muted border-none text-[10px] font-bold px-3 py-1 rounded-full",
                            order.status === "Stitching" && "bg-blue-500/10 text-blue-500",
                            order.status === "Pending" && "bg-gold/10 text-gold",
                            order.status === "Accepted" && "bg-green-500/10 text-green-500",
                            order.status === "Ready" && "bg-purple-500/10 text-purple-500",
                            order.status === "Delivered" && "bg-teal-500/10 text-teal-500"
                          )}>
                             {order.status}
                          </Badge>
                       </TableCell>
                       <TableCell className="text-right pr-8">
                          <div className="flex justify-end gap-2">
                             <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:text-gold transition-colors">
                                <Eye className="w-4 h-4" />
                             </Button>
                             <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                   <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:text-gold">
                                      <MoreVertical className="w-4 h-4" />
                                   </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="glass border-gold/20 p-2">
                                   <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => handleUpdateStatus(order.id, "Accepted")}>
                                      <CheckCircle2 className="w-4 h-4 text-green-500" /> Accept Order
                                   </DropdownMenuItem>
                                   <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => handleUpdateStatus(order.id, "Stitching")}>
                                      <Clock className="w-4 h-4 text-gold" /> Update Status (Stitching)
                                   </DropdownMenuItem>
                                   <DropdownMenuSeparator className="bg-gold/10" />
                                   <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer text-red-500" onClick={() => handleUpdateStatus(order.id, "Rejected")}>
                                      <XCircle className="w-4 h-4" /> Reject Order
                                   </DropdownMenuItem>
                                </DropdownMenuContent>
                             </DropdownMenu>
                          </div>
                       </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
           </Table>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {orders
              .filter(order => activeTab === "All Orders" ? true : order.status === activeTab)
              .map((order) => (
              <Card key={order.id} className="glass-card border-border/50 p-6 rounded-[2rem] space-y-6 hover:border-gold/30 transition-all duration-500 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[4rem] flex items-center justify-center translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-6 h-6 text-gold/30" />
                 </div>
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-start">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-gold uppercase tracking-widest">{order.id}</p>
                          <h4 className="text-xl font-bold">{order.service}</h4>
                       </div>
                       <Badge variant="secondary" className="bg-muted text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {order.status}
                       </Badge>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-2xl">
                       <div className="w-10 h-10 rounded-xl overflow-hidden border border-border/50">
                          <img src={order.customerAvatar} alt="" />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-sm font-bold">{order.customerName}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Premium Customer</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-between items-end pt-4 border-t border-border/50">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Amount</p>
                       <p className="text-lg font-bold">₹{order.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Deadline</p>
                       <p className="text-sm font-bold text-red-500">{order.deliveryDate}</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold text-xs uppercase" onClick={() => handleUpdateStatus(order.id, "Accepted")}>Accept</Button>
                    <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold text-xs uppercase" onClick={() => handleUpdateStatus(order.id, "Stitching")}>Stitch</Button>
                 </div>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
