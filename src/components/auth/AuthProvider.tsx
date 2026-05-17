"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAuthStore } from "../../stores/authStore";
import { authService } from "../../services/auth.service";
import { COLLECTIONS } from "../../constants/collections";
import { UserRole } from "@/types/auth"; // Keep existing type import if possible

// Maintain the same interface to avoid breaking existing UI components
interface AuthContextType {
  user: any | null;
  isAuthenticated: boolean;
  role: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fallback demo users for UI logic that might depend on them before DB is populated
const DEMO_USERS = [
  { email: "user@stitchconnect.com", password: "123456", role: "user", name: "John User" },
  { email: "tailor@stitchconnect.com", password: "123456", role: "tailor", name: "Master Tailor" },
  { email: "admin@stitchconnect.com", password: "123456", role: "admin", name: "Super Admin" },
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user: storeUser, isAuthenticated: storeIsAuth, isLoading: storeIsLoading, setUser, setLoading } = useAuthStore();
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    // Listen to Firebase Auth state
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch role from Firestore
        let role = "user";
        try {
          let docRef = await getDoc(doc(db, COLLECTIONS.USERS, firebaseUser.uid));
          if (!docRef.exists()) {
            docRef = await getDoc(doc(db, COLLECTIONS.TAILORS, firebaseUser.uid));
            if (docRef.exists()) {
              role = "tailor";
            }
          } else {
            role = docRef.data().role || "user";
          }
        } catch (error: any) {
          console.warn("Firestore offline fallback - trying cookies/store...", error.message || error);
          // Try to get role from cookie or existing store
          const match = typeof document !== "undefined" ? document.cookie.match(/(?:^|; )auth-role=([^;]*)/) : null;
          if (match && match[1]) {
            role = match[1];
          } else if (useAuthStore.getState().user?.role) {
            role = useAuthStore.getState().user!.role;
          }
        }

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || "",
          displayName: firebaseUser.displayName,
          fullName: firebaseUser.displayName,
          avatar: firebaseUser.photoURL,
          photoURL: firebaseUser.photoURL,
          role: role as any,
        });
        
        // Set cookie for middleware
        document.cookie = `auth-role=${role}; path=/; max-age=86400`; // 1 day
      } else {
        setUser(null);
        document.cookie = `auth-role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`; // Clear cookie
      }
      setLoading(false);
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  const login = async (email: string, password: string) => {
    try {
      // Authenticate with Firebase using real credentials
      await authService.login(email, password);
      return true;
    } catch (e: any) {
      console.error(e);
      // Auto-signup fallback for the pre-defined demo accounts so they work instantly on a fresh DB
      const demoUser = DEMO_USERS.find(u => u.email === email && u.password === password);
      if (demoUser) {
        try {
          await authService.signup(email, password, demoUser.name, demoUser.role as any);
          return true;
        } catch (signupError) {
          console.error("Failed to auto-create demo account", signupError);
        }
      }
      
      // Standard Firebase error user feedback
      if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password" || e.code === "auth/invalid-credential") {
        toast.error("Invalid email or password.");
      } else {
        toast.error(e.message || "Failed to log in.");
      }
      return false;
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    document.cookie = `auth-role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`; // Clear cookie
    router.push("/login");
    toast.success("Logged out successfully");
  };

  // Basic Protected Route Logic
  useEffect(() => {
    if (!authInitialized || storeIsLoading) return;

    const publicRoutes = ["/", "/login", "/signup", "/tailor-login", "/tailor-signup", "/role-selection", "/forgot-password", "/verify-otp"];
    const isPublicRoute = publicRoutes.includes(pathname);

    if (!storeIsAuth && !isPublicRoute) {
      router.push("/login");
    }

    if (storeIsAuth && isPublicRoute && pathname !== "/") {
      if (storeUser?.role === "user") router.push("/dashboard");
      if (storeUser?.role === "tailor") router.push("/tailor-dashboard");
      if (storeUser?.role === "admin") router.push("/admin");
    }
  }, [storeIsAuth, storeUser?.role, pathname, storeIsLoading, authInitialized, router]);

  return (
    <AuthContext.Provider value={{ 
      user: storeUser, 
      isAuthenticated: storeIsAuth, 
      role: storeUser?.role || null, 
      login, 
      logout: handleLogout, 
      isLoading: storeIsLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
