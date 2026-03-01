
export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
  imageUrl?: string; // Specific image for this color
  price?: number; // Override price for this specific variant/material
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  colors: ProductColor[];
  images: string[]; // Gallery of images (angles, etc.)
  extraImages?: string[]; // Secondary gallery for lifestyle/usage context
  features: string[];
  isSpecialShipping?: boolean; // Flag for products that require custom quoting/shipping
  isComingSoon?: boolean; // Flag for products that are coming soon
}

/**
 * Interface for chat messages used in the ChatBot component
 */
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

/**
 * Interface for items in the shopping cart, extending Product with selection-specific fields
 */
export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}