// types.ts
/** Reusable primitive helper */
export type ISODateString = string;

/**
 * Minimal property shape (used for listing / cards).
 * Extend this to match your API response.
 */
export interface Property {
  id: string;
  title: string;
  description?: string | null;
  location?: string | null;      // e.g. "Paris, France"
  imageUrl?: string | null;      // main image
  images?: string[] | null;      // gallery images
  price?: number | null;         // price per night / unit (numeric)
  currency?: string | null;      // "USD", "EUR", ...
  rating?: number | null;        // average rating e.g. 4.5
  reviewsCount?: number | null;
  host?: {
    id: string;
    name?: string | null;
    avatarUrl?: string | null;
  } | null;
  amenities?: string[] | null;
  createdAt?: ISODateString | null;
  updatedAt?: ISODateString | null;
  // any other API-specific fields may be added here
}

/** Detailed property response (when fetching a single property) */
export interface PropertyDetail extends Property {
  // fields specific to the detail endpoint
  address?: string | null;
  maxGuests?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  // optionally include embedded arrays
  reviews?: Review[] | null;
  // ...extend as needed
}

/** Review object for a property */
export interface Review {
  id: string;
  author: string;
  authorId?: string | null;
  text: string;
  rating?: number | null;       // 0 - 5
  createdAt?: ISODateString | null;
}

/** Payload sent to POST /bookings (client -> server) */
export interface BookingPayload {
  propertyId: string;
  name: string;
  email: string;
  date: string;                 // ISO date string (YYYY-MM-DD or full ISO)
  guests?: number | null;
  notes?: string | null;
  // include any other metadata required by your API
}

/** Server responses (optional convenience types) */
export type PropertiesResponse = Property[];
export type PropertyDetailResponse = PropertyDetail;
export type ReviewsResponse = Review[];

/** Example error shape you might get from your API */
export interface ApiError {
  message: string;
  code?: string | number;
  details?: unknown;
}
