"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User, Scissors, ChevronRight } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";

export default function RoleSelection() {
  const router = useRouter();

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">How would you like to continue?</h2>
        <p className="text-muted-foreground">Select your role to get started with StitchConnect.</p>
      </div>

      <div className="space-y-4">
        {/* User Role */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AuthCard 
            className="cursor-pointer border-transparent hover:border-gold/30 transition-all group"
            onClick={() => router.push("/signup")}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <User className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">I'm a Customer</h3>
                <p className="text-sm text-muted-foreground">Find expert tailors and book custom stitching.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
            </div>
          </AuthCard>
        </motion.div>

        {/* Tailor Role */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AuthCard 
            className="cursor-pointer border-transparent hover:border-gold/30 transition-all group"
            onClick={() => router.push("/tailor-signup")}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <Scissors className="w-8 h-8 text-gold group-hover:text-gold-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">I'm a Tailor</h3>
                <p className="text-sm text-muted-foreground">Grow your business and manage orders with ease.</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" />
            </div>
          </AuthCard>
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <button onClick={() => router.push("/login")} className="text-gold font-bold hover:underline">
            Login
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}
