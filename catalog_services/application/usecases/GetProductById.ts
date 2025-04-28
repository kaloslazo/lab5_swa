import { ProductRepository } from '../../domain/ports/ProductRepository';

export class GetProductById {
  constructor(private repo: ProductRepository) {}

  async execute(id: string) {
    return await this.repo.getById(id);
  }
}
