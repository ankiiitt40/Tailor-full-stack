export const COLLECTIONS = {
  USERS: "users",
  TAILORS: "tailors",
  BOOKINGS: "bookings",
  REVIEWS: "reviews",
  PAYMENTS: "payments",
  MESSAGES: "messages",
  CHAT_ROOMS: "chatRooms",
  NOTIFICATIONS: "notifications",
  DESIGNS: "designs",
  MEASUREMENTS: "measurements",
  ANALYTICS: "analytics",
  FAVORITES: "favorites",
  SUBSCRIPTIONS: "subscriptions",
  SERVICES: "services",
  COUPONS: "coupons",
  ACTIVITIES: "activities",
} as const;

export type CollectionName = typeof COLLECTIONS[keyof typeof COLLECTIONS];
