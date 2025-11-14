import { NextApiRequest, NextApiResponse } from 'next';

// Mock data - replace with your actual database logic
const properties = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    description: 'Beautiful modern apartment located in the heart of downtown with amazing city views.',
    price: 350000,
    location: '123 Main St, Downtown, City',
    image: '/api/placeholder/400/300',
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    yearBuilt: 2020,
    amenities: ['Parking', 'Gym', 'Pool', 'Security']
  },
  {
    id: '2',
    title: 'Cozy Family House',
    description: 'Perfect family home with spacious rooms and a large backyard.',
    price: 550000,
    location: '456 Oak Ave, Suburb, City',
    image: '/api/placeholder/400/300',
    bedrooms: 4,
    bathrooms: 3,
    size: 2200,
    yearBuilt: 2015,
    amenities: ['Garden', 'Garage', 'Fireplace']
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const property = properties.find(p => p.id === id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    
    return res.status(200).json(property);
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}