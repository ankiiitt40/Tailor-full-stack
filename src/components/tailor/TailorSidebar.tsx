"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Palette, 
  IndianRupee, 
  Users, 
  Star, 
  BarChart3, 
  Wallet, 
  CreditCard,
  User, 
  Settings, 
  LogOut,
  Scissors,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Store
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Dashboard", href: "/tailor-dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/tailor-dashboard/orders", icon: ShoppingBag },
  { name: "Designs", href: "/tailor-dashboard/designs", icon: Palette },
  { name: "Pricing", href: "/tailor-dashboard/pricing", icon: IndianRupee },
  { name: "Customers", href: "/tailor-dashboard/customers", icon: Users },
  { name: "Reviews", href: "/tailor-dashboard/reviews", icon: Star },
  { name: "Analytics", href: "/tailor-dashboard/analytics", icon: BarChart3 },
  { name: "Earnings", href: "/tailor-dashboard/earnings", icon: Wallet },
  { name: "Subscription", href: "/tailor-dashboard/subscription", icon: CreditCard },
  { name: "Profile", href: "/tailor-dashboard/profile", icon: User },
  { name: "Settings", href: "/tailor-dashboard/settings", icon: Settings },
];

export const TailorSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="hidden md:flex flex-col bg-card border-r border-border h-screen sticky top-0 z-40 transition-all duration-300"
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <Link href="/tailor-dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-gold rounded-xl shrink-0">
            <Scissors className="w-6 h-6 text-gold-foreground" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl tracking-tight whitespace-nowrap"
            >
              Tailor<span className="text-gold">Hub</span>
            </motion.span>
          )}
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
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
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-4">
        {!isCollapsed && (
          <div className="px-4 py-3 bg-gold/5 rounded-2xl flex items-center gap-3 border border-gold/10">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center shrink-0">
              <Store className="w-4 h-4 text-gold-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gold">Premium Shop</p>
              <p className="text-xs font-bold truncate">Royal Stitch House</p>
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
          {!isCollapsed && <span className="text-sm font-medium">Logout Partner</span>}
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
