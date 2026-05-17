import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  updateDoc,
  serverTimestamp,
  orderBy,
  QueryConstraint
} from "firebase/firestore";
import { db } from "../firebase/config";
import { COLLECTIONS } from "../constants/collections";

export const tailorService = {
  // Get tailor by ID
  async getTailorById(id: string) {
    try {
      const docRef = doc(db, COLLECTIONS.TAILORS, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
      return null;
    } catch (error) {
      console.error("Error fetching tailor:", error);
      throw error;
    }
  },

  // Update tailor profile
  async updateTailorProfile(id: string, data: any) {
    try {
      const docRef = doc(db, COLLECTIONS.TAILORS, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating tailor:", error);
      throw error;
    }
  },

  // Advanced Filtering
  async searchTailors(filters: {
    category?: string,
    minRating?: number,
    maxPrice?: number,
  }) {
    try {
      const constraints: QueryConstraint[] = [];
      
      if (filters.category) {
        constraints.push(where("specialties", "array-contains", filters.category));
      }
      
      if (filters.minRating) {
        constraints.push(where("rating", ">=", filters.minRating));
      }
      
      if (filters.maxPrice) {
        constraints.push(where("startingPrice", "<=", filters.maxPrice));
      }
      
      // We must order by rating if we filtered by rating due to Firestore rules
      if (filters.minRating) {
        constraints.push(orderBy("rating", "desc"));
      }
      
      const q = query(collection(db, COLLECTIONS.TAILORS), ...constraints);
      const snapshot = await getDocs(q);
      
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error searching tailors:", error);
      throw error;
    }
  }
};
