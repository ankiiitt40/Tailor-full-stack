"use client";

import React from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { VercelNavigation } from "@/components/dashboard/VercelNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUIStore } from "@/stores/uiStore";
import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layoutPreference } = useUIStore();
  const isVercelLayout = layoutPreference === "vercel";

  return (
    <div className="flex min-h-screen bg-background">
      {/* Conditionally render Sidebar in traditional layout */}
      {!isVercelLayout && <Sidebar />}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Render Topbar for traditional layout, or VercelNavigation for Vercel layout */}
        {isVercelLayout ? <VercelNavigation /> : <Topbar />}
        
        <main className="flex-1 overflow-x-hidden">
          <ScrollArea className={isVercelLayout ? "h-[calc(100vh-108px)]" : "h-[calc(100vh-80px)]"}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={isVercelLayout ? "max-w-[1200px] mx-auto p-6 sm:p-8 pb-24" : "p-8 pb-24"}
            >
              {children}
            </motion.div>
          </ScrollArea>
        </main>
      </div>

      {/* Mobile Navigation (Floating Bottom Bar for Mobile) - only in traditional sidebar layout */}
      {!isVercelLayout && (
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 glass rounded-2xl p-4 flex justify-around items-center border border-white/20 shadow-2xl">
           {/* Simple mobile nav for demo */}
           <div className="flex flex-col items-center gap-1 text-gold">
              <div className="w-6 h-6" /> {/* Icon placeholder */}
              <span className="text-[10px] font-bold">Home</span>
           </div>
           {/* ... other mobile nav items ... */}
        </div>
      )}
    </div>
  );
}
