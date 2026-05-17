"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Store, User, Mail, Phone, MapPin, Briefcase, Award, Loader2, CheckCircle2, ChevronRight, ChevronLeft, Upload } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard, AuthInput, PasswordInput } from "@/components/auth/AuthComponents";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function TailorSignup() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    specialization: "",
    password: "",
    confirmPassword: ""
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const registeredUsers = JSON.parse(localStorage.getItem("stitch_registered_users") || "[]");
    registeredUsers.push({
      ...formData,
      role: "tailor",
      name: formData.ownerName
    });
    localStorage.setItem("stitch_registered_users", JSON.stringify(registeredUsers));

    toast.success("Tailor account created! Welcome to the marketplace.");
    router.push("/tailor-login");
  };

  return (
    <AuthLayout>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Step {step} of 3</span>
          <span className="text-xs text-muted-foreground">{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <Progress value={(step / 3) * 100} className="h-1 bg-muted border-none overflow-hidden [&>div]:bg-gold" />
      </div>

      <AuthCard className="p-0 overflow-visible">
        <div className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">Shop Details</h2>
                  <p className="text-muted-foreground text-sm">Tell us about your tailoring studio.</p>
                </div>
                <AuthInput label="Shop Name" icon={Store} placeholder="Royal Stitch House" value={formData.shopName} onChange={e => setFormData({...formData, shopName: e.target.value})} />
                <AuthInput label="Owner Name" icon={User} placeholder="Rajesh Kumar" value={formData.ownerName} onChange={e => setFormData({...formData, ownerName: e.target.value})} />
                <AuthInput label="Studio Address" icon={MapPin} placeholder="Hauz Khas, Delhi" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                <Button onClick={nextStep} className="w-full h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold group">
                  Next Step <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">Expertise</h2>
                  <p className="text-muted-foreground text-sm">Showcase your skills to customers.</p>
                </div>
                <AuthInput label="Experience" icon={Award} placeholder="15+ Years" value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} />
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Specialization</label>
                  <Select onValueChange={(v: string | null) => setFormData({...formData, specialization: v || ""})}>
                    <SelectTrigger className="h-12 bg-muted/30 border-border/50 rounded-xl focus:ring-gold">
                      <SelectValue placeholder="Select Specialty" />
                    </SelectTrigger>
                    <SelectContent className="glass border-gold/20">
                      <SelectItem value="ladies">Ladies Tailor</SelectItem>
                      <SelectItem value="gents">Gents Tailor</SelectItem>
                      <SelectItem value="wedding">Wedding Specialist</SelectItem>
                      <SelectItem value="boutique">Boutique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Shop Logo</label>
                    <div className="h-24 border-2 border-dashed border-border/50 rounded-xl flex flex-col items-center justify-center text-muted-foreground hover:border-gold/50 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 mb-1" />
                      <span className="text-[10px]">Upload</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">License</label>
                    <div className="h-24 border-2 border-dashed border-border/50 rounded-xl flex flex-col items-center justify-center text-muted-foreground hover:border-gold/50 cursor-pointer transition-colors">
                      <Upload className="w-5 h-5 mb-1" />
                      <span className="text-[10px]">Upload</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl border-border/50">
                    <ChevronLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button onClick={nextStep} className="flex-[2] h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold">
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight">Security</h2>
                  <p className="text-muted-foreground text-sm">Secure your business account.</p>
                </div>
                <AuthInput label="Business Email" icon={Mail} placeholder="rajesh@royalstitch.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <AuthInput label="Phone Number" icon={Phone} placeholder="+91 99999 88888" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                <PasswordInput label="Password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                <PasswordInput label="Confirm Password" placeholder="••••••••" value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl border-border/50">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} disabled={isLoading} className="flex-[2] h-12 bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl font-bold">
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Complete Signup"}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AuthCard>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Already a partner?{" "}
          <button onClick={() => router.push("/tailor-login")} className="text-gold font-bold hover:underline">
            Tailor Login
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}
