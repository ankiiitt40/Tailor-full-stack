"use client";

import React from "react";
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  MapPin, 
  User, 
  Settings, 
  LogOut,
  ChevronDown
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthProvider";
import { notifications } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export const Topbar = () => {
  const { user, logout } = useAuth();
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-border bg-background/60 px-8 backdrop-blur-md">
      {/* Left: Search & Location */}
      <div className="flex items-center gap-8 flex-1 max-w-2xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
          <Input 
            placeholder="Search tailors, designs or orders..." 
            className="w-full bg-muted/50 border-none rounded-2xl h-11 pl-12 focus-visible:ring-gold focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-xl border border-border/50 shrink-0">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="text-xs font-bold whitespace-nowrap">Hauz Khas, Delhi</span>
          <Badge variant="secondary" className="text-[10px] bg-gold/10 text-gold border-none">Home</Badge>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl bg-muted/50 hover:bg-muted transition-all">
              <Bell className="w-5 h-5 text-muted-foreground" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass border-gold/20 p-2 mt-2">
            <DropdownMenuLabel className="px-4 py-3 flex justify-between items-center">
              <span>Notifications</span>
              <Badge variant="secondary" className="bg-gold/10 text-gold">{unreadCount} New</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gold/10" />
            <div className="max-h-80 overflow-y-auto no-scrollbar">
              {notifications.map((notif) => (
                <DropdownMenuItem key={notif.id} className="p-4 flex flex-col items-start gap-1 cursor-pointer hover:bg-muted/50 rounded-xl m-1">
                  <div className="flex justify-between w-full">
                    <span className="text-sm font-bold">{notif.title}</span>
                    <span className="text-[10px] text-muted-foreground">{notif.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{notif.message}</p>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator className="bg-gold/10" />
            <Button variant="ghost" className="w-full text-xs text-gold hover:text-gold hover:bg-gold/5 mt-2">
              View All Notifications
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" className="h-11 w-11 rounded-xl bg-muted/50 hover:bg-muted transition-all">
          <Sun className="w-5 h-5 text-muted-foreground dark:hidden" />
          <Moon className="w-5 h-5 text-muted-foreground hidden dark:block" />
        </Button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-4 h-12 rounded-2xl bg-muted/50 hover:bg-muted border border-border/50 transition-all group">
              <Avatar className="h-8 w-8 border border-gold/30">
                <AvatarImage src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"} />
                <AvatarFallback>{user?.fullName?.[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start hidden sm:flex">
                <span className="text-sm font-bold tracking-tight">{user?.fullName || "Aryan"}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Gold Member</span>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass border-gold/20 p-2 mt-2">
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50 rounded-xl gap-3">
              <User className="w-4 h-4 text-gold" /> Profile
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
