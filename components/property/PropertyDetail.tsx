'use client';

interface Property {
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
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const {
    title,
    description,
    price,
    location,
    image,
    bedrooms,
    bathrooms,
    size,
    yearBuilt,
    amenities = []
  } = property;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-xl text-blue-600 font-semibold">${price.toLocaleString()}</p>
        <div className="flex items-center text-gray-600 mt-2">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Image Available</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Description</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Property Features */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {bedrooms && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{bedrooms} Bedroom{bedrooms !== 1 ? 's' : ''}</span>
                </div>
              )}
              {bathrooms && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{bathrooms} Bathroom{bathrooms !== 1 ? 's' : ''}</span>
                </div>
              )}
              {size && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  <span>{size} sq ft</span>
                </div>
              )}
              {yearBuilt && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Year Built: {yearBuilt}</span>
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          {amenities.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}