"use client";

import React from "react";
import { 
  Store, 
  MapPin, 
  Clock, 
  Camera, 
  Plus, 
  Globe, 
  Share2,
  Edit3,
  Trash2,
  Award,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function TailorProfilePage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Shop Profile</h1>
          <p className="text-muted-foreground">Manage your studio's public identity and gallery.</p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold">
            View Public Page
          </Button>
          <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold">
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Branding & Completeness */}
        <div className="space-y-8">
           <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] space-y-8">
              <div className="space-y-6">
                 <div className="relative group mx-auto w-fit">
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-gold/20 p-1">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="" className="w-full h-full object-cover rounded-[1.75rem]" />
                    </div>
                    <button className="absolute bottom-[-10px] right-[-10px] p-3 bg-gold text-gold-foreground rounded-2xl shadow-xl hover:scale-110 transition-transform">
                       <Camera className="w-4 h-4" />
                    </button>
                 </div>
                 
                 <div className="text-center space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight">Royal Stitch House</h3>
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-gold uppercase tracking-widest">
                       <ShieldCheck className="w-3 h-3" /> Verified Master Studio
                    </div>
                 </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/50">
                 <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Profile Completeness</span>
                    <span className="text-[10px] font-bold text-gold">85%</span>
                 </div>
                 <Progress value={85} className="h-2 bg-muted border-none [&>div]:bg-gold" />
                 <p className="text-[10px] text-muted-foreground leading-relaxed text-center italic">
                    Add working hours to reach 100% and get listed in "Open Now" searches.
                 </p>
              </div>

              <div className="space-y-3">
                 <div className="p-4 bg-muted/50 rounded-2xl flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-xs font-medium truncate">GK-1, New Delhi, 110048</span>
                 </div>
                 <div className="p-4 bg-muted/50 rounded-2xl flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="text-xs font-medium uppercase tracking-widest">Open Now • 10AM - 8PM</span>
                 </div>
              </div>
           </Card>

           <Card className="p-8 glass-card border-gold/10 bg-gold/5 rounded-[2.5rem] space-y-6">
              <div className="flex items-center gap-3">
                 <Sparkles className="w-5 h-5 text-gold" />
                 <h4 className="font-bold">Studio Specialization</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                 {["Wedding Wear", "Sherwani", "Blouse", "Custom Suits", "Boutique"].map(tag => (
                   <Badge key={tag} variant="secondary" className="bg-gold/10 text-gold border-none text-[10px] font-bold px-3 py-1">
                      {tag}
                   </Badge>
                 ))}
                 <Button variant="ghost" className="h-6 w-6 rounded-full p-0 text-gold hover:bg-gold/10">+</Button>
              </div>
           </Card>
        </div>

        {/* Right: Detailed Edit Form */}
        <div className="lg:col-span-2 space-y-8">
           <Card className="p-10 md:p-12 glass-card border-border/50 rounded-[3rem] space-y-12">
              <div className="space-y-8">
                 <h3 className="text-xl font-bold flex items-center gap-3">
                    <Edit3 className="w-5 h-5 text-gold" /> Studio Information
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Shop Name</Label>
                       <Input defaultValue="Royal Stitch House" className="h-12 bg-muted/30 border-none rounded-xl font-medium focus-visible:ring-gold" />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Official Website</Label>
                       <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input defaultValue="www.royalstitch.com" className="h-12 bg-muted/30 border-none rounded-xl font-medium pl-12 focus-visible:ring-gold" />
                       </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Shop Description</Label>
                       <Textarea 
                          defaultValue="Premium bespoke tailoring studio specialized in high-end wedding collections and ethnic wear. We've been serving master craftsmanship for over 15 years in the heart of Delhi." 
                          className="min-h-[120px] bg-muted/30 border-none rounded-2xl font-medium p-4 resize-none focus-visible:ring-gold" 
                       />
                    </div>
                 </div>
              </div>

              <div className="space-y-8 pt-6 border-t border-border/50">
                 <h3 className="text-xl font-bold flex items-center gap-3">
                    <Store className="w-5 h-5 text-gold" /> Studio Gallery
                 </h3>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group border border-border/50">
                         <img src={`https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&sig=${i}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="p-2 bg-red-500 rounded-lg text-white"><Trash2 className="w-4 h-4" /></button>
                         </div>
                      </div>
                    ))}
                    <div className="aspect-square rounded-2xl border-2 border-dashed border-gold/30 bg-gold/5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-gold/10 transition-all group">
                       <div className="p-2 bg-gold/10 rounded-lg group-hover:scale-110 transition-transform">
                          <Plus className="w-5 h-5 text-gold" />
                       </div>
                       <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Add Media</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-8 pt-6 border-t border-border/50">
                 <h3 className="text-xl font-bold flex items-center gap-3">
                    <Camera className="w-5 h-5 text-gold" /> Social Connections
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                       <Camera className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                       <Input defaultValue="@royalstitchhouse" className="h-12 bg-muted/30 border-none rounded-xl font-medium pl-12" />
                    </div>
                    <div className="relative">
                       <Share2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                       <Input defaultValue="facebook.com/royalstitch" className="h-12 bg-muted/30 border-none rounded-xl font-medium pl-12" />
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}

// Helper label for ShadCN
const Label = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <label className={cn("block font-medium", className)}>{children}</label>
);

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
