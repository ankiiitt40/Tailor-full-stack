import { BookingService, MeasurementProfile, Booking } from "@/types/booking";

export const bookingServices: BookingService[] = [
  { id: "S-001", name: "Blouse Stitching", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400", basePrice: 850, deliveryEst: "3-5 Days", isPopular: true },
  { id: "S-002", name: "Kurta Stitching", image: "https://images.unsplash.com/photo-1597983073491-03462a4b868e?q=80&w=400", basePrice: 1200, deliveryEst: "4-6 Days", isPopular: true },
  { id: "S-003", name: "Sherwani / Indo-Western", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400", basePrice: 8500, deliveryEst: "10-15 Days" },
  { id: "S-004", name: "Bridal Wear", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400", basePrice: 25000, deliveryEst: "20-30 Days", isPopular: true },
  { id: "S-005", name: "Formal Suit", image: "https://images.unsplash.com/photo-1594932224828-b4b059bdb98f?q=80&w=400", basePrice: 4500, deliveryEst: "7-10 Days" },
  { id: "S-006", name: "Alterations", image: "https://images.unsplash.com/photo-1591557262865-863a7f858481?q=80&w=400", basePrice: 250, deliveryEst: "1-2 Days" },
];

export const savedProfiles: MeasurementProfile[] = [
  { 
    id: "P-001", 
    name: "Aryan", 
    relationship: "Self", 
    age: 26, 
    gender: "male",
    chest: 40, waist: 34, shoulder: 18, sleeve: 25, neck: 15.5, height: 70, hip: 38, inseam: 31,
    armLength: 26, thigh: 22, knee: 15, wrist: 7,
    lastUpdated: "2024-05-15",
    completionPercentage: 100,
    fitPreference: "slim",
    history: [
      { id: "H-001", date: "2024-01-10", field: "Chest", oldValue: 39, newValue: 40 }
    ]
  },
  { 
    id: "P-002", 
    name: "Ramesh", 
    relationship: "Father", 
    age: 55, 
    gender: "male",
    chest: 42, waist: 38, shoulder: 19, sleeve: 24, neck: 16.5, height: 68, hip: 40, inseam: 29,
    armLength: 25, thigh: 24, knee: 16, wrist: 8,
    lastUpdated: "2023-11-20",
    completionPercentage: 85,
    fitPreference: "regular",
    history: []
  },
];

export const mockBookings: Booking[] = [
  {
    id: "BK-8821",
    tailorId: "TL-001",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    service: bookingServices[2],
    measurements: savedProfiles[0],
    referenceImages: ["https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=200"],
    deliveryDate: "2024-06-15",
    deliveryTimeSlot: "Evening (5PM - 8PM)",
    isUrgent: false,
    hasHomePickup: true,
    totalAmount: 9250,
    status: "stitching",
    createdAt: "2024-06-01",
  }
];

export const timeSlots = ["Morning (9AM - 12PM)", "Afternoon (1PM - 4PM)", "Evening (5PM - 8PM)"];
