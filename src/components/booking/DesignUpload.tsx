"use client";

import React, { useState } from "react";
import { 
  Upload, 
  X, 
  Image as ImageIcon, 
  FileText, 
  Sparkles,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface DesignUploadProps {
  images: string[];
  notes: string;
  onUpdate: (images: string[], notes: string) => void;
}

export const DesignUpload = ({ images, notes, onUpdate }: DesignUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Simulating upload by using a high-quality fashion placeholder
    const newImages = [...images, "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600"];
    onUpdate(newImages, notes);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onUpdate(newImages, notes);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
         <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tight">Design Inspiration</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Upload reference images or design sketches</p>
         </div>

         <div 
           onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
           onDragLeave={() => setIsDragging(false)}
           className={`
             relative aspect-video rounded-[3rem] border-4 border-dashed transition-all flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden
             ${isDragging ? "border-gold bg-gold/5 scale-95" : "border-border/50 hover:border-gold/30 hover:bg-gold/5"}
           `}
         >
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
            
            <div className="w-20 h-20 rounded-[2rem] bg-gold/10 flex items-center justify-center mb-2">
               <Upload className="w-8 h-8 text-gold" />
            </div>
            
            <div className="text-center space-y-1">
               <p className="text-lg font-black tracking-tight">Drag & Drop to Upload</p>
               <p className="text-xs font-bold text-muted-foreground">PNG, JPG or PDF up to 10MB</p>
            </div>

            <Button variant="outline" className="rounded-xl h-10 border-border/50 px-6 font-bold text-[10px] uppercase tracking-widest mt-2 pointer-events-none">
               Browse Files
            </Button>
         </div>

         <div className="grid grid-cols-3 gap-4">
            <AnimatePresence>
               {images.map((img, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 group"
                 >
                    <img src={img} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => removeImage(i)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                       <X className="w-3.5 h-3.5" />
                    </button>
                 </motion.div>
               ))}
            </AnimatePresence>
         </div>
      </div>

      <div className="space-y-8">
         <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tight">Design Instructions</h3>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Add specific styling notes for the tailor</p>
         </div>

         <div className="relative">
            <div className="absolute top-4 left-4">
               <FileText className="w-5 h-5 text-gold" />
            </div>
            <Textarea 
              placeholder="e.g. I want a V-neck with mirror work on the borders. Use golden thread for embroidery..." 
              value={notes}
              onChange={(e) => onUpdate(images, e.target.value)}
              className="min-h-[250px] w-full bg-card/50 border-border/50 rounded-[2.5rem] p-8 pl-14 focus-visible:ring-gold/30 text-lg font-medium leading-relaxed"
            />
         </div>

         <div className="p-6 rounded-[2rem] bg-gold/5 border border-gold/20 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
               <Zap className="w-5 h-5 text-gold" />
            </div>
            <div className="space-y-1">
               <p className="text-xs font-black uppercase tracking-widest text-gold">StitchAI Design Tip</p>
               <p className="text-xs text-muted-foreground font-medium">Adding clear fabric preferences helps the tailor select the right needle gauge and thread tension for a perfect finish.</p>
            </div>
         </div>
      </div>
    </div>
  );
};
