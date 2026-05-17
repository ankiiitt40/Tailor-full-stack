"use client";

import React from "react";
import { 
  X, 
  Heart, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Star,
  MapPin,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Design } from "@/types/designs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface DesignModalProps {
  design: Design | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DesignModal = ({ design, isOpen, onClose }: DesignModalProps) => {
  if (!design) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[1400px] h-[90vh] p-0 overflow-hidden bg-card border-gold/20 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <div className="flex h-full flex-col lg:flex-row">
           {/* Left: Immersive Gallery */}
           <div className="flex-1 bg-black relative group/img overflow-hidden">
              <img src={design.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-8 left-8 flex gap-3">
                 <Badge className="bg-gold text-gold-foreground border-none text-[10px] font-black uppercase px-4 py-2 rounded-full shadow-2xl">
                    {design.category}
                 </Badge>
                 {design.isTrending && (
                    <Badge className="bg-white/10 backdrop-blur-md text-white border-white/10 text-[10px] font-black uppercase px-4 py-2 rounded-full">
                       <Sparkles className="w-3 h-3 mr-2" /> Trending Style
                    </Badge>
                 )}
              </div>

              <div className="absolute bottom-8 left-8 space-y-4 max-w-xl">
                 <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                       {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
                             <img src={`https://images.unsplash.com/photo-153571387500${i}-d1d0cf377fde?q=80&w=100`} />
                          </div>
                       ))}
                    </div>
                    <p className="text-white text-xs font-bold">120+ users saved this lately</p>
                 </div>
              </div>
           </div>

           {/* Right: Detailed Info */}
           <div className="w-full lg:w-[450px] p-10 bg-card overflow-y-auto no-scrollbar border-l border-border/50">
              <div className="space-y-10">
                 {/* Header */}
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <h2 className="text-3xl font-black tracking-tight">{design.title}</h2>
                       <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">by {design.tailorShop}</span>
                          <ShieldCheck className="w-4 h-4 text-gold" />
                       </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-gold/10 hover:text-gold">
                       <X className="w-6 h-6" />
                    </Button>
                 </div>

                 {/* Social Interaction Bar */}
                 <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex-1 h-14 rounded-2xl border-border/50 gap-2 font-bold hover:bg-red-500/5 hover:text-red-500 hover:border-red-500/20">
                       <Heart className="w-4 h-4" /> {design.likes} Likes
                    </Button>
                    <Button className="flex-1 h-14 rounded-2xl bg-gold text-gold-foreground gap-2 font-black text-[10px] uppercase tracking-widest shadow-xl">
                       <Bookmark className="w-4 h-4 fill-current" /> Save Inspiration
                    </Button>
                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-border/50 hover:bg-gold/5 hover:text-gold">
                       <Share2 className="w-5 h-5" />
                    </Button>
                 </div>

                 {/* Description */}
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">About this Design</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{design.description}</p>
                 </div>

                 {/* Tailor Quick Card */}
                 <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-gold" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Offered by</p>
                          <p className="text-lg font-bold">{design.tailorShop}</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Stitching Price</p>
                          <p className="text-lg font-black text-gold">₹{design.estimatedPrice}</p>
                       </div>
                       <div className="space-y-1 text-right">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Delivery Est.</p>
                          <p className="text-lg font-black tracking-tight">4-6 Days</p>
                       </div>
                    </div>

                    <Button className="w-full h-14 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
                       Book This Tailor <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                 </div>

                 {/* Fabric Recommendations */}
                 <div className="space-y-4">
                    <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Fabric Recommendations</h4>
                    <div className="flex flex-wrap gap-2">
                       {design.fabricSuggestions.map((fabric) => (
                          <Badge key={fabric} variant="secondary" className="bg-foreground/5 hover:bg-gold/10 hover:text-gold text-[10px] font-bold px-4 py-2 rounded-xl transition-all cursor-default">
                             {fabric}
                          </Badge>
                       ))}
                    </div>
                 </div>

                 {/* Tags */}
                 <div className="flex flex-wrap gap-2 pt-4">
                    {design.tags.map((tag) => (
                       <span key={tag} className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">#{tag}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
