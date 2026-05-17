"use client";

import React from "react";
import Link from "next/link";
import { Scissors, Camera, Send, Share2, Play, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand & Newsletter */}
        <div className="space-y-8 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-gold rounded-xl">
              <Scissors className="w-6 h-6 text-gold-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Stitch<span className="text-gold">Connect</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Connecting fashion enthusiasts with master craftsmen for the perfect fit. 
            Luxury custom tailoring made simple.
          </p>
          <div className="space-y-4">
            <p className="text-white font-bold text-sm uppercase tracking-widest">Subscribe to Trends</p>
            <div className="flex gap-2 max-w-sm">
              <Input 
                placeholder="Email address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl"
              />
              <Button className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Links: Company */}
        <div className="space-y-8">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Company</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="#" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Press Kit</Link></li>
          </ul>
        </div>

        {/* Links: Services */}
        <div className="space-y-8">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Marketplace</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="#" className="hover:text-gold transition-colors">Find a Tailor</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Trending Designs</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Price Calculator</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Bulk Orders</Link></li>
            <li><Link href="#" className="hover:text-gold transition-colors">Gift Cards</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-4 text-white/60 text-sm">
             <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                hello@stitchconnect.in
             </li>
             <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                +91 1800-FIT-STYLE
             </li>
             <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                D-23, Hauz Khas Village, Delhi
             </li>
          </ul>
          
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all group">
              <Camera className="w-5 h-5 group-hover:text-gold-foreground text-white/60" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all group">
              <Send className="w-5 h-5 group-hover:text-gold-foreground text-white/60" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all group">
              <Share2 className="w-5 h-5 group-hover:text-gold-foreground text-white/60" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold transition-all group">
              <Play className="w-5 h-5 group-hover:text-gold-foreground text-white/60" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
        <p>© 2026 StitchConnect Marketplace. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-gold transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};
