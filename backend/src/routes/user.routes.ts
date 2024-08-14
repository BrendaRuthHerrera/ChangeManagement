import { Router } from 'express';
import { addUser } from '../controllers/user.controller';
import { loginUser } from '../controllers/user.controller';
import { verifyEmail } from '../controllers/auth.controller';

const router = Router();

router.post('/register', addUser)
router.post('/login', loginUser)
router.get('/verify-email', verifyEmail);

export default router;