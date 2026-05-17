"use client";

import React from "react";
import { 
  Wallet, 
  IndianRupee, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Download, 
  Filter, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  CreditCard
} from "lucide-react";
import { earningsHistory } from "@/data/tailor-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TailorEarningsPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Earnings & Payouts</h1>
          <p className="text-muted-foreground">Manage your shop's revenue, track payments, and request withdrawals.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold gap-2">
            <Download className="w-4 h-4" /> Statement
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold shadow-xl shadow-gold/20 px-8">
            Withdraw Funds
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full group-hover:scale-110 transition-transform" />
           <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                 <Wallet className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Balance</p>
                 <h3 className="text-3xl font-bold">₹42,850</h3>
              </div>
           </div>
        </Card>
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/5 rounded-full group-hover:scale-110 transition-transform" />
           <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                 <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Revenue</p>
                 <h3 className="text-3xl font-bold">₹2,45,000</h3>
              </div>
           </div>
        </Card>
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-110 transition-transform" />
           <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                 <Clock className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pending Payouts</p>
                 <h3 className="text-3xl font-bold">₹15,400</h3>
              </div>
           </div>
        </Card>
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/5 rounded-full group-hover:scale-110 transition-transform" />
           <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                 <CreditCard className="w-5 h-5" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Commission Paid</p>
                 <h3 className="text-3xl font-bold">₹12,250</h3>
              </div>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Payout Methods */}
        <div className="space-y-6">
           <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Payout Methods</h3>
           <div className="space-y-4">
              <Card className="p-6 border border-gold/30 bg-gold/5 rounded-3xl flex items-center justify-between group cursor-pointer transition-all">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-gold/10 rounded-xl text-gold">
                       <IndianRupee className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold">HDFC Bank Primary</h4>
                       <p className="text-xs text-muted-foreground">**** 4521 • Active</p>
                    </div>
                 </div>
                 <CheckCircle2 className="w-4 h-4 text-gold" />
              </Card>
              <Card className="p-6 border border-border/50 hover:border-gold/30 rounded-3xl flex items-center justify-between group cursor-pointer transition-all">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-muted rounded-xl text-muted-foreground group-hover:text-gold transition-colors">
                       <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold">Paytm Business Wallet</h4>
                       <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                    </div>
                 </div>
                 <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
              </Card>
              <Button variant="ghost" className="w-full text-gold font-bold text-[10px] uppercase tracking-widest border border-dashed border-gold/20 h-14 rounded-2xl hover:bg-gold/5">
                 + Add New Payout Method
              </Button>
           </div>

           <Card className="p-8 glass-card border-gold/10 bg-gold/5 rounded-[2.5rem] space-y-4">
              <h4 className="font-bold text-sm">Payout Schedule</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                 You are currently on <b>Next-Day Settlements</b>. Withdrawals made before 4 PM are processed same day.
              </p>
           </Card>
        </div>

        {/* Transaction History */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex justify-between items-center px-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Transaction History</h3>
              <div className="flex gap-2">
                 <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest border border-border/50">Filters</Button>
                 <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-widest border border-border/50">All Time</Button>
              </div>
           </div>

           <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
              <Table>
                 <TableHeader className="bg-muted/50">
                    <TableRow className="border-border/50 hover:bg-transparent">
                       <TableHead className="font-bold text-[10px] uppercase tracking-widest pl-8">Details</TableHead>
                       <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Date</TableHead>
                       <TableHead className="font-bold text-[10px] uppercase tracking-widest text-center">Status</TableHead>
                       <TableHead className="font-bold text-[10px] uppercase tracking-widest text-right pr-8">Amount</TableHead>
                    </TableRow>
                 </TableHeader>
                 <TableBody>
                    {earningsHistory.map((tx) => (
                      <TableRow key={tx.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                         <TableCell className="py-6 pl-8">
                            <div className="flex items-center gap-3">
                               <div className={cn(
                                 "p-2 rounded-lg",
                                 tx.status === "Credited" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                               )}>
                                  {tx.status === "Credited" ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                               </div>
                               <div>
                                  <h4 className="text-sm font-bold">Order #{tx.orderId}</h4>
                                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{tx.id}</p>
                               </div>
                            </div>
                         </TableCell>
                         <TableCell className="text-center text-xs font-medium text-muted-foreground">{tx.date}</TableCell>
                         <TableCell className="text-center">
                            <Badge variant="secondary" className={cn(
                              "text-[9px] font-bold uppercase tracking-wider px-3 py-1 border-none",
                              tx.status === "Credited" ? "bg-green-500/10 text-green-500" : "bg-gold/10 text-gold"
                            )}>
                               {tx.status}
                            </Badge>
                         </TableCell>
                         <TableCell className="text-right pr-8 font-bold text-sm">
                            {tx.status === "Credited" ? "+" : "-"} ₹{tx.amount.toLocaleString()}
                         </TableCell>
                      </TableRow>
                    ))}
                 </TableBody>
              </Table>
           </Card>
           
           <Button variant="ghost" className="w-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-gold">
              Load More Transactions
           </Button>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
