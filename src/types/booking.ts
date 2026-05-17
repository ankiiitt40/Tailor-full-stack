export type BookingStatus = 'pending' | 'accepted' | 'stitching' | 'ready' | 'delivered' | 'cancelled';

export interface BookingService {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  deliveryEst: string;
  isPopular?: boolean;
}

export type FitPreference = 'slim' | 'regular' | 'loose';

export interface MeasurementHistory {
  id: string;
  date: string;
  field: string;
  oldValue: number;
  newValue: number;
}

export interface MeasurementProfile {
  id: string;
  name: string;
  relationship: string; // e.g. "Self", "Brother", "Father"
  age?: number;
  gender: 'male' | 'female' | 'other';
  chest: number;
  waist: number;
  shoulder: number;
  sleeve: number;
  neck: number;
  height: number;
  hip: number;
  inseam: number;
  armLength: number;
  thigh: number;
  knee: number;
  wrist: number;
  lastUpdated: string;
  completionPercentage: number;
  fitPreference: FitPreference;
  history: MeasurementHistory[];
}

export interface Booking {
  id: string;
  tailorId: string;
  tailorName: string;
  tailorShop: string;
  service: BookingService;
  measurements: MeasurementProfile;
  designNotes?: string;
  referenceImages: string[];
  deliveryDate: string;
  deliveryTimeSlot: string;
  isUrgent: boolean;
  hasHomePickup: boolean;
  totalAmount: number;
  status: BookingStatus;
  createdAt: string;
}
