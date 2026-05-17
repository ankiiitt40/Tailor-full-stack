import { create } from "zustand";

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  
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
  
  activeModal: null,
  modalData: null,
  openModal: (modalName, data) => set({ activeModal: modalName, modalData: data || null }),
  closeModal: () => set({ activeModal: null, modalData: null }),
}));
