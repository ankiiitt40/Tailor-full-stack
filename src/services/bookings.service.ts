import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc,
  serverTimestamp,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/config";
import { COLLECTIONS } from "../constants/collections";
import { BookingStatus, BOOKING_STATUS } from "../constants/roles";

export const bookingService = {
  // Create a new booking
  async createBooking(data: any) {
    try {
      const bookingRef = await addDoc(collection(db, COLLECTIONS.BOOKINGS), {
        ...data,
        status: BOOKING_STATUS.PENDING,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return bookingRef.id;
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },

  // Update booking status
  async updateBookingStatus(id: string, status: BookingStatus) {
    try {
      const docRef = doc(db, COLLECTIONS.BOOKINGS, id);
      await updateDoc(docRef, {
        status,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
      throw error;
    }
  },

  // Get bookings for a specific user
  async getUserBookings(userId: string) {
    try {
      const q = query(
        collection(db, COLLECTIONS.BOOKINGS),
        where("userId", "==", userId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching user bookings:", error);
      throw error;
    }
  },

  // Get bookings for a specific tailor
  async getTailorBookings(tailorId: string) {
    try {
      const q = query(
        collection(db, COLLECTIONS.BOOKINGS),
        where("tailorId", "==", tailorId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching tailor bookings:", error);
      throw error;
    }
  }
};
