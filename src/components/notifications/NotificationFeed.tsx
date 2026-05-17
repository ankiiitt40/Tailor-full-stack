"use client";

import React from "react";
import { 
  ShoppingBag, 
  MessageSquare, 
  CreditCard, 
  Star, 
  Bell, 
  Zap,
  CheckCircle2,
  MoreVertical,
  Clock,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { mockNotifications } from "@/data/notification-data";
import { Notification } from "@/types/notifications";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const NotificationFeed = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "order": return <ShoppingBag className="w-5 h-5" />;
      case "message": return <MessageSquare className="w-5 h-5" />;
      case "payment": return <CreditCard className="w-5 h-5" />;
      case "review": return <Star className="w-5 h-5" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/10 text-red-500 border-red-500/20";
      case "medium": return "bg-gold/10 text-gold border-gold/20";
      default: return "bg-muted/10 text-muted-foreground border-border/20";
    }
  };

  return (
    <div className="space-y-4">
       {mockNotifications.map((notif, i) => (
         <motion.div
           key={notif.id}
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: i * 0.1 }}
           className={cn(
             "p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 group relative overflow-hidden",
             notif.isRead ? "bg-card/40 border-transparent hover:border-gold/20" : "bg-gold/5 border-gold shadow-xl"
           )}
         >
            {!notif.isRead && (
              <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            )}
            
            {/* Notification Icon / Sender Image */}
            <div className="relative shrink-0">
               <div className={cn(
                 "w-16 h-16 rounded-2xl flex items-center justify-center transition-all",
                 notif.isRead ? "bg-muted text-muted-foreground" : "bg-gold text-gold-foreground"
               )}>
                  {notif.sender ? (
                    <img src={notif.sender.image} className="w-full h-full object-cover rounded-2xl" />
                  ) : getIcon(notif.type)}
               </div>
               {!notif.isRead && (
                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-4 border-background animate-pulse" />
               )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-1">
               <div className="flex items-center gap-3">
                  <h4 className={cn(
                    "text-lg font-black tracking-tight truncate",
                    !notif.isRead ? "text-foreground" : "text-muted-foreground"
                  )}>
                     {notif.title}
                  </h4>
                  <Badge variant="outline" className={cn("text-[8px] font-black uppercase tracking-widest", getPriorityColor(notif.priority))}>
                     {notif.priority}
                  </Badge>
               </div>
               <p className="text-sm font-medium text-muted-foreground leading-relaxed truncate">
                  {notif.description}
               </p>
               <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {notif.timestamp}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span>{notif.type}</span>
               </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
               <Button className="h-12 px-6 rounded-xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[10px] uppercase tracking-widest transition-all">
                  View Detail
               </Button>
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                  <MoreVertical className="w-5 h-5" />
               </Button>
            </div>
         </motion.div>
       ))}
    </div>
  );
};
