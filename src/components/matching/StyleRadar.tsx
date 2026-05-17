"use client";

import React from "react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { mockStyleProfile } from "@/data/ai-data";

export const StyleRadar = () => {
  const data = [
    { subject: "Ethnic", A: mockStyleProfile.ethnic, fullMark: 100 },
    { subject: "Formal", A: mockStyleProfile.formal, fullMark: 100 },
    { subject: "Casual", A: mockStyleProfile.casual, fullMark: 100 },
    { subject: "Bridal", A: mockStyleProfile.bridal, fullMark: 100 },
    { subject: "Modern", A: mockStyleProfile.modern, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[450px] p-8 rounded-[4rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden flex flex-col items-center">
       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
       
       <div className="space-y-1 mb-8 text-center relative z-10">
          <h3 className="text-2xl font-black tracking-tight">Your Fashion DNA</h3>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">AI analysis of your style preferences</p>
       </div>

       <div className="h-[300px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: "#666", fontSize: 10, fontWeight: "900" }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#000", 
                    border: "1px solid #D4AF3740", 
                    borderRadius: "16px",
                    padding: "12px"
                  }}
                  itemStyle={{ color: "#D4AF37", fontSize: "12px", fontWeight: "bold" }}
                />
                <Radar
                  name="Style Score"
                  dataKey="A"
                  stroke="#D4AF37"
                  fill="#D4AF37"
                  fillOpacity={0.4}
                  strokeWidth={3}
                />
             </RadarChart>
          </ResponsiveContainer>
       </div>

       <div className="mt-4 flex gap-4 relative z-10">
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-gold rounded-full" />
             <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Personal Profile</span>
          </div>
       </div>
    </div>
  );
};
