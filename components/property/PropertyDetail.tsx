'use client';

import ReviewSection from './ReviewSection';

// Add this to your existing PropertyDetail component, probably at the bottom:
interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    image?: string;
    bedrooms?: number;
    bathrooms?: number;
    size?: number;
    yearBuilt?: number;
    amenities?: string[];
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  // ... your existing PropertyDetail code ...

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Your existing property details... */}
      
      {/* Add the ReviewSection at the bottom */}
      <ReviewSection propertyId={property.id} />
    </div>
  );
}