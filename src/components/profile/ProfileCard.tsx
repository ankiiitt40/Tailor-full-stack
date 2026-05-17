"use client";

import React from "react";
import { 
  Camera, 
  MapPin, 
  Award, 
  ShieldCheck, 
  Sparkles,
  Edit3,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { UserProfile } from "@/types/settings";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  profile: UserProfile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className="p-10 rounded-[4rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden group">
       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
       
       <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          {/* Avatar Section */}
          <div className="relative">
             <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-gold/20 p-1 bg-background relative z-10">
                <img src={profile.avatar} className="w-full h-full object-cover rounded-[2rem]" />
             </div>
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-2 border-2 border-dashed border-gold/30 rounded-[3rem]"
             />
             <Button variant="ghost" size="icon" className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-gold text-gold-foreground hover:bg-white hover:text-black shadow-xl z-20">
                <Camera className="w-4 h-4" />
             </Button>
          </div>

          <div className="space-y-2">
             <div className="flex items-center justify-center gap-2">
                <h3 className="text-3xl font-black tracking-tight">{profile.name}</h3>
                <CheckCircle2 className="w-5 h-5 text-gold" />
             </div>
             <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">@{profile.username}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full pt-4">
             <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 space-y-1">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Bookings</p>
                <p className="text-xl font-black">24</p>
             </div>
             <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 space-y-1">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Style Score</p>
                <p className="text-xl font-black text-gold">92</p>
             </div>
          </div>

          <div className="w-full p-6 rounded-[2rem] bg-gold/5 border border-gold/20 space-y-3">
             <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gold">
                <span>Profile Completion</span>
                <span>{profile.completionScore}%</span>
             </div>
             <div className="h-1.5 bg-gold/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${profile.completionScore}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gold rounded-full"
                />
             </div>
          </div>

          <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">
             "{profile.bio}"
          </p>

          <Button className="w-full h-14 rounded-2xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
             <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
       </div>
    </div>
  );
};
