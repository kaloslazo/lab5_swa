import { UserRepository } from '../../domain/ports/UserRepository';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export class RegisterUser {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string, password: string) {
    const existing = await this.userRepo.findByEmail(email);
    if (existing) throw new Error('User already exists');

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      id: uuidv4(),
      email,
      passwordHash,
      role: 'client',
      createdAt: new Date()
    };

    await this.userRepo.create(newUser);
    return { message: 'User registered successfully', userId: newUser.id };
  }
}
