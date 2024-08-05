import { Router } from 'express';
import { addUser } from '../controllers/user.controller';

const router = Router();

router.post('/', addUser)

export default router;