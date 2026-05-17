"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Palette, 
  Eye, 
  Heart, 
  ShoppingBag,
  Edit2,
  Trash2,
  X,
  Image as ImageIcon
} from "lucide-react";
import { designs } from "@/data/designs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TailorDesignsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Design Portfolio</h1>
          <p className="text-muted-foreground">Showcase your best work and track design performance.</p>
        </div>
        
        <Dialog>
          <DialogTrigger>
            <Button className="bg-gold text-gold-foreground rounded-xl h-11 font-bold flex gap-2 shadow-xl shadow-gold/20">
              <Plus className="w-4 h-4" /> Upload New Design
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-gold/20 sm:max-w-[500px] rounded-[2rem] p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Upload New Design</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Design Name</Label>
                <Input placeholder="e.g. Royal Embroidered Sherwani" className="h-12 rounded-xl bg-muted/50 border-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                   <Select>
                      <SelectTrigger className="h-12 rounded-xl bg-muted/50 border-none">
                         <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="glass border-gold/20">
                         <SelectItem value="wedding">Wedding</SelectItem>
                         <SelectItem value="formal">Formal</SelectItem>
                         <SelectItem value="casual">Casual</SelectItem>
                         <SelectItem value="boutique">Boutique</SelectItem>
                      </SelectContent>
                   </Select>
                 </div>
                 <div className="space-y-2">
                   <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Starting Price</Label>
                   <Input placeholder="₹" className="h-12 rounded-xl bg-muted/50 border-none" />
                 </div>
              </div>

              <div className="space-y-2">
                 <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Design Image</Label>
                 <div className="border-2 border-dashed border-gold/20 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-gold/5 cursor-pointer hover:bg-gold/10 transition-colors group">
                    <div className="p-3 bg-gold/10 rounded-full group-hover:scale-110 transition-transform">
                       <Upload className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-center">
                       <p className="text-sm font-bold text-foreground">Click to upload or drag and drop</p>
                       <p className="text-[10px] text-muted-foreground uppercase tracking-widest">SVG, PNG, JPG (max 2MB)</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Description</Label>
                <Textarea placeholder="Tell customers about the fabric and style..." className="min-h-[100px] rounded-xl bg-muted/50 border-none resize-none" />
              </div>

              <Button className="w-full h-12 bg-gold text-gold-foreground rounded-xl font-bold uppercase tracking-widest">Publish Design</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
           {["All", "Wedding", "Formal", "Casual", "Boutique"].map((cat) => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300",
                 activeCategory === cat 
                   ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" 
                   : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {cat}
             </button>
           ))}
        </div>

        <div className="relative w-full lg:w-64">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search designs..." 
             className="pl-12 rounded-xl bg-card border-border/50 h-11"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {designs.map((design) => (
          <Card key={design.id} className="group overflow-hidden rounded-[2.5rem] border-border/50 glass-card transition-all duration-500 hover:-translate-y-2">
             <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={design.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="" 
                />
                <div className="absolute top-4 left-4">
                   <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-3 py-1 font-bold text-[10px] uppercase tracking-widest">
                      {design.category}
                   </Badge>
                </div>
                
                {/* Analytics Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center text-white border border-white/10">
                         <p className="text-[10px] font-bold opacity-60">VIEWS</p>
                         <p className="text-sm font-bold">{design.likes * 12}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center text-white border border-white/10">
                         <p className="text-[10px] font-bold opacity-60">SAVES</p>
                         <p className="text-sm font-bold">{design.saves}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 text-center text-white border border-white/10">
                         <p className="text-[10px] font-bold opacity-60">BOOKINGS</p>
                         <p className="text-sm font-bold">{Math.floor(design.saves / 4)}</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                   <h3 className="text-lg font-bold group-hover:text-gold transition-colors truncate pr-4">{design.title}</h3>
                   <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-gold/10 hover:text-gold">
                         <Edit2 className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-red-500/10 hover:text-red-500">
                         <Trash2 className="w-3 h-3" />
                      </Button>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                   <div className="flex items-center gap-1.5 text-gold">
                      <Palette className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Verified Design</span>
                   </div>
                   <Button variant="ghost" className="text-xs font-bold text-muted-foreground hover:text-gold">
                      View Analytics
                   </Button>
                </div>
             </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
