import { ProductRepository } from '../../domain/ports/ProductRepository';

export class ListProducts {
  constructor(private repo: ProductRepository) {}

  async execute() {
    return await this.repo.list();
  }
}
