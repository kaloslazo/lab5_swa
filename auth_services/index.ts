import { createServer } from './config/server';

const app = createServer();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`auth-service running on port ${PORT}`);
});
