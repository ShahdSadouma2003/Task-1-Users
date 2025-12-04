import { Injectable, signal } from '@angular/core';

export interface User {
  company: any;
  website: string;
  phone: string;
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = signal<User[]>([]);

  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.users.set(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  addUser(user: User) {
    this.users.update(users => [...users, user]);
  }

  getUserById(id: number): User | undefined {
    return this.users().find(user => user.id === id);
  }

  async deleteUser(id: number) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' });
      this.users.update(users => users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
}