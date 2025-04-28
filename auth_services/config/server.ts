import express from 'express';
import authRoutes from '../infrastructure/server/routes';

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(authRoutes);
  return app;
};
