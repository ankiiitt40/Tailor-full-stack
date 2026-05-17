"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TailorSidebar } from "@/components/tailor/TailorSidebar";
import { TailorTopbar } from "@/components/tailor/TailorTopbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useAuth } from "@/components/auth/AuthProvider";

export default function TailorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, role, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || role !== "tailor") {
        router.push("/tailor-login");
      }
    }
  }, [isAuthenticated, role, isLoading, router]);

  if (isLoading || role !== "tailor") {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <TailorSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TailorTopbar />
        
        <main className="flex-1 overflow-x-hidden">
          <ScrollArea className="h-[calc(100vh-80px)]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 pb-24"
            >
              {children}
            </motion.div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
