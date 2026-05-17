"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  MapPin, 
  BarChart3, 
  Palette, 
  ShoppingBag, 
  Ruler, 
  Heart, 
  Star, 
  User, 
  Settings, 
  LogOut,
  Scissors,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Nearby Tailors", href: "/dashboard/tailors", icon: MapPin },
  { name: "Compare Prices", href: "/dashboard/compare", icon: BarChart3 },
  { name: "Designs", href: "/dashboard/designs", icon: Palette },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Measurements", href: "/dashboard/measurements", icon: Ruler },
  { name: "Favorites", href: "/dashboard/favorites", icon: Heart },
  { name: "Reviews", href: "/dashboard/reviews", icon: Star },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="hidden md:flex flex-col bg-card border-r border-border h-screen sticky top-0 z-40 transition-all duration-300"
    >
      {/* Sidebar Header */}
      <div className="p-6 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-gold rounded-xl shrink-0">
            <Scissors className="w-6 h-6 text-gold-foreground" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl tracking-tight whitespace-nowrap"
            >
              Stitch<span className="text-gold">Connect</span>
            </motion.span>
          )}
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 relative group",
                  isActive 
                    ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-gold-foreground" : "group-hover:text-gold")} />
                {!isCollapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                )}
                {isActive && !isCollapsed && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute right-2 w-1.5 h-1.5 bg-gold-foreground rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-border space-y-4">
        {!isCollapsed && (
          <div className="px-4 py-3 bg-muted/50 rounded-2xl flex items-center gap-3 border border-border/50">
            <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Membership</p>
              <p className="text-xs font-bold">Gold Member</p>
            </div>
          </div>
        )}
        
        <button
          onClick={logout}
          className={cn(
            "flex items-center gap-4 px-4 py-3 w-full rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all duration-300",
            isCollapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
        </button>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full hover:bg-muted rounded-xl"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>
    </motion.aside>
  );
};
