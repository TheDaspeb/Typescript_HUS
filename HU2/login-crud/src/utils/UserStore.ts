import { NewUserData, User } from '../interfaces/User';
import { addDefaultUserData } from './Decorators';

export class UserStore {
  private users: User[];

  constructor(initialUsers: User[]) {
    this.users = initialUsers;
  }

  list(): User[] {
    console.log('GET /users');
    return this.users;
  }

  findByName(name: string): User | undefined {
    console.log(`GET /users?name=${name}`);
    return this.users.find(
      (user) => user.fullName.toLowerCase() === name.toLowerCase()
    );
  }

  create(userData: NewUserData): User {
    console.log('POST /users', userData);

    const newUser: User = {
      id: this.users.length + 1,
      ...userData,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, userData: Partial<User>): User | null {
    console.log(`PATCH /users/${id}`, userData);

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return null;
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
    };

    return this.users[userIndex];
  }

  remove(id: number): boolean {
    console.log(`DELETE /users/${id}`);

    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }
}

const createDescriptor = Object.getOwnPropertyDescriptor(
  UserStore.prototype,
  'create'
);

if (createDescriptor && createDescriptor.value) {
  createDescriptor.value = addDefaultUserData(createDescriptor.value);
  Object.defineProperty(UserStore.prototype, 'create', createDescriptor);
}