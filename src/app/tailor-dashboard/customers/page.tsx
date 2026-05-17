"use client";

import React from "react";
import { 
  Users, 
  Search, 
  Filter, 
  MessageSquare, 
  Phone, 
  MoreVertical, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { shopCustomers } from "@/data/tailor-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TailorCustomersPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Customer Directory</h1>
          <p className="text-muted-foreground">Manage your relationships and view customer order history.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold">
            Export CSV
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold flex gap-2">
            <UserPlus className="w-4 h-4" /> Add New Customer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] flex items-center gap-6 group hover:border-gold/30 transition-all">
           <div className="w-16 h-16 rounded-[1.5rem] bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-gold" />
           </div>
           <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Total Customers</p>
              <h3 className="text-3xl font-bold">1,248</h3>
           </div>
        </Card>
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] flex items-center gap-6 group hover:border-gold/30 transition-all">
           <div className="w-16 h-16 rounded-[1.5rem] bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-green-500" />
           </div>
           <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Retention Rate</p>
              <h3 className="text-3xl font-bold">84%</h3>
           </div>
        </Card>
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] flex items-center gap-6 group hover:border-gold/30 transition-all">
           <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8 text-blue-500" />
           </div>
           <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">New Inquiries</p>
              <h3 className="text-3xl font-bold">24</h3>
           </div>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
           {["All Customers", "Active", "Loyal", "New", "Inactive"].map((tab, i) => (
             <button 
               key={tab}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300",
                 i === 0 ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {tab}
             </button>
           ))}
        </div>

        <div className="relative w-full lg:w-64">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search by name or phone..." 
             className="pl-12 rounded-xl bg-card border-border/50 h-11"
           />
        </div>
      </div>

      <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="w-[300px] pl-8 font-bold text-[10px] uppercase tracking-widest">Customer Details</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Orders</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Total Revenue</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Engagement</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-widest">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shopCustomers.map((customer) => (
              <TableRow key={customer.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                <TableCell className="py-6 pl-8">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 rounded-[1.25rem] border border-border/50 group-hover:border-gold/30 transition-colors">
                      <AvatarImage src={customer.avatar} />
                      <AvatarFallback>{customer.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                       <span className="text-sm font-bold">{customer.name}</span>
                       <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{customer.favoriteService} Specialist</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-bold text-sm">
                   {customer.ordersCount} <span className="text-[10px] text-muted-foreground uppercase ml-1">Orders</span>
                </TableCell>
                <TableCell className="text-center font-bold text-sm text-gold">₹{customer.totalSpent.toLocaleString()}</TableCell>
                <TableCell className="text-center">
                   <div className="flex flex-col items-center">
                      <div className="flex gap-0.5 mb-1">
                         {[1,2,3,4,5].map(i => <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i <= 4 ? "bg-gold" : "bg-muted")} />)}
                      </div>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Active Partner</span>
                   </div>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end gap-2">
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <MessageSquare className="w-4 h-4" />
                     </Button>
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <Phone className="w-4 h-4" />
                     </Button>
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <MoreVertical className="w-4 h-4" />
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
