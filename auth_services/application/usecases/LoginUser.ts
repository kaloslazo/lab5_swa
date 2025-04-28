import { UserRepository } from '../../domain/ports/UserRepository';
import bcrypt from 'bcrypt';

export class LoginUser {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) throw new Error('Invalid credentials');

    return { message: 'Login successful', userId: user.id, role: user.role };
  }
}
