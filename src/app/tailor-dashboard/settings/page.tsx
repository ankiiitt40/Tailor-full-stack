"use client";

import React from "react";
import { 
  Settings, 
  Bell, 
  Shield, 
  Moon, 
  Store, 
  Lock, 
  Truck, 
  HelpCircle,
  ChevronRight,
  Monitor,
  Smartphone
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const settingsGroups = [
  {
    title: "Shop Management",
    items: [
      { name: "Order Notifications", icon: Bell, desc: "Receive alerts for new bookings and status updates", switch: true },
      { name: "Delivery Preferences", icon: Truck, desc: "Set your delivery zones and timelines" },
      { name: "Partner Security", icon: Shield, desc: "Verify your studio and manage access" },
    ]
  },
  {
    title: "Account & Privacy",
    items: [
      { name: "Login & Security", icon: Lock, desc: "Update your password and 2FA settings" },
      { name: "Shop Visibility", icon: Store, desc: "Control who can see your shop on the platform", switch: true },
    ]
  },
  {
    title: "System & Theme",
    items: [
      { name: "Dark Interface", icon: Moon, desc: "Switch to high-contrast dark mode for low light", switch: true },
      { name: "App Experience", icon: Monitor, desc: "Dashboard layout and widget preferences" },
    ]
  }
];

export default function TailorSettingsPage() {
  return (
    <div className="space-y-12 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Partner Settings</h1>
        <p className="text-muted-foreground">Manage your tailor shop preferences and dashboard experience.</p>
      </div>

      <div className="space-y-10">
        {settingsGroups.map((group) => (
          <div key={group.title} className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-2">{group.title}</h3>
            <Card className="glass-card border-border/50 rounded-[2.5rem] overflow-hidden">
              <div className="divide-y divide-border/50">
                {group.items.map((item) => (
                  <div key={item.name} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    {item.switch ? (
                      <Switch className="data-[state=checked]:bg-gold" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}

        <div className="pt-6 border-t border-border/50 flex justify-between items-center px-4">
           <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              <span>Partner v2.4.1</span>
              <span>•</span>
              <span className="text-gold">Stable Build</span>
           </div>
           <Button variant="ghost" className="text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-500/10">Close Shop Temporarily</Button>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
