"use client";

import React from "react";
import { 
  Star, 
  CheckCircle2, 
  ThumbsUp, 
  Share2, 
  MoreVertical, 
  Image as ImageIcon,
  User,
  ShoppingBag,
  Clock,
  Sparkles,
  MessageCircle,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { mockReviews } from "@/data/reviews-data";
import { Review } from "@/types/reviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const ReviewFeed = () => {
  return (
    <div className="space-y-8">
       {mockReviews.map((review, i) => (
         <motion.div
           key={review.id}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: i * 0.1 }}
           className="p-10 rounded-[3.5rem] bg-card border border-border/50 hover:border-gold/30 transition-all space-y-8 group relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-3xl rounded-full -mr-24 -mt-24" />
            
            {/* Review Header */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 relative z-10">
               <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gold/20">
                     <img src={review.customerImage} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                     <div className="flex items-center gap-3">
                        <h4 className="text-xl font-black tracking-tight">{review.customerName}</h4>
                        {review.isVerified && (
                          <Badge className="bg-green-500/10 text-green-500 border-none text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center gap-1">
                             <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                          </Badge>
                        )}
                     </div>
                     <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <span>{review.date}</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-gold">{review.serviceName}</span>
                     </div>
                  </div>
               </div>
               
               <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-1">
                     {[1, 2, 3, 4, 5].map((star) => (
                       <Star key={star} className={cn(
                         "w-5 h-5 fill-gold text-gold",
                         star > review.rating && "opacity-30"
                       )} />
                     ))}
                  </div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Master Tailor: {review.tailorName}</p>
               </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 relative z-10">
               <p className="text-lg font-medium leading-relaxed text-foreground/80 italic">
                  "{review.comment}"
               </p>

               {/* Outfit Photos */}
               {review.photos.length > 0 && (
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {review.photos.map((photo, idx) => (
                      <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 group/photo relative cursor-zoom-in">
                         <img src={photo} className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-white" />
                         </div>
                      </div>
                    ))}
                 </div>
               )}
            </div>

            {/* Satisfaction Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 p-6 rounded-3xl bg-muted/30 border border-border/50">
               {[
                 { label: "Fit Accuracy", value: review.fitSatisfaction, icon: Award },
                 { label: "Stitch Quality", value: review.qualitySatisfaction, icon: Sparkles },
                 { label: "Delivery Speed", value: review.deliverySatisfaction, icon: Clock },
               ].map((metric) => (
                 <div key={metric.label} className="space-y-2 text-center md:text-left">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                       <metric.icon className="w-3.5 h-3.5 text-gold" />
                       <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">{metric.label}</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                       <div className="h-full bg-gold rounded-full" style={{ width: `${metric.value * 10}%` }} />
                    </div>
                 </div>
               ))}
            </div>

            {/* Tailor Reply */}
            {review.reply && (
              <div className="p-8 rounded-[2.5rem] bg-foreground text-background relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-24 h-24 bg-gold/10 blur-2xl rounded-full" />
                 <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                             <MessageCircle className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                             <p className="text-[8px] font-black text-gold uppercase tracking-widest">Tailor Response</p>
                             <h5 className="text-sm font-black tracking-tight">{review.reply.tailorName}</h5>
                          </div>
                       </div>
                       <span className="text-[9px] font-bold opacity-40">{review.reply.date}</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed opacity-70 italic">
                       "{review.reply.comment}"
                    </p>
                 </div>
              </div>
            )}

            {/* Engagement */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50 relative z-10">
               <div className="flex items-center gap-6">
                  <Button variant="ghost" className="h-10 px-6 rounded-full border border-border/50 gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all text-[10px] uppercase tracking-widest">
                     <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({review.helpfulCount})
                  </Button>
                  <Button variant="ghost" className="h-10 px-6 rounded-full gap-2 font-bold hover:bg-gold/5 hover:text-gold transition-all text-[10px] uppercase tracking-widest">
                     <Share2 className="w-3.5 h-3.5" /> Share
                  </Button>
               </div>
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                  <MoreVertical className="w-5 h-5" />
               </Button>
            </div>
         </motion.div>
       ))}
    </div>
  );
};
