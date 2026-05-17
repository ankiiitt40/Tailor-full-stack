"use client";

import React, { use } from "react";
import { 
  ArrowLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Globe, 
  MessageSquare,
  Zap,
  ShieldCheck,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TailorHero } from "@/components/profile/TailorHero";
import { PricingTable } from "@/components/profile/PricingTable";
import { PortfolioGallery } from "@/components/profile/PortfolioGallery";
import { ReviewSection } from "@/components/profile/ReviewSection";
import { BookingCard } from "@/components/profile/BookingCard";
import { profiles } from "@/data/tailor-profiles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TailorProfilePage({ params }: { params: Promise<{ tailorId: string }> }) {
  const { tailorId } = use(params);
  const profile = profiles[tailorId];

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
         <h1 className="text-3xl font-bold">Tailor not found</h1>
         <Link href="/dashboard/explore">
            <Button className="bg-gold text-gold-foreground rounded-full h-14 px-8 font-bold">
               Back to Explore
            </Button>
         </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Navigation Header */}
      <div className="sticky top-0 z-[60] bg-background/80 backdrop-blur-xl border-b border-border/50 px-8 py-4">
         <div className="max-w-[1600px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
               <Link href="/dashboard/explore">
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-gold/10 hover:text-gold transition-all">
                     <ArrowLeft className="w-6 h-6" />
                  </Button>
               </Link>
               <div className="h-8 w-px bg-border/50" />
               <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-muted-foreground">Explore</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/30" />
                  <span className="text-sm font-black text-foreground uppercase tracking-widest">{profile.shopName}</span>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <Button variant="outline" className="hidden md:flex rounded-xl h-12 border-border/50 font-bold gap-2 hover:bg-gold/10 hover:text-gold">
                  <MessageSquare className="w-4 h-4" />
                  Ask a Question
               </Button>
               <Link href={`/booking?tailor=${profile.id}`}>
                  <Button className="rounded-xl h-12 bg-gold text-gold-foreground hover:bg-gold/90 font-bold px-8">
                     Book Now
                  </Button>
               </Link>
            </div>
         </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 pt-8">
         {/* Hero Section */}
         <TailorHero profile={profile} />

         {/* Main Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-24">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-16">
               
               {/* About Section */}
               <section className="space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-4xl font-black tracking-tight">About the Studio</h2>
                     <p className="text-muted-foreground text-xl leading-relaxed">
                        {profile.bio}
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Card className="p-8 rounded-[2.5rem] bg-card border-border/50 hover:border-gold/20 transition-all space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                              <Clock className="w-6 h-6 text-gold" />
                           </div>
                           <h4 className="text-xl font-bold">Working Hours</h4>
                        </div>
                        <p className="text-muted-foreground font-medium">{profile.workingHours}</p>
                        <div className="pt-4 flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                           <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Open Now</span>
                        </div>
                     </Card>

                     <Card className="p-8 rounded-[2.5rem] bg-card border-border/50 hover:border-gold/20 transition-all space-y-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                              <Globe className="w-6 h-6 text-gold" />
                           </div>
                           <h4 className="text-xl font-bold">Languages</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {profile.languages.map(lang => (
                              <Badge key={lang} variant="outline" className="rounded-full px-4 py-1.5 border-border/50 font-bold text-[10px] uppercase tracking-widest">
                                 {lang}
                              </Badge>
                           ))}
                        </div>
                     </Card>
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] ml-1">Specializations</h4>
                     <div className="flex flex-wrap gap-3">
                        {profile.specialization.map(spec => (
                           <div key={spec} className="flex items-center gap-2 px-6 py-3 bg-card border border-border/50 rounded-2xl hover:border-gold/30 hover:bg-gold/5 transition-all">
                              <Zap className="w-4 h-4 text-gold" />
                              <span className="text-sm font-bold">{spec}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>

               {/* Pricing Section */}
               <PricingTable profile={profile} />

               {/* Portfolio Section */}
               <PortfolioGallery profile={profile} />

               {/* Reviews Section */}
               <ReviewSection profile={profile} />

               {/* FAQ Section */}
               <section className="space-y-10 py-12 border-t border-border/50">
                  <div className="space-y-2 text-center md:text-left">
                     <h2 className="text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                     <p className="text-muted-foreground text-lg font-medium">Everything you need to know about our services</p>
                  </div>
                  <Accordion className="w-full space-y-4">
                     {profile.faq.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-border/50 bg-card rounded-[2rem] px-8 overflow-hidden transition-all">
                           <AccordionTrigger className="hover:no-underline hover:text-gold py-6 text-lg font-bold text-left">
                              {item.question}
                           </AccordionTrigger>
                           <AccordionContent className="pb-8 text-muted-foreground text-lg leading-relaxed">
                              {item.answer}
                           </AccordionContent>
                        </AccordionItem>
                     ))}
                  </Accordion>
               </section>
            </div>

            {/* Right Column: Sticky Booking */}
            <div className="lg:col-span-4 hidden lg:block relative">
               <BookingCard profile={profile} />
            </div>
         </div>
      </div>

      {/* Mobile Booking Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden glass-card border-t border-gold/20 p-6 flex items-center justify-between shadow-[0_-10px_50px_rgba(0,0,0,0.2)]">
         <div className="space-y-0.5">
            <p className="text-[10px] font-black text-gold uppercase tracking-widest leading-none">Starts From</p>
            <p className="text-2xl font-black tracking-tighter">₹800 <span className="text-xs font-bold text-muted-foreground">/stitching</span></p>
         </div>
         <div className="flex gap-3">
            <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-border/50">
               <PhoneCall className="w-5 h-5" />
            </Button>
            <Link href={`/booking?tailor=${profile.id}`}>
               <Button className="h-14 px-10 rounded-2xl bg-gold text-gold-foreground font-black uppercase tracking-widest text-xs">
                  Book Now
               </Button>
            </Link>
         </div>
      </div>
    </div>
  );
}
