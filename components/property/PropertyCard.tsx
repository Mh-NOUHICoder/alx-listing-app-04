'use client';

// Export the interface so it can be used in other components
export interface Property {
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
  const {
    title,
    description,
    price,
    location,
    image,
    bedrooms,
    bathrooms
  } = property;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 w-full">
        {image ? (
          <img 
            src={image} 
            alt={title}
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
          {title}
        </h3>
        
        <p className="text-gray-600 mb-2 line-clamp-2">
          {description || 'No description available'}
        </p>

        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        {/* Bedrooms and Bathrooms */}
        {(bedrooms !== undefined || bathrooms !== undefined) && (
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            {bedrooms !== undefined && (
              <span>{bedrooms} bed{bedrooms !== 1 ? 's' : ''}</span>
            )}
            {bathrooms !== undefined && (
              <span>{bathrooms} bath{bathrooms !== 1 ? 's' : ''}</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ${price.toLocaleString()}
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}