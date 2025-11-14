import { NextApiRequest, NextApiResponse } from 'next';

// Mock data - replace with your actual database logic
const reviewsData: { [key: string]: any[] } = {
  '1': [
    {
      id: 'rev1',
      userId: 'user1',
      userName: 'John Smith',
      rating: 5,
      comment: 'Amazing apartment! The location was perfect and the views were stunning. Everything was clean and modern. Would definitely stay here again!',
      date: '2024-01-15',
      userAvatar: '/api/placeholder/40/40'
    },
    {
      id: 'rev2',
      userId: 'user2',
      userName: 'Sarah Johnson',
      rating: 4,
      comment: 'Great place with excellent amenities. The host was very responsive and helpful. The only minor issue was the street noise at night.',
      date: '2024-01-10',
      userAvatar: '/api/placeholder/40/40'
    },
    {
      id: 'rev3',
      userId: 'user3',
      userName: 'Mike Chen',
      rating: 5,
      comment: 'Perfect stay! The apartment had everything we needed and more. The check-in process was smooth and the location was convenient.',
      date: '2024-01-05'
    }
  ],
  '2': [
    {
      id: 'rev4',
      userId: 'user4',
      userName: 'Emily Davis',
      rating: 5,
      comment: 'Beautiful family home! The backyard was perfect for our kids and the neighborhood was quiet and safe. We had a wonderful time!',
      date: '2024-01-12',
      userAvatar: '/api/placeholder/40/40'
    },
    {
      id: 'rev5',
      userId: 'user5',
      userName: 'Robert Wilson',
      rating: 4,
      comment: 'Very comfortable house with plenty of space. The kitchen was well-equipped and the bedrooms were spacious. Great value for money!',
      date: '2024-01-08'
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ message: 'Invalid property ID' });
    }

    const reviews = reviewsData[id] || [];
    
    return res.status(200).json(reviews);
  }

  if (req.method === 'POST') {
    // Handle adding new review
    const { userId, userName, rating, comment, userAvatar } = req.body;

    if (!userId || !userName || !rating || !comment) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    const newReview = {
      id: `rev${Date.now()}`,
      userId,
      userName,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0],
      userAvatar: userAvatar || null
    };

    // In real application, save to database
    if (!reviewsData[id as string]) {
      reviewsData[id as string] = [];
    }
    reviewsData[id as string].unshift(newReview);

    return res.status(201).json(newReview);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}