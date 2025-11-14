'use client';
import Link from 'next/link';

interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  location: string;
  image?: string;
  bedrooms?: number;
  bathrooms?: number;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        {property.image ? (
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {property.title}
        </h3>
        
        <p className="text-gray-600 mb-2 line-clamp-2">
          {property.description || 'No description available'}
        </p>

        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Bedrooms and Bathrooms */}
        {(property.bedrooms !== undefined || property.bathrooms !== undefined) && (
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            {property.bedrooms !== undefined && (
              <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
            )}
            {property.bathrooms !== undefined && (
              <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
            )}
          </div>
        )}

        {/* Price and View Details Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <Link 
            href={`/property/${property.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}