export const ROLES = {
  USER: "user",
  TAILOR: "tailor",
  ADMIN: "admin",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const BOOKING_STATUS = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  STITCHING: "stitching",
  READY: "ready",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const;

export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];
