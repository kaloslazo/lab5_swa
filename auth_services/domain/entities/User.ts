export interface User {
    id: string;
    email: string;
    passwordHash: string;
    role: 'client' | 'supplier' | 'admin';
    createdAt: Date;
  }