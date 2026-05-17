"use client";

import React, { useEffect, useRef } from "react";
import { 
  Phone, 
  Video, 
  Info, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Image as ImageIcon, 
  Smile, 
  CheckCheck,
  Check,
  MapPin,
  Clock,
  ExternalLink,
  Sparkles,
  Search,
  Mic
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage, ChatParticipant } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  messages: ChatMessage[];
  recipient: ChatParticipant;
  onSendMessage: (content: string) => void;
}

export const ChatWindow = ({ messages, recipient, onSendMessage }: ChatWindowProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Chat Header */}
      <div className="p-6 border-b border-border/50 flex items-center justify-between bg-card/20 backdrop-blur-3xl sticky top-0 z-20">
         <div className="flex items-center gap-4">
            <div className="relative">
               <div className="w-12 h-12 rounded-2xl overflow-hidden border border-border/50">
                  <img src={recipient.image} className="w-full h-full object-cover" />
               </div>
               {recipient.status === "online" && (
                 <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-background rounded-full" />
               )}
            </div>
            <div>
               <h3 className="text-lg font-black tracking-tight">{recipient.shopName || recipient.name}</h3>
               <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                     {recipient.status === "online" ? "Active Now" : `Last seen ${recipient.lastSeen}`}
                  </span>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
               <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
               <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
               <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
               <Info className="w-5 h-5" />
            </Button>
         </div>
      </div>

      {/* Message Feed */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar"
      >
         {messages.map((msg, i) => {
           const isMe = msg.senderId === "U-001";
           
           return (
             <motion.div
               key={msg.id}
               initial={{ opacity: 0, y: 10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               className={cn(
                 "flex flex-col max-w-[70%]",
                 isMe ? "ml-auto items-end" : "mr-auto items-start"
               )}
             >
                {/* Message Bubble */}
                <div className={cn(
                  "p-5 rounded-[2rem] shadow-xl relative group transition-all duration-300",
                  isMe 
                    ? "bg-foreground text-background rounded-tr-none hover:bg-gold hover:text-gold-foreground" 
                    : "bg-card border border-border/50 rounded-tl-none hover:border-gold/30"
                )}>
                   {/* Text Content */}
                   {msg.type === "text" && (
                     <p className="text-sm font-medium leading-relaxed">{msg.content}</p>
                   )}

                   {/* Image Content */}
                   {msg.type === "image" && (
                     <div className="space-y-3">
                        <div className="rounded-2xl overflow-hidden border border-border/50">
                           <img src={msg.content} className="w-full object-cover max-h-80" />
                        </div>
                        <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Design Reference Shared</p>
                     </div>
                   )}

                   {/* Order Card Content */}
                   {msg.type === "order" && (
                     <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 space-y-4 min-w-[280px]">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-xl bg-gold text-gold-foreground flex items-center justify-center">
                              <Sparkles className="w-6 h-6" />
                           </div>
                           <div>
                              <p className="text-[10px] font-black text-gold uppercase tracking-widest">Order Update</p>
                              <h4 className="text-sm font-black tracking-tight text-foreground">{msg.metadata.service}</h4>
                           </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground uppercase">
                           <span>Status: {msg.metadata.status}</span>
                           <span className="text-gold">ID: {msg.metadata.orderId}</span>
                        </div>
                        <Button className="w-full h-10 rounded-xl bg-foreground text-background hover:bg-gold hover:text-gold-foreground font-black text-[9px] uppercase tracking-widest transition-all">
                           Track Progress
                        </Button>
                     </div>
                   )}

                   {/* Reactions Placeholder */}
                   <div className={cn(
                     "absolute -bottom-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                     isMe ? "right-4" : "left-4"
                   )}>
                      {["❤️", "👍", "🔥"].map(emoji => (
                        <button key={emoji} className="w-6 h-6 rounded-full bg-card border border-border/50 flex items-center justify-center text-xs hover:scale-125 transition-transform shadow-lg">
                           {emoji}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Status & Timestamp */}
                <div className={cn(
                  "flex items-center gap-2 mt-2 px-2",
                  isMe ? "flex-row-reverse" : "flex-row"
                )}>
                   <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{msg.timestamp}</span>
                   {isMe && (
                     msg.status === "read" 
                      ? <CheckCheck className="w-3.5 h-3.5 text-gold" /> 
                      : <Check className="w-3.5 h-3.5 text-muted-foreground" />
                   )}
                </div>
             </motion.div>
           );
         })}

         {/* Simulated Typing Indicator */}
         <AnimatePresence>
            {recipient.status === "online" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3"
              >
                 <div className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center">
                    <div className="flex gap-1">
                       <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                       <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                       <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                    </div>
                 </div>
                 <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{recipient.name} is typing...</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Quick Replies */}
      <div className="px-8 pb-4 flex gap-3 overflow-x-auto no-scrollbar">
         {["Send measurements", "Update delivery date", "Share reference", "Check pricing"].map((reply) => (
           <Button 
             key={reply}
             variant="outline" 
             onClick={() => setInputValue(reply)}
             className="h-10 px-6 rounded-full border-border/50 text-[10px] font-black uppercase tracking-widest hover:bg-gold/5 hover:text-gold transition-all shrink-0"
           >
              {reply}
           </Button>
         ))}
      </div>

      {/* Input Area */}
      <div className="p-8 border-t border-border/50 bg-card/20 backdrop-blur-3xl">
         <div className="flex items-center gap-4 relative">
            <div className="flex items-center gap-1">
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                  <Paperclip className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                  <ImageIcon className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                  <Mic className="w-5 h-5" />
               </Button>
            </div>
            
            <div className="flex-1 relative group">
               <div className="absolute -inset-0.5 bg-gold/30 blur-xl opacity-0 group-focus-within:opacity-30 transition-opacity" />
               <div className="relative">
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Discuss your stitching requirements..." 
                    className="h-16 bg-muted/40 border-none rounded-2xl pl-6 pr-14 font-medium text-lg focus-visible:ring-gold/30 placeholder:text-muted-foreground/50"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold">
                        <Smile className="w-5 h-5" />
                     </Button>
                  </div>
               </div>
            </div>

            <Button 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="h-16 w-16 rounded-2xl bg-gold text-gold-foreground hover:bg-gold/90 shadow-2xl shadow-gold/20 transition-all shrink-0"
            >
               <Send className="w-6 h-6" />
            </Button>
         </div>
      </div>
    </div>
  );
};
