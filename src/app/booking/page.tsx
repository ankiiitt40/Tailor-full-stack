"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { bookingService } from "@/services/bookings.service";
import { profiles } from "@/data/tailor-profiles";
import { toast } from "sonner";
import { Suspense } from "react";
import { BookingStepper } from "@/components/booking/BookingStepper";
import { ServiceSelection } from "@/components/booking/ServiceSelection";
import { DesignUpload } from "@/components/booking/DesignUpload";
import { MeasurementForm } from "@/components/booking/MeasurementForm";
import { SchedulingForm } from "@/components/booking/SchedulingForm";
import { PaymentSelection } from "@/components/booking/PaymentSelection";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { BookingService, MeasurementProfile } from "@/types/booking";
import { savedProfiles } from "@/data/booking-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  "Service",
  "Design",
  "Measurements",
  "Schedule",
  "Payment"
];

export default function BookingPageWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookingWizardPage />
    </Suspense>
  );
}

function BookingWizardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  
  const tailorId = searchParams.get("tailor") || "ta-1";
  const profile = profiles[tailorId] || profiles["ta-1"];

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Booking State
  const [selectedService, setSelectedService] = useState<BookingService | null>(null);
  const [referenceImages, setReferenceImages] = useState<string[]>([]);
  const [designNotes, setDesignNotes] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<MeasurementProfile | null>(savedProfiles[0]);
  const [schedule, setSchedule] = useState({
    date: "",
    timeSlot: "",
    isUrgent: false,
    hasHomePickup: true
  });
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      setIsSubmitting(true);
      try {
        const basePrice = selectedService?.basePrice || 0;
        const urgentFee = schedule.isUrgent ? 500 : 0;
        const tax = Math.round((basePrice + urgentFee) * 0.18);
        const total = basePrice + urgentFee + tax;

        // Save booking to Firestore via bookingService
        await bookingService.createBooking({
          userId: user?.uid || "anonymous",
          userName: user?.fullName || user?.displayName || "Aryan Verma",
          userEmail: user?.email || "user@stitchconnect.com",
          tailorId: tailorId,
          tailorName: profile.shopName,
          serviceName: selectedService?.name || "Premium Stitching",
          price: total,
          deliveryDate: schedule.date || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          isUrgent: schedule.isUrgent,
          hasHomePickup: schedule.hasHomePickup,
          paymentMethod: paymentMethod,
          referenceImages: referenceImages,
          designNotes: designNotes,
          measurements: selectedProfile || null
        });

        toast.success("Booking placed successfully!");
        router.push("/checkout/success");
      } catch (error) {
        console.error("Booking error:", error);
        toast.error("Failed to place booking. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Booking Hero Header */}
      <div className="relative pt-12 pb-16 overflow-hidden border-b border-border/50">
         <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] rounded-full -mr-48 -mt-48" />
         <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3">
                     <Badge className="bg-gold/10 text-gold border-gold/20 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Secure Booking Flow
                     </Badge>
                     <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full border border-border/50">
                        <ShieldCheck className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Certified Premium Partner</span>
                     </div>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                     Book Your Perfect <br />
                     <span className="text-gold">Stitching Experience</span> <span className="inline-block animate-bounce">✨</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-medium max-w-xl">
                     Complete your tailoring order with our precision booking system. Trusted by 10,000+ fashion enthusiasts.
                  </p>
               </div>
               
               <div className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-card/80 backdrop-blur-3xl border border-border/50 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                     <Clock className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Average Response</p>
                     <p className="text-2xl font-black tracking-tight">15 Minutes</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
         <BookingStepper steps={steps} currentStep={currentStep} />

         <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 mt-20">
            {/* Step Content */}
            <div className="xl:col-span-8">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                     {currentStep === 0 && (
                       <ServiceSelection 
                         selectedService={selectedService} 
                         onSelect={(s) => { setSelectedService(s); handleNext(); }} 
                       />
                     )}
                     {currentStep === 1 && (
                       <DesignUpload 
                         images={referenceImages} 
                         notes={designNotes} 
                         onUpdate={(imgs, notes) => { setReferenceImages(imgs); setDesignNotes(notes); }} 
                       />
                     )}
                     {currentStep === 2 && (
                       <MeasurementForm 
                         profile={selectedProfile} 
                         onUpdate={setSelectedProfile} 
                       />
                     )}
                     {currentStep === 3 && (
                       <SchedulingForm 
                         {...schedule} 
                         onUpdate={(data) => setSchedule(prev => ({ ...prev, ...data }))} 
                       />
                     )}
                     {currentStep === 4 && (
                       <PaymentSelection 
                         method={paymentMethod} 
                         onSelect={setPaymentMethod} 
                       />
                     )}
                  </motion.div>
               </AnimatePresence>

               {/* Step Controls */}
               {currentStep > 0 && (
                 <div className="flex items-center justify-between mt-16 pt-12 border-t border-border/50">
                    <Button 
                      variant="ghost" 
                      onClick={handleBack}
                      className="h-16 px-10 rounded-[2rem] text-sm font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all"
                    >
                       <ArrowLeft className="w-5 h-5 mr-3" /> Back
                    </Button>
                    <Button 
                      onClick={handleNext}
                      disabled={currentStep === 0 && !selectedService}
                      className="h-16 px-10 rounded-[2rem] bg-gold text-gold-foreground hover:bg-gold/90 text-sm font-black uppercase tracking-widest shadow-2xl shadow-gold/20"
                    >
                       {currentStep === steps.length - 1 ? "Confirm Booking" : "Next Step"} <ArrowRight className="w-5 h-5 ml-3" />
                    </Button>
                 </div>
               )}
            </div>

            {/* Sidebar Summary */}
            <div className="xl:col-span-4">
               <BookingSummary 
                 service={selectedService}
                 profile={selectedProfile}
                 isUrgent={schedule.isUrgent}
                 hasHomePickup={schedule.hasHomePickup}
                 onConfirm={handleNext}
               />
            </div>
         </div>
      </div>
    </div>
  );
}
