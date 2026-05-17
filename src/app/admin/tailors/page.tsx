"use client";

import React, { useState } from "react";
import { 
  Scissors, 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldCheck, 
  ShieldAlert, 
  Star, 
  TrendingUp,
  Download,
  ExternalLink,
  Crown,
  Zap
} from "lucide-react";
import { tailors } from "@/data/tailors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";

export default function AdminTailorsPage() {
  const [tailorList, setTailorList] = useState(
    tailors.map((t, idx) => ({ ...t, verified: idx % 2 === 0, status: "active" }))
  );

  const handleVerifyTailor = (tailorId: string) => {
    setTailorList(prev => prev.map(t => t.id === tailorId ? { ...t, verified: true } : t));
    toast.success("Tailor successfully verified!");
  };

  const handleFeatureStudio = (tailorId: string) => {
    toast.success("Studio promoted to Featured Listing!");
  };

  const handleSuspendAccount = (tailorId: string) => {
    setTailorList(prev => prev.map(t => t.id === tailorId ? { ...t, status: "suspended" } : t));
    toast.error("Account suspended. Restrictions applied.");
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Tailor Ecosystem</h1>
          <p className="text-muted-foreground">Monitor partner performance, handle verifications, and manage featured listings.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold">
            Audit Trail
          </Button>
          <Button 
            onClick={() => {
              setTailorList(prev => prev.map(t => ({ ...t, verified: true })));
              toast.success("All pending partners verified!");
            }}
            className="bg-gold text-gold-foreground rounded-xl h-11 font-bold flex gap-2"
          >
            <Zap className="w-4 h-4" /> Bulk Verify
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: "Total Tailors", value: "854", icon: Scissors, color: "text-blue-500" },
           { label: "Verified Partners", value: "712", icon: ShieldCheck, color: "text-green-500" },
           { label: "Pending Approval", value: "18", icon: Zap, color: "text-gold" },
           { label: "Featured Units", value: "12", icon: Crown, color: "text-purple-500" },
         ].map((stat) => (
           <Card key={stat.label} className="p-6 glass-card border-border/50 rounded-3xl flex items-center gap-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-muted/50", stat.color)}>
                 <stat.icon className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                 <p className="text-2xl font-bold">{stat.value}</p>
              </div>
           </Card>
         ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
           {["All Partners", "Verified", "Pending", "Suspended", "Premium"].map((tab, i) => (
             <button 
               key={tab}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300",
                 i === 0 ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {tab}
             </button>
           ))}
        </div>

        <div className="relative flex-1 lg:w-80">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search by shop name, owner or location..." 
             className="pl-12 rounded-xl bg-card border-border/50 h-11"
           />
        </div>
      </div>

      <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem]">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="w-[350px] pl-8 font-bold text-[10px] uppercase tracking-[0.2em]">Partner Studio</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Status</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Revenue</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Rating</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Subscription</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-[0.2em]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tailorList.map((tailor) => (
              <TableRow key={tailor.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                <TableCell className="py-6 pl-8">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 rounded-2xl border-2 border-border/50 group-hover:border-gold/30 transition-all overflow-hidden">
                       <AvatarImage src={tailor.image} className="group-hover:scale-110 transition-transform" />
                       <AvatarFallback>{tailor.shopName.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                       <div className="flex items-center gap-2">
                          <span className="text-sm font-bold group-hover:text-gold transition-colors">{tailor.shopName}</span>
                          {tailor.verified && <ShieldCheck className="w-3 h-3 text-gold" />}
                       </div>
                       <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{tailor.location}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <Badge className={cn(
                     "border-none text-[9px] font-bold uppercase px-3 py-1 rounded-full",
                     tailor.status === "suspended" ? "bg-red-500/10 text-red-500" :
                     tailor.verified ? "bg-green-500/10 text-green-500" : "bg-gold/10 text-gold"
                   )}>
                     {tailor.status === "suspended" ? "Suspended" : tailor.verified ? "Verified" : "Pending"}
                   </Badge>
                </TableCell>
                <TableCell className="text-center font-bold text-sm">₹{(tailor.startingPrice * 15).toLocaleString()}</TableCell>
                <TableCell className="text-center">
                   <div className="flex items-center justify-center gap-1 text-xs font-bold">
                      <Star className="w-3 h-3 fill-gold text-gold" /> {tailor.rating}
                   </div>
                </TableCell>
                <TableCell className="text-center">
                   <Badge variant="secondary" className="bg-gold/10 text-gold border-none text-[9px] font-bold px-2 py-0.5 rounded-lg">
                      Elite Plan
                   </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end gap-2">
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                        <TrendingUp className="w-4 h-4" />
                     </Button>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                              <MoreVertical className="w-4 h-4" />
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass border-gold/20 p-2 mt-2 w-52">
                           <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => toast.success(`Opening storefront for ${tailor.shopName}...`)}>
                              <ExternalLink className="w-4 h-4 text-blue-500" /> Visit Storefront
                           </DropdownMenuItem>
                           {!tailor.verified && (
                              <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer text-green-500 hover:text-green-600" onClick={() => handleVerifyTailor(tailor.id)}>
                                 <ShieldCheck className="w-4 h-4" /> Verify Studio
                              </DropdownMenuItem>
                           )}
                           <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => handleFeatureStudio(tailor.id)}>
                              <Crown className="w-4 h-4 text-gold" /> Feature Studio
                           </DropdownMenuItem>
                           <DropdownMenuSeparator className="bg-gold/10" />
                           <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer text-red-500" onClick={() => handleSuspendAccount(tailor.id)}>
                              <ShieldAlert className="w-4 h-4" /> Suspend Account
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
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
