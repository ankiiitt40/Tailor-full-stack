"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Phone, User, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AuthCard = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn("glass-card p-8 md:p-10 rounded-[2.5rem] shadow-2xl border-white/20 relative overflow-hidden", className)}
  >
    {children}
  </div>
);

export const AuthInput = ({ 
  label, 
  icon: Icon, 
  error, 
  ...props 
}: { label: string, icon?: any, error?: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
      {label}
    </label>
    <div className="relative group">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />}
      <Input 
        {...props} 
        className={cn(
          "h-12 bg-muted/30 border-border/50 rounded-xl focus-visible:ring-gold focus-visible:ring-offset-0 transition-all",
          Icon ? "pl-12" : "pl-4",
          error && "border-red-500 focus-visible:ring-red-500"
        )}
      />
    </div>
    {error && <p className="text-[10px] text-red-500 font-medium ml-1">{error}</p>}
  </div>
);

export const PasswordInput = ({ label, error, ...props }: { label: string, error?: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
        {label}
      </label>
      <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />
        <Input 
          {...props} 
          type={show ? "text" : "password"}
          className={cn(
            "h-12 bg-muted/30 border-border/50 rounded-xl pl-12 pr-12 focus-visible:ring-gold focus-visible:ring-offset-0 transition-all",
            error && "border-red-500 focus-visible:ring-red-500"
          )}
        />
        <button 
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gold transition-colors"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
      {error && <p className="text-[10px] text-red-500 font-medium ml-1">{error}</p>}
    </div>
  );
};

export const SocialLoginButton = ({ provider, onClick }: { provider: "google" | "facebook"; onClick?: () => void }) => (
  <Button 
    variant="outline" 
    onClick={onClick}
    className="w-full h-12 rounded-xl border-border/50 hover:bg-muted/50 transition-all flex gap-3 font-semibold"
  >
    {provider === "google" ? (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ) : (
      <Store className="w-5 h-5" />
    )}
    Continue with {provider === "google" ? "Google" : "Shop"}
  </Button>
);
