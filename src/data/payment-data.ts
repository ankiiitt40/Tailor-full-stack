import { Transaction, Invoice, Coupon } from "@/types/payment";

export const transactions: Transaction[] = [
  {
    id: "TXN-99821",
    bookingId: "BK-8821",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    amount: 9250,
    method: "Credit Card (Visa •••• 4242)",
    status: "success",
    date: "2024-06-01",
    invoiceId: "INV-8821",
  },
  {
    id: "TXN-99822",
    bookingId: "BK-7710",
    tailorName: "Meera Das",
    tailorShop: "Elegance Boutique",
    amount: 3500,
    method: "UPI (aryan@okaxis)",
    status: "success",
    date: "2024-05-25",
    invoiceId: "INV-7710",
  },
  {
    id: "TXN-99823",
    bookingId: "BK-6605",
    tailorName: "Sanjay Verma",
    tailorShop: "The Master Cut",
    amount: 7500,
    method: "Debit Card (Mastercard •••• 8899)",
    status: "failed",
    date: "2024-05-20",
    invoiceId: "INV-6605",
  },
];

export const invoices: Invoice[] = [
  {
    id: "INV-8821",
    date: "2024-06-01",
    customerName: "Aryan Verma",
    customerEmail: "aryan@stitchconnect.com",
    tailorName: "Rajesh Iyer",
    tailorShop: "Royal Stitch House",
    items: [
      { description: "Royal Sherwani Stitching", quantity: 1, price: 8500 },
      { description: "Express Delivery (48h)", quantity: 1, price: 500 },
    ],
    tax: 1620,
    discount: 250,
    total: 10370,
    status: "paid",
  }
];

export const coupons: Coupon[] = [
  { code: "FIRST20", discount: 200, description: "₹200 OFF on your first booking" },
  { code: "BRIDAL50", discount: 500, description: "Flat ₹500 OFF on bridal collections" },
  { code: "FESTIVE10", discount: 0.1, description: "10% OFF on festive season wear" },
];
