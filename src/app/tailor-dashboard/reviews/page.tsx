"use client";

import React from "react";
import { 
  Star, 
  Search, 
  Filter, 
  MessageSquare, 
  CheckCircle2, 
  ThumbsUp, 
  MoreVertical,
  ChevronDown,
  BarChart3
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ratings = [
  { stars: 5, count: 850, percentage: 85 },
  { stars: 4, count: 120, percentage: 12 },
  { stars: 3, count: 20, percentage: 2 },
  { stars: 2, count: 5, percentage: 0.5 },
  { stars: 1, count: 5, percentage: 0.5 },
];

export default function TailorReviewsPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Reviews & Reputation</h1>
          <p className="text-muted-foreground">Monitor customer feedback and engage with your community.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <Badge className="bg-gold/10 text-gold border-none px-4 py-2 rounded-xl flex gap-2 font-bold text-sm">
              <Star className="w-4 h-4 fill-gold" /> 4.9 Avg Rating
           </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Rating Breakdown */}
        <Card className="p-8 glass-card border-border/50 rounded-[2.5rem] space-y-8">
           <div className="space-y-2">
              <h3 className="text-xl font-bold">Rating Distribution</h3>
              <p className="text-xs text-muted-foreground">Overview of customer satisfaction scores.</p>
           </div>
           
           <div className="space-y-5">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-4">
                   <div className="flex items-center gap-1 w-12">
                      <span className="text-sm font-bold">{rating.stars}</span>
                      <Star className="w-3 h-3 fill-gold text-gold" />
                   </div>
                   <Progress value={rating.percentage} className="h-2 bg-muted border-none [&>div]:bg-gold" />
                   <span className="text-xs font-bold text-muted-foreground w-12 text-right">{rating.count}</span>
                </div>
              ))}
           </div>
           
           <div className="pt-6 border-t border-border/50">
              <div className="flex justify-between items-center text-sm font-bold">
                 <span className="text-muted-foreground">Recommendation Rate</span>
                 <span className="text-gold">98.5%</span>
              </div>
           </div>
        </Card>

        {/* Review Feed */}
        <div className="lg:col-span-2 space-y-8">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex gap-2 bg-muted/50 p-1 rounded-xl w-full md:w-auto">
                 {["All Reviews", "Unreplied", "Critical", "With Photos"].map((tab, i) => (
                   <button 
                     key={tab}
                     className={cn(
                       "flex-1 md:flex-none px-6 py-2.5 rounded-lg text-xs font-bold transition-all",
                       i === 0 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                     )}
                   >
                      {tab}
                   </button>
                 ))}
              </div>
              <Button variant="ghost" className="text-sm font-bold gap-2 ml-auto">
                 Sort by: Recent <ChevronDown className="w-4 h-4" />
              </Button>
           </div>

           <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-8 glass-card border-border/50 rounded-[2.5rem] space-y-6 group hover:border-gold/30 transition-all duration-500">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                         <Avatar className="h-12 w-12 rounded-2xl">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Reviewer${i}`} />
                            <AvatarFallback>JD</AvatarFallback>
                         </Avatar>
                         <div className="space-y-1">
                            <h4 className="font-bold">Ananya Kapoor</h4>
                            <div className="flex gap-0.5">
                               {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-gold text-gold" />)}
                            </div>
                         </div>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">2 days ago</span>
                   </div>

                   <div className="space-y-4">
                      <p className="text-sm text-foreground leading-relaxed">
                         "The stitching quality is absolutely phenomenal! I ordered a custom lehenga for my sister's wedding and the fit was perfect from day one. Highly recommend Royal Stitch House for their precision and timely delivery."
                      </p>
                      <div className="flex gap-3">
                         <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border/50">
                            <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200" className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border/50">
                            <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=200" className="w-full h-full object-cover" alt="" />
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-border/50">
                      <div className="flex gap-6">
                         <button className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
                            <ThumbsUp className="w-3 h-3" /> Helpful (12)
                         </button>
                         <button className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
                            <MessageSquare className="w-3 h-3" /> Reply
                         </button>
                      </div>
                      <Badge className="bg-muted text-[9px] font-bold uppercase tracking-wider text-muted-foreground px-3 py-1 border-none">
                         Order #SC-9800
                      </Badge>
                   </div>
                   
                   {/* Reply Preview */}
                   {i === 1 && (
                     <div className="p-6 bg-gold/5 border-l-4 border-gold rounded-r-[1.5rem] mt-4 space-y-2">
                        <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Your Response</p>
                        <p className="text-xs text-muted-foreground leading-relaxed italic">
                           "Thank you so much for your kind words, Ananya! We're thrilled that the lehenga was a perfect fit. It was a pleasure working with you!"
                        </p>
                     </div>
                   )}
                </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
