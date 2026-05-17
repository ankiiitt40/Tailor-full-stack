"use client";

import React from "react";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Check,
  CheckCheck,
  MessageSquare,
  Star,
  Zap,
  ShoppingBag
} from "lucide-react";
import { motion } from "framer-motion";
import { conversations } from "@/data/chat-data";
import { Conversation } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  activeChatId: string;
  onChatSelect: (id: string) => void;
}

export const ChatSidebar = ({ activeChatId, onChatSelect }: ChatSidebarProps) => {
  return (
    <div className="flex flex-col h-full bg-card/40 backdrop-blur-3xl border-r border-border/50 overflow-hidden">
      {/* Header */}
      <div className="p-8 space-y-6">
         <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black tracking-tight">Messages</h2>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold">
                  <Edit3 className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold">
                  <MoreVertical className="w-5 h-5" />
               </Button>
            </div>
         </div>

         {/* Search & Categories */}
         <div className="space-y-4">
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-gold transition-colors" />
               <Input 
                 placeholder="Search conversations..." 
                 className="h-12 bg-muted/30 border-none rounded-xl pl-12 font-medium focus-visible:ring-gold/30"
               />
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
               {["All Chats", "Orders", "Elite", "Support"].map((cat, i) => (
                 <Button 
                   key={cat}
                   variant="ghost" 
                   className={cn(
                     "h-10 px-6 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                     i === 0 ? "bg-gold text-gold-foreground" : "bg-muted/30 text-muted-foreground hover:bg-gold/10 hover:text-gold"
                   )}
                 >
                    {cat}
                 </Button>
               ))}
            </div>
         </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3">
         {conversations.map((chat) => {
           const tailor = chat.participants.find(p => p.role === "tailor")!;
           const isActive = activeChatId === chat.id;

           return (
             <motion.div
               key={chat.id}
               onClick={() => onChatSelect(chat.id)}
               whileHover={{ x: 5 }}
               className={cn(
                 "p-5 rounded-[2.5rem] border-2 transition-all cursor-pointer group flex items-center gap-4 relative",
                 isActive ? "bg-gold/10 border-gold shadow-xl" : "bg-card border-transparent hover:border-gold/20"
               )}
             >
                {/* Avatar */}
                <div className="relative">
                   <div className="w-14 h-14 rounded-2xl overflow-hidden border border-border/50">
                      <img src={tailor.image} className="w-full h-full object-cover" />
                   </div>
                   {tailor.status === "online" && (
                     <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-card rounded-full" />
                   )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-1">
                   <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black tracking-tight truncate">{tailor.shopName || tailor.name}</h4>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase">{chat.lastMessage.timestamp}</span>
                   </div>
                   <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-medium text-muted-foreground truncate flex-1">
                        {chat.lastMessage.content}
                      </p>
                      {chat.unreadCount > 0 && (
                        <Badge className="bg-gold text-gold-foreground border-none text-[8px] font-black min-w-[18px] h-[18px] flex items-center justify-center rounded-full p-0">
                           {chat.unreadCount}
                        </Badge>
                      )}
                      {chat.lastMessage.status === "read" && <CheckCheck className="w-3.5 h-3.5 text-gold" />}
                   </div>
                </div>

                {/* Order Indicator */}
                {chat.orderId && (
                  <div className="absolute top-4 right-4">
                     <ShoppingBag className="w-3 h-3 text-gold opacity-40" />
                  </div>
                )}
             </motion.div>
           );
         })}
      </div>

      {/* AI Assistant Banner */}
      <div className="p-6 m-4 rounded-[2rem] bg-foreground text-background overflow-hidden group relative">
         <div className="absolute top-0 right-0 w-24 h-24 bg-gold/20 blur-2xl rounded-full" />
         <div className="space-y-3 relative z-10">
            <div className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-gold" />
               <span className="text-[8px] font-black uppercase tracking-widest text-gold">StitchAI Assistant</span>
            </div>
            <p className="text-[10px] font-bold leading-relaxed opacity-70">Need help discussing a design? Let our AI suggest technical terms.</p>
            <Button variant="link" className="p-0 h-auto text-gold text-[8px] font-black uppercase tracking-widest">
               Enable Assistant <Check className="w-3 h-3 ml-1" />
            </Button>
         </div>
      </div>
    </div>
  );
};
