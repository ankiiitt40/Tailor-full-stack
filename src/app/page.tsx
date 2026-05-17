import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Brands } from "@/sections/Brands";
import { Tailors } from "@/sections/Tailors";
import { Designs } from "@/sections/Designs";
import { Features } from "@/sections/Features";
import { HowItWorks } from "@/sections/HowItWorks";
import { Testimonials } from "@/sections/Testimonials";
import { AppCTA } from "@/sections/AppCTA";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <Tailors />
      <Features />
      <Designs />
      <HowItWorks />
      <Testimonials />
      <AppCTA />
      <Footer />
    </main>
  );
}
