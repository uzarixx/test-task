import { Router } from 'express';
import {authRouter} from './auth';
import {walletRouter} from './wallet';

export const router = Router();

router.use('/', authRouter)
router.use('/', walletRouter)

