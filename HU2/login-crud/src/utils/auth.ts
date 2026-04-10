import { users } from "../data/Users";
import { LoginCredentials, User } from "../interfaces/User";


export function authenticate(credentials: LoginCredentials): User | null {
    const userFound = users.find((user) => {
        return (
            user.email === credentials.email && user.password === credentials.password
        );
    });

    return userFound || null;
};