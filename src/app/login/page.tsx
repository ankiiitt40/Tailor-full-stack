"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard, AuthInput, PasswordInput, SocialLoginButton } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/components/auth/AuthProvider";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = await login(email, password);

    if (success) {
      toast.success("Welcome back to StitchConnect!");
      router.push("/dashboard"); // AuthProvider handles redirect to correct dashboard
    }
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
            <p className="text-muted-foreground text-sm">Please enter your details to login.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput 
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              icon={Mail}
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

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-xs font-medium text-muted-foreground cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-xs font-bold text-gold hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold text-lg shadow-lg shadow-gold/20"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground font-medium">Or continue with</span>
            </div>
          </div>

          <SocialLoginButton 
            provider="google" 
            onClick={async () => {
              try {
                await authService.loginWithGoogle("user");
                toast.success("Welcome back to StitchConnect!");
                router.push("/dashboard");
              } catch (e: any) {
                toast.error(e.message || "Google login failed");
              }
            }}
          />

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/role-selection" className="text-gold font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
