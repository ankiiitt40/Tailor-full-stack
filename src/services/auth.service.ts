import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { COLLECTIONS } from "../constants/collections";
import { Role } from "../constants/roles";
import { useAuthStore } from "../stores/authStore";

export const authService = {
  // Sign up with Email
  async signup(email: string, password: string, name: string, role: Role) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      // Save user to Firestore based on role
      const collectionName = role === "tailor" ? COLLECTIONS.TAILORS : COLLECTIONS.USERS;
      
      await setDoc(doc(db, collectionName, user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: name,
        role: role,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      // Update state
      useAuthStore.getState().setUser({
        uid: user.uid,
        email: user.email!,
        displayName: name,
        fullName: name,
        photoURL: user.photoURL,
        avatar: user.photoURL,
        role: role,
      });

      return user;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  },

  // Login with Email
  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Determine role by checking collections (if we don't know it upfront)
      // Usually better to store role in custom claims, but for this we'll query DB
      let role: Role = "user";
      let docRef = await getDoc(doc(db, COLLECTIONS.USERS, user.uid));
      
      if (!docRef.exists()) {
        docRef = await getDoc(doc(db, COLLECTIONS.TAILORS, user.uid));
        if (docRef.exists()) {
          role = "tailor";
        }
      } else {
        role = docRef.data().role || "user";
      }

      useAuthStore.getState().setUser({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName,
        fullName: user.displayName,
        photoURL: user.photoURL,
        avatar: user.photoURL,
        role: role,
      });

      return user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  // Google Login
  async loginWithGoogle(role: Role = "user") {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Check if user exists
      const collectionName = role === "tailor" ? COLLECTIONS.TAILORS : COLLECTIONS.USERS;
      const userDoc = await getDoc(doc(db, collectionName, user.uid));

      if (!userDoc.exists()) {
        await setDoc(doc(db, collectionName, user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: role,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }

      useAuthStore.getState().setUser({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName,
        fullName: user.displayName,
        photoURL: user.photoURL,
        avatar: user.photoURL,
        role: role,
      });

      return user;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  },

  // Logout
  async logout() {
    try {
      if (auth) {
        await signOut(auth);
      }
      useAuthStore.getState().logout();
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  // Reset Password
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  }
};
