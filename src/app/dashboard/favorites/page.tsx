"use client";

import React from "react";
import { Heart, Search, Filter, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Your Favorites</h1>
        <p className="text-muted-foreground">Quick access to your shortlisted tailors and designs.</p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
           <Heart className="w-12 h-12 text-gold fill-gold" />
        </div>
        <div className="space-y-2">
           <h3 className="text-2xl font-bold">No favorites yet?</h3>
           <p className="text-muted-foreground max-w-sm">Start exploring our premium collection and save what you love.</p>
        </div>
        <Button className="bg-gold text-gold-foreground rounded-xl h-12 px-8 font-bold">Start Exploring</Button>
      </div>
    </div>
  );
}
