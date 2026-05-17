"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Tailors", href: "#tailors" },
  { name: "Designs", href: "#designs" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gold rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Scissors className="w-6 h-6 text-gold-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Stitch<span className="text-gold">Connect</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="hover:text-gold">
              Login
            </Button>
          </Link>
          <Link href="/role-selection">
            <Button className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl px-6">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="glass border-l-gold/20">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-semibold hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-gold/20" />
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/role-selection" className="w-full">
                  <Button className="bg-gold hover:bg-gold/90 text-gold-foreground w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
