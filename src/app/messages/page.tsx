"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Sparkles, 
  ArrowLeft,
  LayoutGrid,
  Zap,
  TrendingUp,
  History,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ChatDetails } from "@/components/chat/ChatDetails";
import { conversations, chatMessages } from "@/data/chat-data";
import { ChatMessage, ChatParticipant } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthProvider";
import { chatService } from "@/services/chat.service";

export default function MessagesPage() {
  const { user } = useAuth();
  const [activeChatId, setActiveChatId] = useState(conversations[0].id);
  const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];
  const recipient = activeChat.participants.find(p => p.role === "tailor")!;
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages[activeChatId] || []);

  // Listen to Firestore real-time messages
  React.useEffect(() => {
    try {
      const unsubscribe = chatService.listenToMessages(activeChatId, (firestoreMsgs) => {
        if (firestoreMsgs && firestoreMsgs.length > 0) {
          const mappedMsgs: ChatMessage[] = firestoreMsgs.map(m => {
            const dateObj = m.createdAt?.toDate ? m.createdAt.toDate() : new Date();
            const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return {
              id: m.id,
              senderId: m.senderId || "U-001",
              type: m.type || "text",
              content: m.text || m.content || "",
              timestamp: timeStr,
              status: m.read ? "read" : "delivered"
            };
          });
          setMessages(mappedMsgs);
        } else {
          // Fallback to rich offline/demo messages
          setMessages(chatMessages[activeChatId] || []);
        }
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn("Firestore chat listener failed - using fallback:", e);
      setMessages(chatMessages[activeChatId] || []);
    }
  }, [activeChatId]);

  const handleSendMessage = async (content: string) => {
    const senderId = user?.uid || "U-001";
    
    // Add locally immediately for optimistic UI
    const newMessage: ChatMessage = {
      id: `M-${Date.now()}`,
      senderId: senderId,
      type: "text",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent"
    };
    setMessages(prev => [...prev, newMessage]);

    try {
      // Send to Firestore
      await chatService.sendMessage(activeChatId, senderId, content);
    } catch (error) {
      console.error("Failed to sync message to Firebase:", error);
    }
    
    // Simulated Tailor Response
    setTimeout(() => {
      const response: ChatMessage = {
        id: `M-${Date.now() + 1}`,
        senderId: recipient.id,
        type: "text",
        content: "Got it! I'll update the sketches and share them with you shortly. ✨",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "delivered"
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar: Chat List */}
      <div className="w-[450px] flex-shrink-0">
         <ChatSidebar 
           activeChatId={activeChatId} 
           onChatSelect={(id) => {
             setActiveChatId(id);
             setMessages(chatMessages[id] || []);
           }} 
         />
      </div>

      {/* Main: Active Chat */}
      <div className="flex-1 flex flex-col h-full relative">
         <AnimatePresence mode="wait">
            <motion.div
              key={activeChatId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 h-full"
            >
               <ChatWindow 
                 messages={messages} 
                 recipient={recipient} 
                 onSendMessage={handleSendMessage} 
               />
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Right Panel: Details */}
      <div className="w-[400px] flex-shrink-0 hidden xl:block">
         <ChatDetails recipient={recipient} />
      </div>
    </div>
  );
}
