export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  concerns?: string[];
  rating?: number;
  reviewCount?: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export interface CategoryWithSubcategories extends Category {
  subcategories: Subcategory[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export type SortOption = 'newest' | 'price_low' | 'price_high';
