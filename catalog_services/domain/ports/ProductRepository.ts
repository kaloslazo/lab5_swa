import { Product } from '../entities/Product';

export interface ProductRepository {
  list(): Promise<Product[]>;
  getById(id: string): Promise<Product | null>;
  search(query: string): Promise<Product[]>;
  sync(products: Product[]): Promise<void>;
}
