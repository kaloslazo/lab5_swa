import express from 'express';
import catalogRoutes from '../infrastructure/server/routes';

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(catalogRoutes);
  return app;
};
