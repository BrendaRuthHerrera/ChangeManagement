
import { Router, Request, Response, NextFunction } from 'express';
import { register, login } from '../controllers/authController';
import { check, validationResult } from 'express-validator';

const router = Router();

router.post('/register', [
    check('username').isLength({ min: 3 }),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
], (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, register);

router.post('/login', login);

export default router;