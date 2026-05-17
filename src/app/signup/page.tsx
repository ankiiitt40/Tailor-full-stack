"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, User, Phone, Loader2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard, AuthInput, PasswordInput, SocialLoginButton } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await authService.signup(formData.email, formData.password, formData.fullName, "user");
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to create account.");
    }
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
            <p className="text-muted-foreground text-sm">Join the elite fashion community.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AuthInput 
              label="Full Name"
              icon={User}
              placeholder="Alex Johnson"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
            />
            <AuthInput 
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <AuthInput 
              label="Phone Number"
              icon={Phone}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <PasswordInput 
              label="Password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <PasswordInput 
              label="Confirm Password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />

            <div className="flex items-start space-x-3 px-1">
              <Checkbox id="terms" required className="mt-1" />
              <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                I agree to the <Link href="#" className="text-gold font-bold hover:underline">Terms of Service</Link> and <Link href="#" className="text-gold font-bold hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold text-lg shadow-lg shadow-gold/20"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
            </Button>
          </form>

          <div className="relative">
             <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground font-medium">Or join with</span>
            </div>
          </div>

          <SocialLoginButton 
            provider="google" 
            onClick={async () => {
              try {
                await authService.loginWithGoogle("user");
                toast.success("Account created successfully!");
                router.push("/dashboard");
              } catch (e: any) {
                toast.error(e.message || "Google signup failed");
              }
            }}
          />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-gold font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
