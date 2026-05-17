"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Heart, Award } from "lucide-react";
import { tailors } from "@/data/tailors";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Tailors = () => {
  return (
    <section id="tailors" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Top Tailors <span className="text-gold">Near You</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Handpicked masters of craft, vetted for quality and consistency. 
              Get that bespoke fit you've always dreamed of.
            </p>
          </div>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold/5 rounded-xl px-8 h-12">
            View All Tailors
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tailors.map((tailor, index) => (
            <motion.div
              key={tailor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group overflow-hidden rounded-2xl border-border/50 hover:border-gold/30 glass-card transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tailor.image}
                    alt={tailor.shopName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none px-3 py-1">
                      {tailor.experience}
                    </Badge>
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2 text-white">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="font-bold">{tailor.rating}</span>
                      <span className="text-xs text-white/70">({tailor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-gold transition-colors">
                        {tailor.shopName}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {tailor.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Starts from</p>
                      <p className="text-lg font-bold text-gold">₹{tailor.startingPrice}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tailor.specialties.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50 text-[10px] font-medium rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground font-medium">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tailor.deliveryTime} Delivery
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Verified Studio
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-12 transition-all duration-300">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
