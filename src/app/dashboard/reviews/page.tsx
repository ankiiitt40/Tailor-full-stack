"use client";

import React from "react";
import { Star, MessageSquarePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReviewsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Reviews & Feedback</h1>
        <p className="text-muted-foreground">Share your experience and help others find the best tailors.</p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
           <Star className="w-12 h-12 text-gold fill-gold" />
        </div>
        <div className="space-y-2">
           <h3 className="text-2xl font-bold">No reviews shared</h3>
           <p className="text-muted-foreground max-w-sm">You haven't reviewed any tailoring services yet. Your feedback matters!</p>
        </div>
        <Button className="bg-gold text-gold-foreground rounded-xl h-12 px-8 font-bold flex gap-2">
           <MessageSquarePlus className="w-4 h-4" /> Write a Review
        </Button>
      </div>
    </div>
  );
}
