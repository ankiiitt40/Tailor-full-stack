import { UserProfile, Address, SessionDevice, NotificationPreferences } from "@/types/settings";

export const mockUserProfile: UserProfile = {
  id: "U-001",
  name: "Aryan Verma",
  username: "aryan_v",
  email: "aryan@stitchconnect.com",
  phone: "+91 98765 43210",
  bio: "Fashion enthusiast and tech consultant. Always looking for the perfect fit.",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  role: "user",
  completionScore: 85
};

export const mockAddresses: Address[] = [
  {
    id: "ADDR-001",
    label: "Home",
    street: "B-24, Emerald Heights",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    landmark: "Near Central Park",
    isDefault: true
  },
  {
    id: "ADDR-002",
    label: "Office",
    street: "Tech Park, Phase II",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    isDefault: false
  }
];

export const mockSessions: SessionDevice[] = [
  {
    id: "SES-001",
    device: "iPhone 15 Pro",
    location: "New Delhi, India",
    lastActive: "Just now",
    isCurrent: true,
    browser: "Mobile Safari"
  },
  {
    id: "SES-002",
    device: "MacBook Pro M2",
    location: "New Delhi, India",
    lastActive: "2 hours ago",
    isCurrent: false,
    browser: "Chrome Desktop"
  }
];

export const defaultNotificationPrefs: NotificationPreferences = {
  bookings: true,
  messages: true,
  promotions: false,
  aiSuggestions: true,
  payments: true,
  channels: {
    email: true,
    sms: false,
    push: true
  }
};
