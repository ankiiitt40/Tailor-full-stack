"use client";

import React from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Download, 
  ExternalLink,
  Search,
  Filter,
  FileText,
  CreditCard,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { transactions } from "@/data/payment-data";
import { Transaction } from "@/types/payment";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const PaymentHistory = () => {
  return (
    <div className="space-y-8">
      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50">
         <div className="flex items-center gap-6 flex-1 w-full">
            <div className="relative flex-1 group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
               <Input 
                 placeholder="Search transactions, tailor or booking ID..." 
                 className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-medium focus-visible:ring-gold/30"
               />
            </div>
            <Button variant="outline" className="h-14 px-6 rounded-2xl border-border/50 font-bold gap-2 hover:bg-gold/5 hover:text-gold transition-all">
               <Filter className="w-4 h-4" /> Filters
            </Button>
         </div>
         <Button className="h-14 px-8 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
            <Download className="w-4 h-4 mr-2" /> Export CSV
         </Button>
      </div>

      {/* Transaction List */}
      <div className="space-y-4">
         {transactions.map((txn, i) => (
           <motion.div
             key={txn.id}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="group p-6 rounded-[2.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all flex flex-col lg:flex-row items-center gap-8"
           >
              {/* Status Icon */}
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                txn.status === "success" ? "bg-green-500/10 text-green-500" : 
                txn.status === "failed" ? "bg-red-500/10 text-red-500" : "bg-gold/10 text-gold"
              )}>
                 {txn.status === "success" ? <CheckCircle2 className="w-8 h-8" /> : 
                  txn.status === "failed" ? <XCircle className="w-8 h-8" /> : <Clock className="w-8 h-8" />}
              </div>

              {/* Transaction Info */}
              <div className="flex-1 min-w-0 space-y-1">
                 <div className="flex items-center gap-3">
                    <h4 className="text-xl font-black tracking-tight truncate">{txn.tailorShop}</h4>
                    <Badge variant="outline" className={cn(
                      "text-[8px] font-black uppercase tracking-widest",
                      txn.status === "success" ? "border-green-500/30 text-green-500" : 
                      txn.status === "failed" ? "border-red-500/30 text-red-500" : "border-gold/30 text-gold"
                    )}>
                       {txn.status}
                    </Badge>
                 </div>
                 <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground">
                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> ID: {txn.id}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {txn.date}</span>
                    <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" /> {txn.method}</span>
                 </div>
              </div>

              {/* Amount & Actions */}
              <div className="text-right space-y-2">
                 <p className="text-3xl font-black tracking-tighter">₹{txn.amount}</p>
                 <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-10 px-4 rounded-xl hover:bg-gold/10 hover:text-gold font-bold text-[10px] uppercase tracking-widest gap-2">
                       <FileText className="w-4 h-4" /> Invoice
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 px-4 rounded-xl hover:bg-gold/10 hover:text-gold font-bold text-[10px] uppercase tracking-widest gap-2">
                       <ExternalLink className="w-4 h-4" /> Details
                    </Button>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};
