import { create } from "zustand";

interface BookingState {
  currentBooking: Record<string, unknown> | null;
  isBookingModalOpen: boolean;
  setCurrentBooking: (booking: Record<string, unknown> | null) => void;
  openBookingModal: (tailorData?: Record<string, unknown>) => void;
  closeBookingModal: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  currentBooking: null,
  isBookingModalOpen: false,
  setCurrentBooking: (booking) => set({ currentBooking: booking }),
  openBookingModal: (tailorData) => set({ isBookingModalOpen: true, currentBooking: tailorData }),
  closeBookingModal: () => set({ isBookingModalOpen: false, currentBooking: null }),
}));
