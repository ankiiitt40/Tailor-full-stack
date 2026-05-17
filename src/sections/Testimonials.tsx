"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gold">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from customers who found their perfect fit through StitchConnect.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card border-none h-full">
                    <CardContent className="p-8 space-y-6 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                          ))}
                        </div>
                        <div className="relative">
                          <Quote className="w-8 h-8 text-gold/10 absolute -top-4 -left-4" />
                          <p className="text-muted-foreground italic leading-relaxed relative z-10">
                            "{testimonial.feedback}"
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                        <Avatar className="w-12 h-12 border-2 border-gold/20">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Ordered from <span className="text-gold">{testimonial.tailorName}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12 md:hidden">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 bg-background/50 backdrop-blur-md border-gold/20 hover:bg-gold hover:text-gold-foreground transition-all" />
            <CarouselNext className="-right-12 bg-background/50 backdrop-blur-md border-gold/20 hover:bg-gold hover:text-gold-foreground transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
