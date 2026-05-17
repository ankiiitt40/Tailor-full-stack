"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  Scissors, 
  ShoppingBag, 
  AlertTriangle, 
  BarChart3, 
  IndianRupee, 
  CreditCard, 
  Star, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Tailors", href: "/admin/tailors", icon: Scissors },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Reports", href: "/admin/reports", icon: AlertTriangle, badge: "3" },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Revenue", href: "/admin/revenue", icon: IndianRupee },
  { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  { name: "Featured", href: "/admin/featured", icon: Star },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="hidden md:flex flex-col bg-foreground text-background h-screen sticky top-0 z-40 transition-all duration-300 shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/10 h-20">
        <Link href="/admin" className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-gold rounded-xl shrink-0">
            <ShieldCheck className="w-6 h-6 text-gold-foreground" />
          </div>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col"
            >
              <span className="font-bold text-lg tracking-tight whitespace-nowrap leading-none text-white">
                Stitch<span className="text-gold">Admin</span>
              </span>
              <span className="text-[10px] font-bold text-gold/60 uppercase tracking-[0.2em] mt-1">Control Center</span>
            </motion.div>
          )}
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative group",
                  isActive 
                    ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className="flex items-center gap-4">
                  <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "text-gold-foreground" : "group-hover:text-gold")} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                  )}
                </div>
                {!isCollapsed && item.badge && (
                  <Badge className="bg-red-500 text-white border-none h-5 px-1.5 min-w-[20px] justify-center text-[10px] font-bold">
                    {item.badge}
                  </Badge>
                )}
                
                {/* Active Indicator */}
                {isActive && !isCollapsed && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute right-2 w-1 h-6 bg-gold-foreground/30 rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-4 bg-black/20">
        {!isCollapsed && (
          <div className="px-4 py-3 bg-white/5 rounded-2xl flex items-center gap-3 border border-white/10">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-gold" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <p className="text-[10px] font-bold uppercase tracking-wider text-green-500">System Healthy</p>
              </div>
              <p className="text-[10px] font-medium text-white/40 truncate">Uptime: 99.99% • v2.8.0</p>
            </div>
          </div>
        )}
        
        <div className="flex flex-col gap-2">
           <button
             onClick={logout}
             className={cn(
               "flex items-center gap-4 px-4 py-3 w-full rounded-xl text-white/60 hover:bg-red-500 hover:text-white transition-all duration-300",
               isCollapsed ? "justify-center" : ""
             )}
           >
             <LogOut className="w-5 h-5" />
             {!isCollapsed && <span className="text-sm font-medium">Terminate Session</span>}
           </button>

           <Button 
             variant="ghost" 
             size="icon" 
             onClick={() => setIsCollapsed(!isCollapsed)}
             className="w-full hover:bg-white/5 text-white/40 hover:text-white rounded-xl"
           >
             {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
           </Button>
        </div>
      </div>
    </motion.aside>
  );
};
