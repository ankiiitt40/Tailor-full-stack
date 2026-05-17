"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/auth/AuthProvider";
import { ActivityPanel } from "@/components/admin/ActivityPanel";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { role, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || role !== "admin") {
        router.push("/login");
      }
    }
  }, [isAuthenticated, role, isLoading, router]);

  if (isLoading || role !== "admin") {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 border-4 border-gold border-t-transparent"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <AdminTopbar />
        
        <div className="flex-1 flex overflow-hidden">
           {/* Center Content */}
           <main className="flex-1 relative overflow-hidden">
              <ScrollArea className="h-[calc(100vh-80px)]">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className="p-8 lg:p-12 pb-32"
                 >
                    {children}
                 </motion.div>
              </ScrollArea>
           </main>

           {/* Right Activity Panel */}
           <ActivityPanel />
        </div>
      </div>
    </div>
  );
}
