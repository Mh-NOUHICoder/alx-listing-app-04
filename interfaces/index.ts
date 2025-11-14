/**
 * interfaces/index.ts
 * Centralized TypeScript interfaces used across the app.
 */

export interface CardProps {
  id?: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void | Promise<void>;
  className?: string;
  disabled?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;        
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;        
  id?: string | number;        
  description?: string;   
  imageUrl?: string;

  
}

export type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};
