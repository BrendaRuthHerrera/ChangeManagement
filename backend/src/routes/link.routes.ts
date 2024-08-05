import { Router } from 'express'
import { getLinks } from '../controllers/links.controller';

const router = Router();

router.get('/', getLinks);

export default router;