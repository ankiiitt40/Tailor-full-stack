import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase/config";
import { COLLECTIONS } from "../constants/collections";

export const chatService = {
  // Listen for messages in a chat room
  listenToMessages(roomId: string, callback: (messages: any[]) => void) {
    const q = query(
      collection(db, COLLECTIONS.MESSAGES),
      where("roomId", "==", roomId),
      orderBy("createdAt", "asc")
    );

    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(messages);
    });
  },

  // Send a message
  async sendMessage(roomId: string, senderId: string, text: string) {
    try {
      await addDoc(collection(db, COLLECTIONS.MESSAGES), {
        roomId,
        senderId,
        text,
        createdAt: serverTimestamp(),
        read: false,
      });

      // Update the chat room's last message
      await updateDoc(doc(db, COLLECTIONS.CHAT_ROOMS, roomId), {
        lastMessage: text,
        lastMessageAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },

  // Listen to user's chat rooms
  listenToUserRooms(userId: string, callback: (rooms: any[]) => void) {
    const q = query(
      collection(db, COLLECTIONS.CHAT_ROOMS),
      where("participants", "array-contains", userId),
      orderBy("lastMessageAt", "desc")
    );

    return onSnapshot(q, (snapshot) => {
      const rooms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(rooms);
    });
  }
};
