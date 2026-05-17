"use client";

import React from "react";
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Flag, 
  Clock,
  ShieldAlert,
  MessageSquare
} from "lucide-react";
import { platformReports } from "@/data/admin-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AdminReportsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Conflict Resolution</h1>
          <p className="text-muted-foreground">Review user reports, manage disputes, and maintain platform integrity.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-xl h-11 font-bold flex gap-2 shadow-xl shadow-red-500/20">
            <ShieldAlert className="w-4 h-4" /> Global Freeze
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: "Active Disputes", value: "24", color: "text-red-500", icon: AlertTriangle },
           { label: "Avg Resolution Time", value: "4.2h", color: "text-gold", icon: Clock },
           { label: "Resolved Today", value: "12", color: "text-green-500", icon: CheckCircle2 },
         ].map((stat) => (
           <Card key={stat.label} className="p-6 glass-card border-border/50 rounded-3xl flex items-center gap-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-muted/50", stat.color)}>
                 <stat.icon className="w-6 h-6" />
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                 <p className="text-2xl font-bold">{stat.value}</p>
              </div>
           </Card>
         ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
           {["All Reports", "Fraud", "Quality", "Late Delivery", "Resolved"].map((tab, i) => (
             <button 
               key={tab}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300",
                 i === 0 ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {tab}
             </button>
           ))}
        </div>

        <div className="relative flex-1 lg:w-80">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
           <Input 
             placeholder="Search reports by ID or user..." 
             className="pl-12 rounded-xl bg-card border-border/50 h-11"
           />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
         {platformReports.map((report) => (
           <Card key={report.id} className="p-8 glass-card border-border/50 rounded-[2.5rem] space-y-6 group hover:border-red-500/30 transition-all duration-500 relative overflow-hidden">
              {/* Priority Ribbon */}
              <div className={cn(
                "absolute top-0 right-0 px-4 py-1 text-[8px] font-bold uppercase tracking-[0.2em] rounded-bl-xl",
                report.priority === "High" ? "bg-red-500 text-white" : "bg-gold text-gold-foreground"
              )}>
                 {report.priority} Priority
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold text-gold uppercase tracking-widest leading-none">{report.id}</p>
                       <h3 className="text-lg font-bold group-hover:text-red-500 transition-colors">{report.type}</h3>
                    </div>
                 </div>

                 <div className="p-4 bg-muted/30 rounded-2xl space-y-3">
                    <div className="flex justify-between text-xs">
                       <span className="text-muted-foreground uppercase font-bold text-[9px] tracking-widest">Reporter</span>
                       <span className="font-bold">{report.reporterName}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                       <span className="text-muted-foreground uppercase font-bold text-[9px] tracking-widest">Accused</span>
                       <span className="font-bold text-red-500">{report.targetName}</span>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Incident Description</p>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">"{report.description}"</p>
                 </div>
              </div>

              <div className="pt-6 border-t border-border/50 flex flex-col gap-3">
                 <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Received: {report.date}</span>
                    <Badge variant="secondary" className="bg-muted text-[8px] font-bold px-2 py-0.5 rounded-lg border-none">{report.status}</Badge>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-11 font-bold text-xs uppercase transition-all">
                       Investigate
                    </Button>
                    <Button variant="outline" className="rounded-xl h-11 border-border/50 font-bold text-xs uppercase hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/20">
                       Resolve
                    </Button>
                 </div>
              </div>
           </Card>
         ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
