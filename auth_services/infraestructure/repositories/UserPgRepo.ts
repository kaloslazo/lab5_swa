import { UserRepository } from '../../domain/ports/UserRepository';
import { User } from '../../domain/entities/User';
import { db } from '../../config/db';

export class UserPgRepo implements UserRepository {
  async create(user: User) {
    await db('users').insert({
      id: user.id,
      email: user.email,
      password_hash: user.passwordHash,
      role: user.role,
      created_at: user.createdAt
    });
  }

  async findByEmail(email: string) {
    const result = await db('users').where({ email }).first();
    if (!result) return null;

    return {
      id: result.id,
      email: result.email,
      passwordHash: result.password_hash,
      role: result.role,
      createdAt: result.created_at
    };
  }
}
