"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard, AuthInput } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("OTP sent to your email!");
    router.push("/verify-otp");
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Forgot Password?</h2>
            <p className="text-muted-foreground text-sm">No worries, we'll send you reset instructions.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput 
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button 
              type="submit" 
              className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold text-lg"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send OTP"}
            </Button>
          </form>

          <Button 
            variant="ghost" 
            onClick={() => router.back()} 
            className="w-full h-10 text-muted-foreground hover:text-gold flex gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to login
          </Button>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
