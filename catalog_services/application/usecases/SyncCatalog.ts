import { ProductRepository } from '../../domain/ports/ProductRepository';
import { Product } from '../../domain/entities/Product';

export class SyncCatalog {
  constructor(private repo: ProductRepository) {}

  async execute(products: Product[]) {
    await this.repo.sync(products);
  }
}
