import { z } from "zod";

export const bookingSchema = z.object({
  tailorId: z.string().min(1, "Tailor selection is required"),
  serviceType: z.string().min(1, "Service type is required"),
  measurements: z.record(z.string(), z.number()).optional(),
  notes: z.string().optional(),
  date: z.date(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
