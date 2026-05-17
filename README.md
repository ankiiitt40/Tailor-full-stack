# StitchConnect 🧵✂️

StitchConnect is a premium, modern, and highly scalable SaaS marketplace connecting customers with bespoke tailors. It serves as a unified platform bridging the gap between local tailoring businesses and modern consumers, providing real-time chats, appointment bookings, order tracking, and comprehensive analytics.

Built with performance, luxury, and real-time synchronization in mind.

---

## 🚀 Tech Stack

- **Frontend Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS for Glassmorphism & UI Tokens
- **UI Components:** ShadCN UI, Lucide React
- **Animations:** Framer Motion, GSAP
- **State Management:** Zustand (Persisted Storage)
- **Backend & Database:** Firebase (Firestore, Authentication, Storage)
- **Real-time Sync:** Firebase `onSnapshot` listeners
- **Form Validation:** React Hook Form + Zod
- **External Integrations:** Razorpay (Payments), Cloudinary, Google Maps API

---

## 🔥 Platform Features

### 👤 User Portal (Customer Side)
- **Tailor Discovery:** Browse top-rated local tailors with advanced filtering (price, distance, rating, specialty).
- **Interactive Booking:** Seamlessly book appointments and enter custom measurements.
- **Real-time Chat:** Instant messaging with tailors for design discussions and updates.
- **Favorites & Wishlist:** Save favorite tailors and bespoke design inspirations.
- **Order Tracking:** Live status tracking from `Pending` -> `Stitching` -> `Delivered`.
- **Review System:** Leave ratings and upload photos of finished garments.

### ✂️ Tailor Portal (Vendor Side)
- **Dedicated Dashboard:** A beautiful, analytics-rich dashboard summarizing revenue, active orders, and customer metrics.
- **Order Management:** Accept, update, and manage bookings through a Kanban-style pipeline.
- **Design Portfolio:** Upload and showcase signature designs, pricing, and custom catalogs via Firebase Storage.
- **Real-time Notifications:** Instant alerts for new bookings and customer messages.
- **Shop Status:** Toggle online/offline status to control visibility on the user map.

### 👑 Admin Portal (Platform Management)
- **Global Overview:** Bird's eye view of total platform revenue, user growth, and active tailors.
- **User Management:** Monitor, suspend, or upgrade user and tailor accounts.
- **Platform Settings:** Configure global platform fees, tax brackets, and featured tailors.
- **Security:** Protected routes ensuring only authenticated admins can access sensitive metrics.

---

## 🏗️ Architecture

StitchConnect follows a modular, service-oriented architecture ensuring clean separation of concerns:

```text
src/
 ├── app/               # Next.js 15 App Router pages & API routes
 ├── components/        # Reusable UI components & Layouts (Auth, Tailor, Admin)
 ├── firebase/          # Firebase Client & Admin SDK initialization
 ├── services/          # Abstracted Firestore logic (auth, tailors, bookings, chat)
 ├── stores/            # Zustand global state (authStore, bookingStore, uiStore)
 ├── hooks/             # Custom React hooks (usePagination, useRealtime)
 ├── validations/       # Zod schemas for strict form typing
 ├── constants/         # Role enums, booking statuses, collection names
 └── middleware.ts      # Edge middleware for Role-Based Access Control (RBAC)
```

---

## ⚙️ Prerequisites & Setup

1. **Node.js:** Ensure Node `v18.17+` is installed.
2. **Package Manager:** `npm` or `yarn`.
3. **Firebase Project:** A configured Firebase project with Firestore, Authentication, and Storage enabled.

### 1. Clone & Install
```bash
git clone <repository-url>
cd tailor
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory and populate it with your actual keys:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Google Maps (For Tailor Location Features)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Payments & Media (Optional for local testing)
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛡️ Security & Role-Based Access (RBAC)

Routing is strictly protected using Next.js Edge Middleware (`src/middleware.ts`). 
- `/dashboard/*` is restricted to authenticated users with the `user` or `admin` role.
- `/tailor-dashboard/*` is restricted to users with the `tailor` or `admin` role.
- `/admin/*` is strictly reserved for the `admin` role.

Authentication logic relies heavily on Firebase Auth synced with a robust Zustand `authStore` to ensure instant UI updates without flickering.

---

## 🚀 Production Deployment

StitchConnect is heavily optimized for Vercel. 
To build the project locally and verify the production bundle:
```bash
npm run build
npm run start
```
*Note: The Next.js compiler traverses all dynamic routes, so ensure your `.env.local` variables are present before building to prevent Firebase initialization failures.*
