import express from 'express';
import { ProductPgRepo } from '../repositories/ProductPgRepo';
import { ListProducts } from '../../application/usecases/ListProducts';
import { GetProductById } from '../../application/usecases/GetProductById';
import { SearchProducts } from '../../application/usecases/SearchProducts';
import { SyncCatalog } from '../../application/usecases/SyncCatalog';

const router = express.Router();
const repo = new ProductPgRepo();
const listProducts = new ListProducts(repo);
const getProductById = new GetProductById(repo);
const searchProducts = new SearchProducts(repo);
const syncCatalog = new SyncCatalog(repo);

router.get('/api/catalog', async (req, res) => {
  const products = await listProducts.execute();
  res.json(products);
});

router.get('/api/catalog/:id', async (req, res) => {
  const product = await getProductById.execute(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
});

router.get('/api/catalog/search', async (req, res) => {
  const query = req.query.q as string;
  const results = await searchProducts.execute(query);
  res.json(results);
});

router.post('/api/catalog/sync', async (req, res) => {
  const products = req.body; // array de productos
  await syncCatalog.execute(products);
  res.status(200).json({ message: 'Catalog synced' });
});

export default router;
