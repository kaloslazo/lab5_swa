import express from 'express';
import { RegisterUser } from '../../application/usecases/RegisterUser';
import { LoginUser } from '../../application/usecases/LoginUser';
import { UserPgRepo } from '../repositories/UserPgRepo';

const router = express.Router();
const repo = new UserPgRepo();
const registerUser = new RegisterUser(repo);
const loginUser = new LoginUser(repo);

router.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await registerUser.execute(email, password);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser.execute(email, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default router;
