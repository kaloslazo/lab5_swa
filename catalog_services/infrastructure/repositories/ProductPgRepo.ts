import { ProductRepository } from '../../domain/ports/ProductRepository';
import { Product } from '../../domain/entities/Product';
import { db } from '../../config/db';

export class ProductPgRepo implements ProductRepository {
  async list() {
    return await db('products').select();
  }

  async getById(id: string) {
    return await db('products').where({ id }).first();
  }

  async search(query: string) {
    return await db('products').where('name', 'ilike', `%${query}%`);
  }

  async sync(products: Product[]) {
    // Ejemplo muy simple: hacer bulk upsert
    for (const product of products) {
      await db('products')
        .insert(product)
        .onConflict('id')
        .merge();
    }
  }
}
