export type UserRole = "user" | "tailor" | "admin" | null;

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  role: UserRole;
}

export interface TailorSignupData {
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  specialization: string;
  password?: string;
}
