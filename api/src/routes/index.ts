import { Router } from 'express';
import { authRouter } from './auth';
import { walletRouter } from './wallet';
import { userCardRouter } from './userCard';
import { transactionRouter } from './transactions';
import { notificationsRouter } from './notifications';

export const router = Router();

router.use('/', authRouter);
router.use('/', walletRouter);
router.use('/', userCardRouter);
router.use('/', transactionRouter);
router.use('/', notificationsRouter)

