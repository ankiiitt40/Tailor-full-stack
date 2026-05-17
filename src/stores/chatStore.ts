import { create } from "zustand";

interface ChatState {
  activeChatRoomId: string | null;
  unreadCount: number;
  setActiveChatRoom: (roomId: string | null) => void;
  setUnreadCount: (count: number) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  activeChatRoomId: null,
  unreadCount: 0,
  setActiveChatRoom: (roomId) => set({ activeChatRoomId: roomId }),
  setUnreadCount: (count) => set({ unreadCount: count }),
}));
