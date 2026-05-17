"use client";

import React, { useState } from "react";
import { 
  Search, 
  MapPin, 
  Filter, 
  SlidersHorizontal, 
  Star, 
  Heart, 
  Clock, 
  Award,
  ChevronDown
} from "lucide-react";
import { tailors } from "@/data/tailors";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TailorsDiscovery() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Discover Tailors</h1>
          <p className="text-muted-foreground">Find the perfect craftsman for your next outfit.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by shop or specialty..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 rounded-xl bg-card border-border/50 h-11"
            />
          </div>
          <Button variant="outline" className="rounded-xl h-11 border-border/50 gap-2 font-bold">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar (Desktop) */}
        <aside className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Category</h3>
            <div className="space-y-3">
              {["All Categories", "Wedding Specialists", "Boutique", "Alterations", "Formal Wear"].map((cat) => (
                <div key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border-2 border-border group-hover:border-gold transition-colors" />
                  <span className="text-sm font-medium group-hover:text-gold transition-colors">{cat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Budget</h3>
            <div className="space-y-3">
              {["Economy (₹500 - ₹2k)", "Standard (₹2k - ₹5k)", "Premium (₹5k - ₹15k)", "Luxury (₹15k+)"].map((range) => (
                <div key={range} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded border-2 border-border group-hover:border-gold transition-colors" />
                  <span className="text-sm font-medium group-hover:text-gold transition-colors">{range}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-6 bg-gold/5 border-gold/20 rounded-3xl space-y-4">
             <div className="p-2 bg-gold/20 rounded-xl w-fit">
                <Award className="w-5 h-5 text-gold" />
             </div>
             <h4 className="font-bold">Verified Masters</h4>
             <p className="text-xs text-muted-foreground leading-relaxed">Only see tailors with 4.5+ ratings and verified physical studios.</p>
             <Button className="w-full bg-gold text-gold-foreground rounded-xl h-10 font-bold text-xs">Enable Filter</Button>
          </Card>
        </aside>

        {/* Tailors Grid */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex justify-between items-center px-2">
            <span className="text-sm font-bold text-muted-foreground">{tailors.length} results found</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-bold gap-2">
                  Sort by: Relevance <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass border-gold/20">
                <DropdownMenuItem className="p-3">Rating: High to Low</DropdownMenuItem>
                <DropdownMenuItem className="p-3">Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem className="p-3">Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem className="p-3">Distance: Nearest First</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tailors.map((tailor) => (
              <Card key={tailor.id} className="group overflow-hidden rounded-3xl border-border/50 hover:border-gold/30 glass-card transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tailor.image}
                    alt={tailor.shopName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-3 py-1 text-[10px]">
                      {tailor.experience}
                    </Badge>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-gold transition-colors">{tailor.shopName}</h3>
                      <div className="flex items-center text-muted-foreground text-[10px] mt-1">
                        <MapPin className="w-3 h-3 mr-1 text-gold" />
                        {tailor.location.split(",")[0]} • 1.2 km
                      </div>
                    </div>
                    <div className="text-right">
                       <div className="flex items-center gap-1 justify-end">
                          <Star className="w-3 h-3 fill-gold text-gold" />
                          <span className="text-xs font-bold">{tailor.rating}</span>
                       </div>
                       <p className="text-[10px] text-muted-foreground">({tailor.reviews} reviews)</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tailor.specialties.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50 text-[9px] font-bold rounded-lg px-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[10px] text-muted-foreground font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tailor.deliveryTime} Delivery
                    </div>
                    <span className="text-sm font-bold text-gold">₹{tailor.startingPrice} <span className="text-[9px] text-muted-foreground uppercase">starts</span></span>
                  </div>

                  <Button className="w-full bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-11 transition-all duration-300 font-bold">
                    View Studio Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
