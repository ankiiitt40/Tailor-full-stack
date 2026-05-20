import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  
  // Layout preference: 'sidebar' | 'vercel'
  layoutPreference: 'sidebar' | 'vercel';
  setLayoutPreference: (pref: 'sidebar' | 'vercel') => void;
  
  // Global modal state
  activeModal: string | null;
  modalData: Record<string, unknown> | null;
  openModal: (modalName: string, data?: Record<string, unknown>) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  
  layoutPreference: "vercel", // Default to vercel layout!
  setLayoutPreference: (pref) => set({ layoutPreference: pref }),
  
  activeModal: null,
  modalData: null,
  openModal: (modalName, data) => set({ activeModal: modalName, modalData: data || null }),
  closeModal: () => set({ activeModal: null, modalData: null }),
}));
