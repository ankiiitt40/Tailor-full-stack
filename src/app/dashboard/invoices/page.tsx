"use client";

import React from "react";
import { 
  FileText, 
  Search, 
  Download, 
  Filter, 
  Calendar, 
  Smartphone,
  ShieldCheck,
  Zap,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { InvoiceList } from "@/components/invoices/InvoiceList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function InvoicesDashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative pt-12 pb-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
         
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Financial Hub
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <FileText className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Invoices</span>
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                     Manage Your <br />
                     <span className="text-gold">Tax Invoices</span> <span className="inline-block animate-bounce">🧾</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium max-w-xl">
                     Access and download your digital tailoring receipts. All invoices are GST-compliant and legally verifiable.
                  </p>
               </div>

               <div className="flex gap-4">
                  <div className="p-8 rounded-[3rem] bg-card border border-border/50 shadow-xl space-y-4 text-center min-w-[200px]">
                     <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto">
                        <Download className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Total Invoices</p>
                        <p className="text-3xl font-black tracking-tighter">12</p>
                     </div>
                  </div>
                  <div className="p-8 rounded-[3rem] bg-foreground text-background shadow-xl space-y-4 text-center min-w-[200px]">
                     <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto text-gold">
                        <Smartphone className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gold uppercase tracking-widest">Yearly Spend</p>
                        <p className="text-3xl font-black tracking-tighter text-white">₹45.2k</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         {/* Filter Bar */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-[2.5rem] bg-card/40 backdrop-blur-xl border border-border/50 mb-12">
            <div className="flex items-center gap-6 flex-1 w-full">
               <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <Input 
                    placeholder="Search by invoice ID, tailor, or date..." 
                    className="h-14 bg-muted/30 border-none rounded-2xl pl-12 font-medium focus-visible:ring-gold/30"
                  />
               </div>
               <Button variant="outline" className="h-14 px-8 rounded-2xl border-border/50 font-bold gap-2 hover:bg-gold/5 hover:text-gold transition-all">
                  <Calendar className="w-4 h-4" /> This Year
               </Button>
            </div>
            <div className="flex gap-3">
               <Button variant="ghost" className="h-14 w-14 rounded-2xl bg-gold/10 text-gold hover:bg-gold hover:text-gold-foreground transition-all">
                  <Download className="w-5 h-5" />
               </Button>
               <Button variant="ghost" className="h-14 w-14 rounded-2xl border border-border/50 hover:bg-gold/5 hover:text-gold transition-all">
                  <Filter className="w-5 h-5" />
               </Button>
            </div>
         </div>

         <InvoiceList />

         {/* Bottom Trust Section */}
         <div className="mt-20 p-12 rounded-[4rem] bg-foreground/5 border border-dashed border-border/50 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-[2.5rem] bg-gold/10 flex items-center justify-center">
               <ShieldCheck className="w-10 h-10 text-gold" />
            </div>
            <div className="space-y-2">
               <h3 className="text-2xl font-black tracking-tight">Legal & Compliance Hub</h3>
               <p className="text-muted-foreground font-medium max-w-xl">
                  StitchConnect invoices are recognized for tax filing and insurance claims. Every transaction is logged with a unique fingerprint for maximum transparency.
               </p>
            </div>
            <div className="flex gap-4">
               <Badge className="bg-gold/10 text-gold border-none">GST Verified</Badge>
               <Badge className="bg-gold/10 text-gold border-none">ISO 27001</Badge>
               <Badge className="bg-gold/10 text-gold border-none">256-bit SSL</Badge>
            </div>
         </div>
      </div>
    </div>
  );
}
