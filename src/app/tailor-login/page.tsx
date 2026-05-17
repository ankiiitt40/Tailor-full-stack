"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Loader2, Store } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard, AuthInput, PasswordInput } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";
import { toast } from "sonner";

export default function TailorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const success = await login(email, password);

    if (success) {
      toast.success("Welcome back, Master Tailor!");
      router.push("/tailor-dashboard");
    }
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex p-3 bg-gold/10 rounded-full mb-4">
              <Store className="w-6 h-6 text-gold" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Tailor Login</h2>
            <p className="text-muted-foreground text-sm">Manage your orders and shop profile.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput 
              label="Business Email"
              type="email"
              icon={Mail}
              placeholder="shop@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordInput 
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="text-right">
              <Link href="/forgot-password" className="text-xs font-bold text-gold hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold text-lg shadow-lg shadow-gold/20"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login to Studio"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Want to partner with us?{" "}
            <Link href="/tailor-signup" className="text-gold font-bold hover:underline">
              Join as Tailor
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
