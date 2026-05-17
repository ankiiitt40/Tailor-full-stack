"use client";

import React from "react";
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Smartphone, 
  Zap, 
  Calendar,
  CreditCard,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
import { defaultNotificationPrefs } from "@/data/settings-data";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const NotificationSettings = () => {
  return (
    <div className="space-y-12">
       {/* Category Toggles */}
       <div className="p-10 rounded-[4rem] bg-card border border-border/50 space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Bell className="w-6 h-6 text-gold" />
             </div>
             <div>
                <h3 className="text-xl font-black tracking-tight">Notification Channels</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Where should we reach you?</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { label: "Email Alerts", icon: Mail, key: "email" },
               { label: "SMS Alerts", icon: MessageSquare, key: "sms" },
               { label: "Push Notifications", icon: Smartphone, key: "push" },
             ].map((channel) => (
               <div key={channel.key} className="p-6 rounded-[2rem] bg-muted/30 border border-border/50 space-y-4 hover:border-gold/30 transition-all group">
                  <channel.icon className="w-6 h-6 text-gold" />
                  <div className="flex items-center justify-between">
                     <span className="text-xs font-black uppercase tracking-widest">{channel.label}</span>
                     <Switch defaultChecked={(defaultNotificationPrefs.channels as any)[channel.key]} />
                  </div>
               </div>
             ))}
          </div>
       </div>

       {/* Detailed Preferences */}
       <div className="space-y-8">
          <div className="space-y-1 px-4">
             <h3 className="text-2xl font-black tracking-tight">Event Preferences</h3>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Select which updates you want to receive</p>
          </div>

          <div className="space-y-4">
             {[
               { label: "Booking Updates", desc: "Status changes, delivery schedules, and reminders", icon: Calendar, active: true },
               { label: "Direct Messages", desc: "Chat notifications from your tailors and customers", icon: MessageSquare, active: true },
               { label: "Payment & Billing", desc: "Invoices, wallet credits, and payment confirmations", icon: CreditCard, active: true },
               { label: "AI Recommendations", desc: "Style DNA updates and personalized tailor suggestions", icon: Zap, active: true },
               { label: "Promotions & Offers", desc: "Seasonal discounts and exclusive platform deals", icon: Target, active: false },
             ].map((pref, i) => (
               <motion.div
                 key={pref.label}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 rounded-[3rem] bg-card border border-border/50 hover:border-gold/30 transition-all flex items-center gap-6 group"
               >
                  <div className="w-12 h-12 rounded-2xl bg-muted group-hover:bg-gold/10 flex items-center justify-center transition-all">
                     <pref.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1 space-y-1">
                     <Label className="text-sm font-black group-hover:text-gold transition-colors">{pref.label}</Label>
                     <p className="text-xs text-muted-foreground font-medium">{pref.desc}</p>
                  </div>
                  <Switch defaultChecked={pref.active} />
               </motion.div>
             ))}
          </div>
       </div>

       <div className="flex justify-end pt-8">
          <Button className="h-14 px-10 rounded-2xl bg-gold text-gold-foreground hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-widest shadow-xl transition-all">
             Save Preferences
          </Button>
       </div>
    </div>
  );
};
