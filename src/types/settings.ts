export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  isDefault: boolean;
}

export interface SessionDevice {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
  browser: string;
}

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  role: 'user' | 'tailor' | 'admin';
  completionScore: number;
}

export interface NotificationPreferences {
  bookings: boolean;
  messages: boolean;
  promotions: boolean;
  aiSuggestions: boolean;
  payments: boolean;
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}
