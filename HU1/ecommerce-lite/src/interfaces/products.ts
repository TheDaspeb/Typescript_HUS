export type UserRole = 'customer' | 'admin';

export interface Product {
    sku: string;
    name: string; 
    brand: string; 
    quantity: number;
    price: number; 
    isActive: boolean; 
    category: string; 
    imageUrl: string; 
    createdAt: Date;
    despcription?:string;
}

export interface ProductcardProps {
    product: Product;
}