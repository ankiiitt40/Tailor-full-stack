export type TransactionStatus = 'success' | 'pending' | 'failed' | 'refunded';

export interface Transaction {
  id: string;
  bookingId: string;
  tailorName: string;
  tailorShop: string;
  amount: number;
  method: string;
  status: TransactionStatus;
  date: string;
  invoiceId: string;
}

export interface Invoice {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  tailorName: string;
  tailorShop: string;
  items: {
    description: string;
    quantity: number;
    price: number;
  }[];
  tax: number;
  discount: number;
  total: number;
  status: 'paid' | 'unpaid';
}

export interface Coupon {
  code: string;
  discount: number; // percentage or flat
  description: string;
  isApplied?: boolean;
}
