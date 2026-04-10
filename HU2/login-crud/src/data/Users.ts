import { User }  from "../interfaces/User";

export const users: User[]= [
    {
        id:1, 
        fullName:"Daniel Perez", 
        email:"daniel@gmail.com", 
        password:"1234", 
        role: "admin",
        createdAt: new Date (2024/4/10)
    },
    {
        id:2, 
        fullName:"Alejandra Garcia", 
        email:"alejita@gmail.com", 
        password:"4321", 
        role: "user",
        createdAt: new Date (2025/4/10)
    },
    {
        id:3, 
        fullName:"Pepito Perez", 
        email:"Pepitin@gmail.com", 
        password:"2134", 
        role: "admin",
        createdAt: new Date (2026/4/10)
    },
];

