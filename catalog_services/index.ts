import { createServer } from './config/server';

const app = createServer();
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`catalog-service running on port ${PORT}`);
});
