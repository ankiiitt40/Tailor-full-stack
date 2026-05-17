"use client";

import React from "react";
import { 
  Star, 
  ThumbsUp, 
  CheckCircle2, 
  MessageSquare,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Image as ImageIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TailorProfile } from "@/types/profile";
import { cn } from "@/lib/utils";

export const ReviewSection = ({ profile }: { profile: TailorProfile }) => {
  return (
    <div className="space-y-12 py-12 border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
         {/* Ratings Summary */}
         <div className="md:w-80 space-y-8">
            <div className="space-y-2">
               <h2 className="text-4xl font-black tracking-tight">Customer Reviews</h2>
               <p className="text-muted-foreground font-medium">Real experiences from verified users</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10 text-center space-y-4">
               <h3 className="text-6xl font-black text-gold tracking-tighter">{profile.rating}</h3>
               <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-gold text-gold" />
                  ))}
               </div>
               <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Based on {profile.reviewsCount} Reviews</p>
            </div>

            <div className="space-y-4 px-2">
               {[
                  { star: 5, count: 120, percent: 85 },
                  { star: 4, count: 28, percent: 12 },
                  { star: 3, count: 5, percent: 2 },
                  { star: 2, count: 2, percent: 1 },
                  { star: 1, count: 1, percent: 0 },
               ].map((item) => (
                  <div key={item.star} className="flex items-center gap-4">
                     <span className="text-xs font-bold text-muted-foreground w-4">{item.star}</span>
                     <Progress value={item.percent} className="h-1.5 flex-1 [&>div]:bg-gold" />
                     <span className="text-[10px] font-bold text-muted-foreground w-8 text-right">{item.percent}%</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Reviews List */}
         <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between">
               <div className="flex gap-3">
                  <Button variant="outline" className="rounded-xl h-10 border-border/50 text-xs font-bold gap-2">
                     <Filter className="w-3.5 h-3.5" />
                     Filter
                  </Button>
                  <Button variant="outline" className="rounded-xl h-10 border-border/50 text-xs font-bold gap-2">
                     <ArrowUpDown className="w-3.5 h-3.5" />
                     Sort
                  </Button>
               </div>
               <Button variant="ghost" className="text-[10px] font-black text-gold uppercase tracking-widest">Write a Review</Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
               {profile.reviews.map((review, i) => (
                  <motion.div 
                    key={review.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[3rem] bg-card border border-border/50 hover:border-gold/20 transition-all group"
                  >
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                           <Avatar className="h-14 w-14 border-2 border-gold/20">
                              <AvatarImage src={review.userImage} />
                              <AvatarFallback>{review.userName[0]}</AvatarFallback>
                           </Avatar>
                           <div>
                              <div className="flex items-center gap-2">
                                 <h4 className="text-lg font-bold">{review.userName}</h4>
                                 {review.isVerified && (
                                    <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 rounded-full">
                                       <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
                                       <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Verified</span>
                                    </div>
                                 )}
                              </div>
                              <p className="text-xs text-muted-foreground font-medium">{review.date} • {review.serviceUsed}</p>
                           </div>
                        </div>
                        <div className="flex gap-0.5">
                           {[...Array(5)].map((_, idx) => (
                              <Star 
                                key={idx} 
                                className={cn(
                                  "w-3.5 h-3.5",
                                  idx < review.rating ? "fill-gold text-gold" : "text-muted-foreground/30"
                                )} 
                              />
                           ))}
                        </div>
                     </div>

                     <p className="text-muted-foreground leading-relaxed text-lg mb-6">"{review.comment}"</p>

                     {review.outfitImages && (
                        <div className="flex gap-4 mb-6">
                           {review.outfitImages.map((img, idx) => (
                              <div key={idx} className="relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer group/img">
                                 <img src={img} className="w-full h-full object-cover transition-transform group-hover/img:scale-110" />
                                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <ImageIcon className="w-6 h-6 text-white" />
                                 </div>
                              </div>
                           ))}
                        </div>
                     )}

                     <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <div className="flex gap-6">
                           <button className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-gold transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              Helpful (12)
                           </button>
                           <button className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-gold transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              Reply
                           </button>
                        </div>
                        <button className="text-muted-foreground hover:text-foreground">
                           <MoreVertical className="w-4 h-4" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>

            <Button variant="outline" className="w-full h-14 rounded-2xl border-border/50 font-black uppercase tracking-[0.2em] text-[10px] hover:border-gold/30 hover:text-gold transition-all">
               View All 156 Reviews
            </Button>
         </div>
      </div>
    </div>
  );
};

