import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Role } from "../constants/roles";

interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  fullName?: string | null;
  avatar?: string | null;
  role: Role;
}

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
      setLoading: (loading) => set({ isLoading: loading }),
      logout: () => set({ user: null, isAuthenticated: false, isLoading: false }),
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }), // Only save user and auth state
    }
  )
);
