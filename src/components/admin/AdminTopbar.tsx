"use client";

import React, { useState } from "react";
import { 
  Search, 
  Bell, 
  MessageSquare, 
  ChevronDown,
  User,
  Settings,
  LogOut,
  Plus,
  Zap,
  LayoutGrid,
  ShieldAlert
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
import { adminNotifications } from "@/data/admin-dashboard";

export const AdminTopbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-border bg-background/60 px-8 backdrop-blur-md">
      {/* Global Search */}
      <div className="flex items-center gap-6 flex-1 max-w-2xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
          <Input 
            placeholder="Search platform (users, tailors, transactions, reports...)" 
            className="w-full bg-muted/50 border-none rounded-2xl h-12 pl-12 focus-visible:ring-gold focus-visible:ring-offset-0 transition-all focus:bg-background focus:shadow-xl focus:shadow-gold/5"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 bg-muted rounded-lg border border-border/50">
             <span className="text-[10px] font-bold text-muted-foreground">⌘</span>
             <span className="text-[10px] font-bold text-muted-foreground">K</span>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="flex items-center gap-4">
        {/* Quick Actions */}
        <DropdownMenu>
           <DropdownMenuTrigger asChild>
              <Button className="hidden lg:flex items-center gap-2 bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-11 px-5 font-bold transition-all shadow-lg shadow-black/5">
                 <Plus className="w-4 h-4" /> Quick Action
              </Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent align="end" className="glass border-gold/20 w-56 p-2 mt-2">
              <DropdownMenuItem className="p-3 cursor-pointer rounded-xl gap-3">
                 <ShieldAlert className="w-4 h-4 text-red-500" /> Ban User
              </DropdownMenuItem>
               <DropdownMenuItem className="p-3 cursor-pointer rounded-xl gap-3">
                 <Zap className="w-4 h-4 text-gold" /> Verify Tailor
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer rounded-xl gap-3">
                 <LayoutGrid className="w-4 h-4 text-blue-500" /> Featured Listing
              </DropdownMenuItem>
           </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-8 w-px bg-border/50 mx-2 hidden md:block" />

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-11 w-11 rounded-xl bg-muted/50 hover:bg-muted transition-all">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 glass border-gold/20 p-2 mt-2">
            <DropdownMenuLabel className="px-4 py-3 flex justify-between items-center">
               <span>Platform Alerts</span>
               <Badge className="bg-red-500 text-white border-none text-[8px] h-4">Critical</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gold/10" />
            {adminNotifications.map((notif) => (
              <DropdownMenuItem key={notif.id} className="p-4 flex flex-col items-start gap-1 cursor-pointer hover:bg-muted/50 rounded-xl transition-all">
                <div className="flex justify-between w-full">
                  <span className="text-sm font-bold">{notif.title}</span>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold">{notif.time}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{notif.message}</p>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-gold/10" />
            <DropdownMenuItem className="p-3 text-center justify-center text-[10px] font-bold text-gold uppercase tracking-widest cursor-pointer hover:bg-gold/5">
               View All Notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="h-11 w-11 rounded-xl bg-muted/50 hover:bg-muted">
          <MessageSquare className="w-5 h-5 text-muted-foreground" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-4 h-12 rounded-2xl bg-muted/50 hover:bg-muted border border-border/50 transition-all group">
              <Avatar className="h-8 w-8 border-2 border-gold/30">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start hidden sm:flex">
                <span className="text-sm font-bold tracking-tight">Super Admin</span>
                <span className="text-[8px] font-bold text-gold uppercase tracking-widest">Root Access</span>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 glass border-gold/20 p-2 mt-2">
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50 rounded-xl gap-3">
              <User className="w-4 h-4 text-gold" /> Admin Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="p-3 cursor-pointer hover:bg-muted/50 rounded-xl gap-3">
              <Settings className="w-4 h-4 text-gold" /> System Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gold/10" />
            <DropdownMenuItem onClick={logout} className="p-3 cursor-pointer text-red-500 hover:bg-red-500/10 rounded-xl gap-3">
              <LogOut className="w-4 h-4" /> Terminate Session
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
