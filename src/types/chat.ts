export type MessageType = 'text' | 'image' | 'order' | 'measurement';

export interface ChatMessage {
  id: string;
  senderId: string;
  type: MessageType;
  content: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  metadata?: any; // For order or measurement card data
}

export interface ChatParticipant {
  id: string;
  name: string;
  image: string;
  role: 'user' | 'tailor';
  status: 'online' | 'offline';
  lastSeen?: string;
  shopName?: string;
}

export interface Conversation {
  id: string;
  participants: ChatParticipant[];
  lastMessage: ChatMessage;
  unreadCount: number;
  orderId?: string;
}
