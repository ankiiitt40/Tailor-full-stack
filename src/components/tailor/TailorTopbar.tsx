"use client";

import React, { useState } from "react";
import { 
  Search, 
  Bell, 
  MessageSquare, 
  Sun, 
  Moon, 
  ChevronDown,
  User,
  Settings,
  LogOut,
  Power
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/components/auth/AuthProvider";
import { tailorNotifications } from "@/data/tailor-dashboard";
import { Switch } from "@/components/ui/switch";

export const TailorTopbar = () => {
  const { user, logout } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-border bg-background/60 px-8 backdrop-blur-md">
      {/* Search */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
          <Input 
            placeholder="Search orders, customers or earnings..." 
            className="w-full bg-muted/50 border-none rounded-2xl h-11 pl-12 focus-visible:ring-gold focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Status Toggle */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-xl border border-border/50">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Shop Status</span>
          <div className="flex items-center gap-2">
             <span className={cn("text-[10px] font-bold", isOnline ? "text-green-500" : "text-red-500")}>
                {isOnline ? "ONLINE" : "OFFLINE"}
             </span>
             <Switch checked={isOnline} onCheckedChange={setIsOnline} className="scale-75 data-[state=checked]:bg-green-500" />
          </div>
        </div>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl bg-muted/50">
               <Bell className="w-5 h-5 text-muted-foreground" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full border-2 border-background" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass border-gold/20 p-2 mt-2">
            <DropdownMenuLabel className="px-4 py-3">Tailor Alerts</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gold/10" />
            {tailorNotifications.map((notif) => (
              <DropdownMenuItem key={notif.id} className="p-4 flex flex-col items-start gap-1 cursor-pointer hover:bg-muted/50 rounded-xl">
                <div className="flex justify-between w-full">
                  <span className="text-sm font-bold">{notif.title}</span>
                  <span className="text-[10px] text-muted-foreground">{notif.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{notif.message}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Messages */}
        <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl bg-muted/50">
          <MessageSquare className="w-5 h-5 text-muted-foreground" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gold text-gold-foreground border-2 border-background text-[10px] font-bold">3</Badge>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-4 h-12 rounded-2xl bg-muted/50 hover:bg-muted border border-border/50 transition-all group">
              <Avatar className="h-8 w-8 border border-gold/30">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start hidden sm:flex">
                <span className="text-sm font-bold tracking-tight">Royal Stitch</span>
                <Badge variant="secondary" className="text-[8px] bg-gold/10 text-gold border-none h-4">Premium Partner</Badge>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass border-gold/20 p-2 mt-2">
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50 rounded-xl gap-3">
              <User className="w-4 h-4 text-gold" /> Shop Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50 rounded-xl gap-3">
              <Settings className="w-4 h-4 text-gold" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gold/10" />
            <DropdownMenuItem onClick={logout} className="p-3 cursor-pointer text-red-500 hover:bg-red-500/10 rounded-xl gap-3">
              <LogOut className="w-4 h-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
