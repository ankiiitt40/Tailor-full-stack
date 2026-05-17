"use client";

import React from "react";
import { 
  User, 
  Settings, 
  ShieldCheck, 
  MapPin, 
  Bell, 
  Sparkles,
  ArrowRight,
  Camera,
  Calendar,
  Wallet,
  Star,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { mockUserProfile } from "@/data/settings-data";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { AddressManager } from "@/components/settings/AddressManager";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Profile Hero */}
      <div className="relative pt-12 pb-20 overflow-hidden border-b border-border/50">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                     <span className="text-[10px] font-black text-gold uppercase tracking-[0.3em]">Account Center</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                     <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Personal Profile</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                     Manage Your <br />
                     <span className="text-gold">Identity</span> <span className="inline-block animate-pulse">✨</span>
                  </h1>
                  <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                     Customize your fashion profile, update your measurements, and manage how you appear on StitchConnect.
                  </p>
               </div>
               
               {/* Achievement Stats */}
               <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
                  {[
                    { label: "Elite Points", value: "2.4k", icon: Award },
                    { label: "Fit Accuracy", value: "98%", icon: Star },
                  ].map((stat) => (
                    <div key={stat.label} className="p-8 rounded-[3rem] bg-card border border-border/50 space-y-4 text-center group">
                       <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <stat.icon className="w-6 h-6 text-gold" />
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          <p className="text-3xl font-black tracking-tight">{stat.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-16">
         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Left Column: Form */}
            <div className="xl:col-span-8 space-y-16">
               {/* Personal Details */}
               <section className="space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-gold" />
                     </div>
                     <h2 className="text-3xl font-black tracking-tight">Personal Details</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</Label>
                        <Input defaultValue={mockUserProfile.name} className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Username</Label>
                        <Input defaultValue={mockUserProfile.username} className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</Label>
                        <Input defaultValue={mockUserProfile.email} className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Phone Number</Label>
                        <Input defaultValue={mockUserProfile.phone} className="h-14 bg-muted/30 border-none rounded-2xl px-6 font-bold focus-visible:ring-gold/30" />
                     </div>
                     <div className="space-y-3 md:col-span-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Bio / Style Preference</Label>
                        <Textarea 
                          defaultValue={mockUserProfile.bio} 
                          className="min-h-[150px] bg-muted/30 border-none rounded-[2rem] p-6 font-medium focus-visible:ring-gold/30 resize-none"
                        />
                     </div>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                     <Button className="h-16 px-12 rounded-2xl bg-gold text-gold-foreground hover:bg-black hover:text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-gold/20 transition-all">
                        Update Details
                     </Button>
                  </div>
               </section>

               {/* Address Management */}
               <section className="pt-16 border-t border-border/50">
                  <AddressManager />
               </section>
            </div>

            {/* Right Column: Profile Preview */}
            <div className="xl:col-span-4 space-y-12">
               <div className="sticky top-24">
                  <div className="space-y-4 mb-8">
                     <h3 className="text-xl font-black tracking-tight">Profile Preview</h3>
                     <p className="text-xs font-medium text-muted-foreground">How your identity appears to tailors and the community.</p>
                  </div>
                  <ProfileCard profile={mockUserProfile} />
                  
                  {/* AI Suggestion */}
                  <div className="mt-8 p-8 rounded-[3rem] bg-foreground text-background space-y-4 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-gold/30 blur-3xl rounded-full" />
                     <div className="flex items-center gap-3 relative z-10">
                        <Sparkles className="w-5 h-5 text-gold" />
                        <h4 className="text-sm font-black uppercase tracking-widest">AI Optimization</h4>
                     </div>
                     <p className="text-xs font-medium opacity-60 leading-relaxed relative z-10">
                        Adding a clear profile photo and completing your bio can increase your booking response rate by 35%.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
