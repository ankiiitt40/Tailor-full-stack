"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthComponents";
import { OTPInput } from "@/components/auth/OTPInput";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function VerifyOTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(30);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleComplete = async (otp: string) => {
    if (otp === "123456") {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      toast.success("Verification successful!");
      setTimeout(() => router.push("/login"), 3000);
    } else {
      toast.error("Invalid OTP. Try 123456");
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="otp-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight">Verify OTP</h2>
                <p className="text-muted-foreground text-sm mt-2">
                  Enter the 6-digit code sent to your email.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <OTPInput onComplete={handleComplete} />
                
                <div className="text-sm text-center">
                  <p className="text-muted-foreground">
                    Didn't receive code?{" "}
                    <button 
                      disabled={timer > 0} 
                      className="text-gold font-bold disabled:opacity-50 hover:underline"
                      onClick={() => {
                        setTimer(30);
                        toast.success("OTP Resent!");
                      }}
                    >
                      Resend {timer > 0 && `(${timer}s)`}
                    </button>
                  </p>
                </div>
              </div>

              <Button 
                className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : "Verify Account"}
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-10"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Verified!</h2>
                <p className="text-muted-foreground">Your account has been successfully verified.</p>
              </div>
              <p className="text-xs text-muted-foreground animate-pulse">Redirecting to login...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </AuthCard>
    </AuthLayout>
  );
}
