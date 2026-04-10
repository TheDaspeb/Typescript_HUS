export interface User {
    id: number,
    fullName: string,
    email: string,
    password: string,
    role?: string,
    createdAt?:Date
}

export interface LoginCredentials {
    email:string
    password:string
}

export interface NewUserData {
    fullname:string,
    email:string,
    password:string,
    role?:string,
    createdAt?:Date
}
