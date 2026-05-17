"use client";

import React from "react";
import { 
  Download, 
  Share2, 
  Printer, 
  ShieldCheck, 
  FileText,
  Clock,
  ArrowRight,
  TrendingUp,
  Zap,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { invoices } from "@/data/payment-data";
import { Invoice } from "@/types/payment";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const InvoiceList = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
      {invoices.map((inv, i) => (
        <motion.div
          key={inv.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-10 rounded-[3.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all space-y-10 relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[80px] rounded-full -mr-24 -mt-24 group-hover:bg-gold/10 transition-colors" />
           
           {/* Header */}
           <div className="flex justify-between items-start relative z-10">
              <div className="space-y-2">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                       <FileText className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Invoice ID</p>
                       <h3 className="text-xl font-black tracking-tight">{inv.id}</h3>
                    </div>
                 </div>
              </div>
              <div className="text-right space-y-2">
                 <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {inv.status}
                 </Badge>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{inv.date}</p>
              </div>
           </div>

           {/* Details Grid */}
           <div className="grid grid-cols-2 gap-12 relative z-10">
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Billed To</p>
                 <div className="space-y-1">
                    <p className="text-sm font-black">{inv.customerName}</p>
                    <p className="text-xs font-medium text-muted-foreground">{inv.customerEmail}</p>
                 </div>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Tailor Studio</p>
                 <div className="space-y-1">
                    <p className="text-sm font-black">{inv.tailorShop}</p>
                    <p className="text-xs font-medium text-muted-foreground">{inv.tailorName}</p>
                 </div>
              </div>
           </div>

           {/* Item Table Placeholder */}
           <div className="space-y-6 relative z-10">
              <Separator className="bg-border/50" />
              <div className="space-y-4">
                 {inv.items.map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center text-sm">
                      <div className="space-y-0.5">
                         <p className="font-bold">{item.description}</p>
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-black">₹{item.price}</span>
                   </div>
                 ))}
              </div>
              <Separator className="bg-border/50" />
           </div>

           {/* Totals */}
           <div className="flex flex-col items-end gap-2 relative z-10">
              <div className="flex items-center gap-12 text-sm">
                 <span className="text-muted-foreground font-medium">Tax (GST 18%)</span>
                 <span className="font-bold">₹{inv.tax}</span>
              </div>
              <div className="flex items-center gap-12 text-sm">
                 <span className="text-muted-foreground font-medium">Discount</span>
                 <span className="text-gold font-bold">- ₹{inv.discount}</span>
              </div>
              <div className="pt-4 text-right">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Total Amount Paid</p>
                 <p className="text-4xl font-black tracking-tighter">₹{inv.total}</p>
              </div>
           </div>

           {/* Actions */}
           <div className="pt-6 flex gap-3 relative z-10">
              <Button className="flex-1 h-14 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
                 <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
              <Button variant="outline" className="h-14 w-14 rounded-2xl border-border/50 hover:bg-gold/5 hover:text-gold transition-all">
                 <Printer className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-14 w-14 rounded-2xl border-border/50 hover:bg-gold/5 hover:text-gold transition-all">
                 <Share2 className="w-5 h-5" />
              </Button>
           </div>
        </motion.div>
      ))}
    </div>
  );
};
