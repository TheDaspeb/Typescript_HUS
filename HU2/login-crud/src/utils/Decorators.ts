import { NewUserData, User } from '../interfaces/User';

type CreateMethod = (userData: NewUserData) => User;

export function addDefaultUserData(method: CreateMethod): CreateMethod {
  return function decoratedCreate(this: unknown, userData: NewUserData): User {
    const userWithExtras: NewUserData = {
      ...userData,
      role: 'user',
      createdAt: new Date(),
    };

    return method.call(this, userWithExtras);
  };
}