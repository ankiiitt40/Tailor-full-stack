"use client";

import React from "react";
import { 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Share2, 
  Heart, 
  Copy,
  Award,
  Users,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TailorProfile } from "@/types/profile";

export const TailorHero = ({ profile }: { profile: TailorProfile }) => {
  return (
    <div className="relative group">
      {/* Banner Image */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[3rem] border border-border/50">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={profile.bannerImage} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-8 right-8 flex gap-3">
           <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-gold hover:text-gold-foreground transition-all">
              <Heart className="w-5 h-5" />
           </Button>
           <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-gold hover:text-gold-foreground transition-all">
              <Share2 className="w-5 h-5" />
           </Button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-6 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                 <Badge className="bg-gold text-gold-foreground border-none text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Premium Partner
                 </Badge>
                 {profile.isVerified && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full">
                       <CheckCircle2 className="w-3 h-3 text-green-500" />
                       <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Elite Verified</span>
                    </div>
                 )}
              </motion.div>

              <div className="space-y-2">
                 <motion.h1 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="text-5xl md:text-6xl font-black text-white tracking-tighter"
                 >
                    {profile.shopName} <span className="text-gold">✨</span>
                 </motion.h1>
                 <p className="text-xl text-white/70 font-medium">{profile.bio.split(".")[0]}.</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                 <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-gold px-3 py-1 rounded-lg">
                       <Star className="w-4 h-4 fill-gold-foreground text-gold-foreground" />
                       <span className="text-sm font-bold text-gold-foreground">{profile.rating}</span>
                    </div>
                    <span className="text-sm font-bold text-white/60">({profile.reviewsCount} Trusted Reviews)</span>
                 </div>
                 <div className="h-6 w-px bg-white/20 hidden md:block" />
                 <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm font-bold">{profile.location}</span>
                 </div>
                 <div className="h-6 w-px bg-white/20 hidden md:block" />
                 <div className="flex items-center gap-2 text-white/80">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-sm font-bold">{profile.experience} Experience</span>
                 </div>
              </div>
           </div>

           <div className="flex gap-4 shrink-0">
              <Button className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-gold/20 transform hover:scale-105 transition-all">
                 Compare Studio
              </Button>
              <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-white/20 text-white hover:bg-white/10 text-sm font-black uppercase tracking-[0.2em] backdrop-blur-md">
                 Copy Address
              </Button>
           </div>
        </div>
      </div>

      {/* Stats Ribbon */}
      <div className="absolute -bottom-10 left-12 right-12 z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { label: "Orders Finished", value: profile.analytics.ordersCompleted + "+", icon: ShieldCheck },
           { label: "Happy Clients", value: "98%", icon: Users },
           { label: "Delivery Speed", value: profile.deliveryTime, icon: Clock },
           { label: "On Time %", value: profile.analytics.onTimeDelivery + "%", icon: CheckCircle2 },
         ].map((stat, i) => (
           <motion.div 
             key={stat.label}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 + (i * 0.1) }}
             className="bg-card/80 backdrop-blur-3xl border border-border/50 p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 group/stat hover:border-gold/30 transition-all"
           >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center group-hover/stat:bg-gold group-hover/stat:text-gold-foreground transition-all">
                 <stat.icon className="w-6 h-6 text-gold group-hover/stat:text-current" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                 <p className="text-xl font-bold text-foreground">{stat.value}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};
