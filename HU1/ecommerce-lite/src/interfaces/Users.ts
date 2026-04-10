import { UserRole } from "./products";

export interface User {
    id: string; 
    fullName: string; 
    email: string; 
    isActive: boolean; 
    role:UserRole ,
    address:string; 
    createdAt: Date;
    description:string;
}

export interface UserCardProps { 
    user: User;
}