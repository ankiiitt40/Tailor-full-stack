import { Conversation, ChatMessage, ChatParticipant } from "@/types/chat";

export const participants: ChatParticipant[] = [
  { 
    id: "U-001", 
    name: "Aryan Verma", 
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100", 
    role: "user", 
    status: "online" 
  },
  { 
    id: "T-001", 
    name: "Rajesh Iyer", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100", 
    role: "tailor", 
    status: "online", 
    shopName: "Royal Stitch House" 
  },
  { 
    id: "T-002", 
    name: "Sanjay Verma", 
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100", 
    role: "tailor", 
    status: "offline", 
    lastSeen: "2 hours ago", 
    shopName: "The Master Cut" 
  },
  { 
    id: "T-003", 
    name: "Meera Das", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", 
    role: "tailor", 
    status: "online", 
    shopName: "Elegance Boutique" 
  }
];

export const conversations: Conversation[] = [
  {
    id: "C-001",
    participants: [participants[0], participants[1]],
    unreadCount: 2,
    orderId: "BK-8821",
    lastMessage: {
      id: "M-101",
      senderId: "T-001",
      type: "text",
      content: "The emerald sherwani is ready for the first fitting. When can you visit?",
      timestamp: "10:30 AM",
      status: "delivered"
    }
  },
  {
    id: "C-002",
    participants: [participants[0], participants[2]],
    unreadCount: 0,
    lastMessage: {
      id: "M-102",
      senderId: "U-001",
      type: "image",
      content: "Shared a design reference",
      timestamp: "Yesterday",
      status: "read"
    }
  },
  {
    id: "C-003",
    participants: [participants[0], participants[3]],
    unreadCount: 5,
    lastMessage: {
      id: "M-103",
      senderId: "T-003",
      type: "text",
      content: "I've updated the lehenga blouse pattern based on our discussion.",
      timestamp: "2 days ago",
      status: "read"
    }
  }
];

export const chatMessages: Record<string, ChatMessage[]> = {
  "C-001": [
    { id: "M-001", senderId: "U-001", type: "text", content: "Hi Rajesh, I wanted to discuss the collar design for the Sherwani.", timestamp: "09:15 AM", status: "read" },
    { id: "M-002", senderId: "T-001", type: "text", content: "Hello Aryan! Sure, I was thinking of a mandarin collar with antique gold piping.", timestamp: "09:20 AM", status: "read" },
    { id: "M-003", senderId: "U-001", type: "image", content: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400", timestamp: "09:25 AM", status: "read" },
    { id: "M-004", senderId: "U-001", type: "text", content: "Like this one. Can we add a bit more mirror work?", timestamp: "09:26 AM", status: "read" },
    { id: "M-005", senderId: "T-001", type: "text", content: "Absolutely. I've updated the order notes.", timestamp: "09:30 AM", status: "read" },
    { id: "M-006", senderId: "T-001", type: "order", content: "Order Updated", timestamp: "09:35 AM", status: "read", metadata: { orderId: "BK-8821", service: "Royal Sherwani", status: "Stitching Started" } },
    { id: "M-007", senderId: "T-001", type: "text", content: "The emerald sherwani is ready for the first fitting. When can you visit?", timestamp: "10:30 AM", status: "delivered" },
  ]
};
