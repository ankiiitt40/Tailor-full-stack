"use client";

import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Share2, 
  Download, 
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { TailorComparison } from "@/types/comparison";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const ComparisonSidebar = ({ tailors }: { tailors: TailorComparison[] }) => {
  const topRated = [...tailors].sort((a, b) => b.rating - a.rating)[0];
  const mostExperienced = [...tailors].sort((a, b) => parseInt(b.experience) - parseInt(a.experience))[0];

  return (
    <div className="sticky top-28 space-y-6">
       <Card className="p-8 glass-card border-gold/20 rounded-[3rem] shadow-2xl space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
          
          <div className="space-y-2">
             <h3 className="text-2xl font-black tracking-tight">Best Choice</h3>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Recommended for your profile</p>
          </div>

          <div className="p-6 rounded-[2rem] bg-gold/5 border border-gold/20 space-y-6 group cursor-pointer hover:bg-gold/10 transition-all">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gold/30">
                   <img src={topRated.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                   <h4 className="text-lg font-black tracking-tight">{topRated.shopName}</h4>
                   <div className="flex items-center gap-2">
                      <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black uppercase px-2 py-0.5">
                         9.8 Match
                      </Badge>
                      <span className="text-xs font-bold text-muted-foreground">Premium Experience</span>
                   </div>
                </div>
             </div>

             <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                   <span className="text-muted-foreground">Expertise Score</span>
                   <span className="text-gold">95%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "95%" }}
                     className="h-full bg-gold" 
                   />
                </div>
             </div>

             <Button className="w-full h-14 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
                Proceed with {topRated.shopName.split(" ")[0]}
             </Button>
          </div>

          <div className="space-y-4 pt-4 border-t border-border/50">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 text-gold" />
                   <span className="text-xs font-bold">Potential Savings</span>
                </div>
                <span className="text-xs font-black text-gold">₹1,500</span>
             </div>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Zap className="w-4 h-4 text-gold" />
                   <span className="text-xs font-bold">Earliest Delivery</span>
                </div>
                <span className="text-xs font-black text-gold">48 Hours</span>
             </div>
          </div>
       </Card>

       <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all text-xs">
             <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all text-xs">
             <Download className="w-4 h-4" /> PDF
          </Button>
       </div>
    </div>
  );
};
