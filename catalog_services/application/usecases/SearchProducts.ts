import { ProductRepository } from '../../domain/ports/ProductRepository';

export class SearchProducts {
  constructor(private repo: ProductRepository) {}

  async execute(query: string) {
    return await this.repo.search(query);
  }
}
