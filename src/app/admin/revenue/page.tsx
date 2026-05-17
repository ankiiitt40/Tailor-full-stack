"use client";

import React from "react";
import { 
  IndianRupee, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  ArrowUpRight, 
  Calendar,
  Wallet,
  ArrowDownRight,
  PieChart as PieChartIcon,
  Filter,
  History
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";

const dailyRevenue = [
  { day: "Mon", revenue: 42000 },
  { day: "Tue", revenue: 38000 },
  { day: "Wed", revenue: 55000 },
  { day: "Thu", revenue: 48000 },
  { day: "Fri", revenue: 62000 },
  { day: "Sat", revenue: 75000 },
  { day: "Sun", revenue: 84000 },
];

const transactions = [
  { id: "TXN-7001", shop: "Royal Stitch House", amount: "₹12,450", type: "Commission", date: "Today, 2:45 PM", status: "Success" },
  { id: "TXN-7002", shop: "Modern Fit Studio", amount: "₹4,500", type: "Subscription", date: "Today, 1:20 PM", status: "Success" },
  { id: "TXN-7003", shop: "Elite Bespoke", amount: "₹8,200", type: "Commission", date: "Yesterday", status: "Success" },
  { id: "TXN-7004", shop: "The Fit Masters", amount: "₹15,000", type: "Withdrawal", date: "Yesterday", status: "Pending" },
];

export default function AdminRevenuePage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Treasury & Financials</h1>
          <p className="text-muted-foreground">Monitor platform liquidity, track commissions, and manage partner payouts.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold gap-2">
            <Download className="w-4 h-4" /> Settlement Report
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold gap-2 shadow-xl shadow-gold/20">
            <Wallet className="w-4 h-4" /> Global Payout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: "Gross Volume", value: "₹42.8L", growth: "+12.5%", trend: "up", icon: IndianRupee, color: "text-blue-500" },
           { label: "Net Revenue", value: "₹8.4L", growth: "+18.2%", trend: "up", icon: TrendingUp, color: "text-gold" },
           { label: "Avg. Commission", value: "15%", growth: "Flat", trend: "neutral", icon: PieChartIcon, color: "text-purple-500" },
           { label: "Partner Payouts", value: "₹34.4L", growth: "+10.8%", trend: "up", icon: Wallet, color: "text-green-500" },
         ].map((stat, i) => (
           <Card key={stat.label} className="p-8 glass-card border-border/50 rounded-3xl space-y-6">
              <div className="flex justify-between items-start">
                 <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-muted/50", stat.color)}>
                    <stat.icon className="w-6 h-6" />
                 </div>
                 <div className={cn(
                   "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                   stat.trend === "up" ? "bg-green-500/10 text-green-500" : stat.trend === "down" ? "bg-red-500/10 text-red-500" : "bg-muted text-muted-foreground"
                 )}>
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : stat.trend === "down" ? <ArrowDownRight className="w-3 h-3" /> : null}
                    {stat.growth}
                 </div>
              </div>
              <div className="space-y-1">
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">{stat.label}</p>
                 <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              </div>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <Card className="lg:col-span-2 p-10 glass-card border-border/50 rounded-[3rem] space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-bold tracking-tight">Daily Settlement Overview</h3>
               <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/5">Weekly</Button>
                  <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-muted">Monthly</Button>
               </div>
            </div>
            <div className="h-[350px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyRevenue}>
                     <defs>
                        <linearGradient id="colorRevenueDaily" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v) => `₹${v/1000}k`} />
                     <Tooltip />
                     <Area type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenueDaily)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </Card>

         <Card className="p-10 glass-card border-border/50 rounded-[3rem] space-y-8">
            <h3 className="text-xl font-bold tracking-tight">Revenue Mix</h3>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: "Commission", value: 580000 },
                    { name: "Sub-Plan", value: 240000 },
                    { name: "Ads", value: 20000 },
                  ]}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 600, fill: "hsl(var(--muted-foreground))" }} />
                     <YAxis hide />
                     <Tooltip />
                     <Bar dataKey="value" fill="#D4AF37" radius={[6, 6, 0, 0]} barSize={40}>
                        {[0,1,2].map((i) => <Cell key={i} fill={i === 0 ? "#D4AF37" : i === 1 ? "#3B82F6" : "#10B981"} />)}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="space-y-4 pt-4 border-t border-border/50">
               <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-muted-foreground">Highest Stream</p>
                  <p className="text-xs font-bold text-gold uppercase tracking-widest">Platform Commission</p>
               </div>
               <div className="p-4 bg-muted/30 rounded-2xl">
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                     Commissions increased by 15% following the launch of the Summer Wedding Campaign.
                  </p>
               </div>
            </div>
         </Card>
      </div>

      {/* Transaction Table */}
      <div className="space-y-6">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <History className="w-5 h-5 text-gold" />
               <h3 className="text-xl font-bold">Recent Financial Events</h3>
            </div>
            <Button variant="ghost" className="text-[10px] font-bold text-gold uppercase tracking-widest">View Ledger</Button>
         </div>

         <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
            <Table>
               <TableHeader className="bg-muted/50">
                  <TableRow className="border-border/50 hover:bg-transparent">
                     <TableHead className="pl-8 font-bold text-[10px] uppercase tracking-[0.2em]">Transaction ID</TableHead>
                     <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em]">Partner Studio</TableHead>
                     <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Type</TableHead>
                     <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Amount</TableHead>
                     <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Date</TableHead>
                     <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-[0.2em]">Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {transactions.map((txn) => (
                     <TableRow key={txn.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                        <TableCell className="py-6 pl-8">
                           <span className="text-xs font-bold text-gold uppercase tracking-widest">{txn.id}</span>
                        </TableCell>
                        <TableCell className="font-bold text-sm">{txn.shop}</TableCell>
                        <TableCell className="text-center">
                           <Badge variant="secondary" className="bg-muted text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-lg">{txn.type}</Badge>
                        </TableCell>
                        <TableCell className="text-center font-bold text-sm">{txn.amount}</TableCell>
                        <TableCell className="text-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{txn.date}</TableCell>
                        <TableCell className="text-right pr-8">
                           <Badge className={cn(
                             "text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-none rounded-full",
                             txn.status === "Success" ? "bg-green-500/10 text-green-500" : "bg-gold/10 text-gold"
                           )}>
                              {txn.status}
                           </Badge>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </Card>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
