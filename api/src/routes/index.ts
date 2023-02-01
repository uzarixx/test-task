import { Router } from 'express';
import { authRouter } from './auth';
import { walletRouter } from './wallet';
import { userCardRouter } from './userCard';

export const router = Router();

router.use('/', authRouter);
router.use('/', walletRouter);
router.use('/', userCardRouter);

