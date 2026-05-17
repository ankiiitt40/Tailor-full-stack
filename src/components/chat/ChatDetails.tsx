"use client";

import React from "react";
import { 
  User, 
  MapPin, 
  Star, 
  Clock, 
  ShieldCheck, 
  ShoppingBag, 
  Image as ImageIcon,
  ChevronRight,
  Download,
  Share2,
  Trash2,
  ExternalLink,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import { ChatParticipant } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ChatDetailsProps {
  recipient: ChatParticipant;
}

export const ChatDetails = ({ recipient }: ChatDetailsProps) => {
  return (
    <div className="h-full bg-card/40 backdrop-blur-3xl border-l border-border/50 overflow-y-auto no-scrollbar p-8">
      <div className="space-y-10">
         {/* Profile Card */}
         <div className="text-center space-y-4">
            <div className="relative inline-block">
               <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-gold/20 mx-auto shadow-2xl">
                  <img src={recipient.image} className="w-full h-full object-cover" />
               </div>
               <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gold rounded-2xl flex items-center justify-center border-4 border-background">
                  <ShieldCheck className="w-5 h-5 text-gold-foreground" />
               </div>
            </div>
            
            <div className="space-y-1">
               <h3 className="text-2xl font-black tracking-tight">{recipient.shopName || recipient.name}</h3>
               <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold text-[8px] font-black uppercase tracking-widest">
                     Premium Tailor
                  </Badge>
                  <div className="flex items-center gap-1">
                     <Star className="w-3 h-3 text-gold fill-current" />
                     <span className="text-xs font-black">4.9</span>
                  </div>
               </div>
            </div>

            <div className="flex justify-center gap-3">
               <Button variant="outline" className="h-12 w-12 rounded-xl border-border/50 hover:bg-gold/5 hover:text-gold transition-all">
                  <Smartphone className="w-5 h-5" />
               </Button>
               <Button variant="outline" className="h-12 w-12 rounded-xl border-border/50 hover:bg-gold/5 hover:text-gold transition-all">
                  <Share2 className="w-5 h-5" />
               </Button>
               <Button variant="outline" className="h-12 w-12 rounded-xl border-border/50 hover:bg-red-500/5 hover:text-red-500 transition-all">
                  <Trash2 className="w-5 h-5" />
               </Button>
            </div>
         </div>

         <Separator className="bg-border/50" />

         {/* Stats */}
         <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 space-y-1">
               <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Response Time</p>
               <p className="text-sm font-black tracking-tight">&lt; 15 Mins</p>
            </div>
            <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 space-y-1">
               <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Orders Done</p>
               <p className="text-sm font-black tracking-tight">1.2k +</p>
            </div>
         </div>

         {/* Active Booking */}
         <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Active Booking</h4>
               <Badge className="bg-gold/10 text-gold border-none text-[8px] font-black">STITCHING</Badge>
            </div>
            <div className="p-6 rounded-[2rem] bg-foreground text-background space-y-6 group cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 blur-2xl rounded-full" />
               <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                     <ShoppingBag className="w-6 h-6 text-gold" />
                     <div>
                        <p className="text-[8px] font-black text-gold uppercase tracking-widest">ID: BK-8821</p>
                        <h5 className="text-sm font-black tracking-tight">Royal Emerald Sherwani</h5>
                     </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                     <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Est: June 15</span>
                     </div>
                     <ExternalLink className="w-4 h-4 text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
               </div>
            </div>
         </div>

         {/* Shared Media */}
         <div className="space-y-6">
            <div className="flex items-center justify-between">
               <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Shared Media</h4>
               <Button variant="link" className="p-0 text-gold text-[10px] font-black uppercase tracking-widest h-auto">
                  View All <ChevronRight className="w-3 h-3 ml-1" />
               </Button>
            </div>
            <div className="grid grid-cols-3 gap-3">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border/50 group cursor-pointer relative">
                    <img src={`https://images.unsplash.com/photo-159463331268${i}-425c7b97ccd1?q=80&w=100`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Download className="w-4 h-4 text-white" />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Common Actions */}
         <div className="space-y-3 pt-6">
            <Button variant="outline" className="w-full h-14 rounded-2xl border-border/50 gap-3 font-bold hover:bg-gold/5 hover:text-gold transition-all justify-start px-6">
               <MapPin className="w-4 h-4" /> Share Live Location
            </Button>
            <Button variant="outline" className="w-full h-14 rounded-2xl border-border/50 gap-3 font-bold hover:bg-gold/5 hover:text-gold transition-all justify-start px-6">
               <ImageIcon className="w-4 h-4" /> Request Design Sample
            </Button>
         </div>
      </div>
    </div>
  );
};
